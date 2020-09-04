import React from 'react';
import {Link} from 'react-router-dom';
import UserForm from "../components/forms_components/UserForm.jsx"
import FormsHead from "../components/forms_components/FormsHead.jsx"
import {SignUpButton} from '../components/forms_components/FormsButton.jsx';
// import "../components/forms_components/Forms.css"

// function SignupButton({buttonType, message}){

//     let buttonStyle;

//     const sendRegistration = () => {
//         let first_name = document.getElementById("First name").value;
//         let last_name = document.getElementById("Last name").value;
//         let email = document.getElementById("Email").value;
//         let username = document.getElementById("Username").value;
//         let password = document.getElementById("Password").value;
//         let data = {first_name: first_name, last_name: last_name, username: username, password: password, email: email}

//         let req = new Request("http://localhost/politalk/auth/signup.php", 
//         {
//             method:'post',
//             headers: {
//                 'Accept' : 'application/json',
//                 'Content-Type' : 'application/json'
//             },
//             body: JSON.stringify(data)
//         }
//         );

//         fetch(req)
//         .catch(console.error())
//     }

//     if(buttonType == "big"){
   
//         buttonStyle = "buttonStyleBig";

//             <div className="row justify-content-center">
//                 <UserForm type="text" text="Username" formType="long"/>
//             </div>
//                 <div className="col-4">
//                     <input onClick={()=> sendRegistration()} type="submit" value={message} className= {buttonStyle} ></input>
//                 </div>
//            </div>
//         );
//     }
//     else if(buttonType == "small"){
//         message = `${buttonType.toString()}`;
//         buttonStyle = "buttonStyleSmall";

//             <div className="row justify-content-center">
//                 <UserForm type="password" text="Password" formType="long"/>
//             </div>

//             <div className="row justify-content-center">
//                 <UserForm type="password" text="Confirm Password" formType="long"/>
export default function Signup() {
    
    return (
        <>
        <div className="container containerStyle">
            <div className="row justify-content-center"  align="center">
                <FormsHead/>
            </div>

            <div className="row justify-content-center">
                <UserForm type="text" text="First name" formType="short"/>
                <UserForm type="text" text="Last name" formType="short"/>
            </div>
            

            <div className="row justify-content-center">
                <UserForm type="text" text="Email" formType="long"/>
            </div>

            <div className="row justify-content-center">
                <UserForm type="text" text="Username" formType="long"/>
            </div>

            <div className="row justify-content-center">
                <UserForm type="password" text="Password" formType="long"/>
            </div>

            <div className="row justify-content-center">
                <UserForm type="password" text="Confirm Password" formType="long"/>
            </div>
            
            <div className="row justify-content-center">
                <SignUpButton buttonType="big" message="Sign up"/>
            </div>

        </div>
        </>
    )
}
