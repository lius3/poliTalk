import React from 'react';
import {Link} from 'react-router-dom';
import LogButton from '../components/authentication/LogButton';

const containerStyle = {  
    position: 'absolute', 
    left: '50%', 
    top: '35%',
    transform: 'translate(-50%, -35%)',
    minWidth: "1000px"
}

const headStyle = {
    width: "100%",
    height:"100px",
    marginBottom: "15px",
    fontFamily: "'Spectral', serif",
    color: "#ffe599",
    backgroundColor: "#073763ff"
}

const h1Style = {
    lineHeight: "100px",
}


const formComponentStyle ={
    padding: "10px",
    width: "100%",
    height: "3rem",
  
}

const buttonStyleBig = {
    width: "100%",
    height: "3rem",
    marginTop:"15px",
}

const buttonStyleSmall = {
    width: "100%",
    height: "3rem",
    marginTop:"15px",
}


const dividerStyle = {
    backgroundColor: "black",
    height: "3px",
    marginTop: "15px",
    width: "100px"
}

function Head() {
    return(
       
        <div className="row justify-content-center"  align="center">
            <div className="col-6">
                <Link to="/" exact style={{textDecoration:"none"}}> 
                    <header style={headStyle}><h1 style={h1Style}>Politalk</h1></header>
                </Link>
            </div>         
        </div>
    );
}

function LoginForm({type, text}){
    return(
        <>
            <div className="row justify-content-center">
                <div className="col-4" align="center">
                    <label align="left" style={{width:"100%"}} for={text}>{text}:</label>
                    <input id={text} style={formComponentStyle} type={type} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
                </div>
            </div>
       </>
    );
}


function LoginButton({buttonType}){

    var message;
    var buttonStyle;

    if(buttonType === "Google" || buttonType === "Facebook"){
        message = `Login with ${buttonType.toString()}` ;
        buttonStyle = buttonStyleBig;

        return(
            <div className="row justify-content-center">
                <div className="col-4" align = "center">
                    <input type="submit" value={message} style={buttonStyle} ></input>
                </div>
           </div>
        );
    }
    else if(buttonType === "Log in" || buttonType === "Sign up"){
        message = `${buttonType.toString()}`;
        buttonStyle = buttonStyleSmall;

        return(
            <div className="col-2" align = "center">
                <input type="submit" value={message} style={buttonStyle} ></input>
            </div>
        );
    }
    else{
        throw new Error("Incorrect buttonType");
    }
}

function Divider(){

    return(
        <div className="row justify-content-center">

          {/*empty divider div */}
            <div className="col-2" style={dividerStyle}>  </div>     
            <div className="col-1">  </div>   
            <div className="col-2" style={dividerStyle}>  </div>    

        </div>
    );

  
}

export default function Login() {
    return (
        <>  
             <div className="container" style={containerStyle}>

                <Head/>
                
                <LoginForm type = "text" text = "Username"/>
                <LoginForm type = "password" text = "Password"/>

                <div className="row justify-content-center">
                
                    <LoginButton buttonType="Log in"/>
                    <LoginButton buttonType="Sign up"/>
        
                </div>

                <Divider/>

               
                <LoginButton buttonType="Google"/>
                <LoginButton buttonType="Facebook"/>
                
                <LogButton/>
            </div>    

           
            
        </>
       
    )
}