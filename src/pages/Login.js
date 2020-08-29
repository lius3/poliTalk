import React from 'react';
import UserForm from "../components/forms_components/UserForm.jsx"
import FormsHead from "../components/forms_components/FormsHead.jsx"
import FormsButton from '../components/forms_components/FormsButton.jsx';
import FormDivider from '../components/forms_components/FormDivider.jsx';
import Signup from './SignUp';


const dividerStyle = {
    backgroundColor: "black",
    height: "3px",
    marginTop: "15px",
    width: "100px"
}


export default function Login() {

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
                
                    <FormsButton buttonType="small" message="Log in"/>
                    <FormsButton buttonType="small" message ="Sign up"/>
        
                </div>

                <FormDivider/>

                <div className="row justify-content-center">
                    <FormsButton buttonType="big"  message="Log in with Google"/>
                </div>

                <div className="row justify-content-center">
                    <FormsButton buttonType="big" message="Log in with Facebook"/>
                </div>
            
            </div>    
            
        </>
       
    )
}