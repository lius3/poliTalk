import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


/**Vote buttons that redirect to Log In if user is not authenticated. */
function UnAuthdVoteBtns() {

    const { loginWithRedirect } = useAuth0();

    return (
        <div className="vote_buttons">
            <button id="yay" onClick={()=>loginWithRedirect()}>YES</button>
            <button id="nay" onClick={()=>loginWithRedirect()}>NO</button>
        </div>
    )
}

export default UnAuthdVoteBtns;