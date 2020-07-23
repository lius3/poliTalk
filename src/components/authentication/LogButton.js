import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


function LogButton () {
    
    const { loginWithRedirect } = useAuth0();

    return (
        <button style={{width:"100px", height:"100px"}}onClick={()=> loginWithRedirect()}></button>
    )
}

export default LogButton;