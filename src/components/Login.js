import React from 'react'

const headStyle = {
    width: "100%",
    height:"100px",
    backgroundColor: "blue",
    marginBottom: "15px",
}

const h1Style = {
    backgroundColor: "yellow",
    lineHeight: "100px",
}


const formComponentStyle ={
    backgroundColor: "red",
    width: "100%",
    height: "3rem",
  
}

const authComponentStyle = {
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

function Head(){
    return(
       
        <div className="row justify-content-center"  align="center">
            <div className="col-6">
                <header style={headStyle}><h1 style={h1Style}>Politalk</h1></header>
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

function Test(){
    console.log("hello");

    return null;
}

function LoginAuthentication({text}){

    var value;

    if(text === "Google"){
        value = "Login with Google";
    }
    else if(text === "Facebook"){
        value = "Login with Facebook";
    }
    else{
        value = "Login";
    }

    return(
        <div className="row justify-content-center">
            <div className="col-4" align = "center">
                <input type="submit" value={value} style={authComponentStyle} ></input>
            </div>
       
        </div>
    );
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
             <div className="container ">

                <Head/>
                
                <LoginForm type = "text" text = "Username"/>
                <LoginForm type = "password" text = "Password"/>
                <LoginAuthentication/>
                <LoginAuthentication/>
        
                <Divider/>

               
                <LoginAuthentication text="Google"/>
                <LoginAuthentication text="Facebook"/>
            </div>    

            <Test/>
            
        </>
       
    )
}
