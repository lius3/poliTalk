import React from 'react';
import {Link} from 'react-router-dom';
import "./Forms.css"


function Head() {
    return(
       
        <div className="row justify-content-center"  align="center">
            <div className="col-6">
                <Link to="/" exact style={{textDecoration:"none"}}> 
                    <header className="headStyle">
                        <h1 className="h1Style">Politalk</h1>
                    </header>
                </Link>
            </div>         
        </div>
    );
}

function LoginForm({type, text, formType}){

    if(formType == "long"){
        return(
            <>
                <div className="row justify-content-center">
                    <div className="col-4" align="center">
                        <label align="left" style={{width:"100%"}} for={text}>{text}:</label>
                        <input id={text} className="formComponentStyle" type={type} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
                    </div>
                </div>
           </>
        );
    }
    else if(formType == "short"){
        return(
            <>
             <div className="col-2">
               <label align="left" style={{width:"100%"}} for={text}>{text}:</label>
                <input id={text} className="formComponentStyle" type={type} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
            </div>
            </>
        )
    }
    else{
        return null;
    }
    
}


function LoginButton({buttonType, message}){

    let buttonStyle;

    if(buttonType == "big"){
   
        buttonStyle = "buttonStyleBig";

        return(
            <div className="row justify-content-center">
                <div className="col-4">
                    <input type="submit" value={message} className= {buttonStyle} ></input>
                </div>
           </div>
        );
    }
    else if(buttonType == "small"){
        message = `${buttonType.toString()}`;
        buttonStyle = "buttonStyleSmall";

        return(
            <div className="col-2">
                <input type="submit" value={message} className= {buttonStyle} ></input>
            </div>
        );
    }
    else{
        throw new Error("Incorrect buttonType");
    }
}

export default function Signup() {
    return (
        <>
        <div className="container containerStyle">
            <Head/>
            <div className="row justify-content-center">
                <LoginForm type="text" text="Fisrt name" formType="short"/>
                <LoginForm type="text" text="Last name" formType="short"/>
            </div>
            

            <LoginForm type="text" text="Email" formType="long"/>
            <LoginForm type="text" text="Username" formType="long"/>
            <LoginForm type="password" text="Password" formType="long"/>
            <LoginForm type="password" text="Confirm Password" formType="long"/>

            <LoginButton buttonType="big" message="Sign up"/>
        </div>
        </>
    )
}
