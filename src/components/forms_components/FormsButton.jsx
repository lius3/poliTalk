import React from 'react';
import "./Forms.css";

import { Link, useHistory} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { sendLogin, sendRegistration } from "../../auth/auth";



let buttonStyle;


export function LoginButton({buttonType, message, functionType, param1}) {

    const history = useHistory();

    const { loginWithRedirect } = useAuth0();

    let authorize;

    if(functionType == "login"){

        console.log(param1);
        
        authorize = () => {
            sendLogin(history, param1);
        }
    }

    else if(functionType == "loginWithRedirect"){
 
        authorize = () => {
            loginWithRedirect();
        }
    }
    else{
        authorize = () => {
            window.alert('nothing');
        }
    }


    if(buttonType == "big"){
    
        buttonStyle = "buttonStyleBig";

        return(    
            <div className="col-4">
                <input type="submit" value={message} className= {buttonStyle} onClick ={()=>authorize()}></input>
            </div>       
        );
    }
    else if(buttonType == "small"){
        
        buttonStyle = "buttonStyleSmall";

        return(
            <div className="col-2">
                <input type="submit" value={message} className= {buttonStyle} onClick ={()=>authorize()} ></input>
            </div>
        );
    }
    else{
        throw new Error("Incorrect buttonType");
    }
    
}


export function SignUpButton({buttonType, message}) {

    if(buttonType == "big"){
    
        buttonStyle = "buttonStyleBig";

        return(    
            <div className="col-4">
                <input type="submit" value={message} className= {buttonStyle} onClick ={()=>sendRegistration()}></input>
            </div>       
        );
    }
    else if(buttonType == "small"){
        
        buttonStyle = "buttonStyleSmall";

        return(
            <div className="col-2">
                <input type="submit" value={message} className= {buttonStyle} onClick ={()=>sendRegistration()} ></input>
            </div>
        );
    }
    else{
        throw new Error("Incorrect buttonType");
    }
    
}


export function RedirectButton({buttonType, message, link}){
    if(buttonType == "big"){
        buttonStyle = "buttonStyleBig";
        
        return (
            <div className = "col-4">
                <Link to={link}>
                    <input type="button" value={message} className={buttonStyle}></input>
                </Link>
            </div>
        );
    }

    else if(buttonType == "small"){

        buttonStyle = "buttonStyleSmall";
        
        return (
            <div className = "col-2">
                <Link to={link}>
                     <input type="button" value={message} className={buttonStyle}></input>
                </Link>
            </div>
        );
    }

    else{
        throw new Error("Incorrect buttonType");
    }
}








