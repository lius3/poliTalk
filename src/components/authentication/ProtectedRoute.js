import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';


function ProtectedRoute({protect_component, ...args}) {
    return (
        <Route component={withAuthenticationRequired(protect_component)} {...args}/>
    )
}

export default ProtectedRoute;