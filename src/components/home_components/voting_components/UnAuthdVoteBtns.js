import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


/**Vote buttons that redirect to Log In if user is not authenticated. */
function UnAuthdVoteBtns() {

    const { loginWithRedirect } = useAuth0();
    const history = useHistory();

    return (
        <div className="vote_buttons">
            <button id="yay" onClick={()=>history.push('/login')}>YES</button>
            <button id="nay" onClick={()=>history.push('/login')}>NO</button>
        </div>
    )
}

export default UnAuthdVoteBtns;