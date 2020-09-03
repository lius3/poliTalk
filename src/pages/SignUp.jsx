import React from 'react';
import {Link} from 'react-router-dom';
import "./Forms.css";


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

function SignupForm({type, text, formType}){

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


function SignupButton({buttonType, message}){

    let buttonStyle;

    const sendRegistration = () => {
        let first_name = document.getElementById("First name").value;
        let last_name = document.getElementById("Last name").value;
        let email = document.getElementById("Email").value;
        let username = document.getElementById("Username").value;
        let password = document.getElementById("Password").value;
        let data = {first_name: first_name, last_name: last_name, username: username, password: password, email: email}

        let req = new Request("http://localhost/politalk/auth/signup.php", 
        {
            method:'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }
        );

        fetch(req)
        .catch(console.error())
    }

    if(buttonType == "big"){
   
        buttonStyle = "buttonStyleBig";

        return(
            <div className="row justify-content-center">
                <div className="col-4">
                    <input onClick={()=> sendRegistration()} type="submit" value={message} className= {buttonStyle} ></input>
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
                <SignupForm type="text" text="First name" formType="short"/>
                <SignupForm type="text" text="Last name" formType="short"/>
            </div>
            

            <SignupForm type="text" text="Email" formType="long"/>
            <SignupForm type="text" text="Username" formType="long"/>
            <SignupForm type="password" text="Password" formType="long"/>
            <SignupForm type="password" text="Confirm Password" formType="long"/>

            <SignupButton buttonType="big" message="Sign up"/>
        </div>
        </>
    )
}
