import React, { useState } from 'react';


import UserForm from "../components/forms_components/UserForm.jsx"
import FormsHead from "../components/forms_components/FormsHead.jsx"
import {LoginButton, RedirectButton} from '../components/forms_components/FormsButton.jsx';
import FormDivider from '../components/forms_components/FormDivider.jsx';



function LoginError() {
    return (
        <p style={{marginTop:"10px", color:"red", textAlign:"center"}}>login was unsuccessful</p>
    )
}


export default function Login() {

     const [failLogin, setFail] = useState(false);

    if (failLogin) {

        return (
            <> 
                <div className="container containerStyle">
                    <div className="row justify-content-center"  align="center">
                        <FormsHead/>
                    </div>
                    
                    <div className="row justify-content-center">
                        <UserForm type="text" text="Username" formType="long"/>
                    </div>

                    <div className="row justify-content-center">
                        <UserForm type="password" text="Password" formType="long"/>
                    </div>

                    <div className="row justify-content-center">
                    
                       <LoginButton buttonType="small" message="Log in" functionType="login" param1 ={setFail}/>
                       <RedirectButton buttonType="small" message ="Sign up" link="./SignUp"/>
            
                    </div>

                    <FormDivider/>

                    <div className="row justify-content-center">
                        <LoginButton buttonType="big"  message="Log in with Google" functionType="loginWithRedirect"/>
                    </div>

                    <LoginError/>
                
                </div>    
                
            </>
        );

    }
    
    else{
        return (
            <> 
                <div className="container containerStyle">
                    <div className="row justify-content-center"  align="center">
                        <FormsHead/>
                    </div>
                    
                    <div className="row justify-content-center">
                        <UserForm type="text" text="Username" formType="long"/>
                    </div>

                    <div className="row justify-content-center">
                        <UserForm type="password" text="Password" formType="long"/>
                    </div>

                    <div className="row justify-content-center">
                    
                        <LoginButton buttonType="small" message="Log in" functionType="login" param1 ={setFail}/>  
                        
                        <RedirectButton buttonType="small" message ="Sign up" link="./SignUp"/>
                    
                        
            
                    </div>

                    <FormDivider/>

                    <div className="row justify-content-center">
                        <LoginButton buttonType="big"  message="Log in with Google" functionType="loginWithRedirect"/>
                    </div>
                
                </div>    
                
            </>
        );
    }
}



// function LoginButton({buttonType, setFail}){

//     var message;
//     var buttonStyle;
//     const history = useHistory();
//     const { loginWithRedirect } = useAuth0();


//     if(buttonType === "Google" || buttonType === "Facebook"){
//         message = `Login with ${buttonType.toString()}` ;
//         buttonStyle = buttonStyleBig;

//         return(
//             <div className="row justify-content-center">
//                 <div className="col-4">
//                     <input type="submit" value={message} style={buttonStyle} onClick={()=>loginWithRedirect()}></input>
//                 </div>
//            </div>
//         );
//     }
//     else if(buttonType === "Log in"){

//         message = `${buttonType.toString()}`;
//         buttonStyle = buttonStyleBig;

//         return(
//             <div className="row justify-content-center">
//                 <div className="col-4">
//                     <input onClick={()=>sendLogin(history, setFail)} type="submit" value={message} style={buttonStyle} ></input>
//                 </div>
//             </div>
//         );
//     }
//     else{
//         throw new Error("Incorrect buttonType");
//     }
// }



// export default function Login() {

//     const [failLogin, setFail] = useState(false);

//     if (failLogin) {
//         return (
//             <>  
//                 <div className="container" style={containerStyle}>
//                     <Head/>
//                     <LoginForm type = "text" text = "Username"/>
//                     <LoginForm type = "password" text = "Password"/>
//                     <LoginButton setFail={setFail} buttonType="Log in"/>
//                     <Divider/>
//                     <LoginButton buttonType="Google"/>
//                     <LoginButton buttonType="Facebook"/>
//                     <LoginError/>
//                 </div>          
//             </>
        
//         )
//     }
//     else {
//         return (
//                 <>  
//                     <div className="container" style={containerStyle}>
//                         <Head/>
//                         <LoginForm type = "text" text = "Username"/>
//                         <LoginForm type = "password" text = "Password"/>
//                         <LoginButton setFail={setFail} buttonType="Log in"/>
//                         <Divider/>
//                         <LoginButton buttonType="Google"/>
//                         <LoginButton buttonType="Facebook"/>
//                     </div>   
//                 </>
//         )
//     }
// }