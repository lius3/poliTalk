import React from 'react';
import UserForm from "../components/forms_components/UserForm.jsx"
import FormsHead from "../components/forms_components/FormsHead.jsx"
import FormsButton from '../components/forms_components/FormsButton.jsx';
// import "../components/forms_components/Forms.css"


export default function Signup() {
    return (
        <>
        <div className="container containerStyle">
            <div className="row justify-content-center"  align="center">
                <FormsHead/>
            </div>

            <div className="row justify-content-center">
                <UserForm type="text" text="Fisrt name" formType="short"/>
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
                <FormsButton buttonType="big" message="Sign up"/>
            </div>

        </div>
        </>
    )
}
