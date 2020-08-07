import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


/**Vote buttons that redirect to Log In if user is not authenticated. */
function RedirectVoteButtons() {

    const { loginWithRedirect } = useAuth0();

    return (
        <div className="vote_buttons">
            <button id="yay" onClick={()=>loginWithRedirect()}>YAY</button>
            <button id="nay" onClick={()=>loginWithRedirect()}>NAY</button>
        </div>
    )
}

export default RedirectVoteButtons;