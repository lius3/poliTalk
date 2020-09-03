import React, { useState, useEffect }   from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { openVote, closeVote, sendVote } from '../../../functions/voting_functions';
import { hasToken } from '../../../auth/auth.js';
import PieChart from './PieChart';
import UnAuthdVoteBtns from './UnAuthdVoteBtns';
import './VotingSystem.css';

/*This file returns the PieChart and Vote buttons*/

function VotingSystem({yays, nays, setYays, setNays, setComment_Id, changeCommentsList}) {
    /*This variable is used to make sure that some useEffects are triggered only once every time Home page loads. */
    const [ loaded, setLoaded ] = useState(true);

    const { isAuthenticated, user } = useAuth0();

    /*When the Home page is loaded, we pull in data from database to populate the values of our Pie Chart*/
    useEffect(()=> {
        fetch("https://polls.thien-bui.com/index.php")
        .then (res => res.json())
        .then (jsonData => {
            setYays(Number(jsonData.total_yays))
            setNays(Number(jsonData.total_nays))
        })
        .catch (console.error())
    }, [loaded])
    
    /*If the user is not authenticated, they will be redirected to the login page after clicking vote buttons. */
    if (!isAuthenticated && !hasToken()) {
        return (
            <>
            <PieChart yay_votes={yays} nay_votes={nays} />
            <UnAuthdVoteBtns/>
            </>
        );
    } 
    /*If the user is authenticated, the user can access a popup screen when the vote button is clicked. */
    else {
        window.onload = function() {
            let popup = document.getElementById("popup_container");
            if (window.innerWidth > 580) {
                popup.style.left = "30%";
            }
            else {
                popup.style.left = "12%";
            }
        }
        
        return (
            <>
            <PieChart yay_votes={yays} nay_votes={nays} />
            {/* Element used to gray out the screen when the Vote Popup appears*/}
            <div id="gray_out"></div>
            {/* The popup that displays once a Yay or Nay button is clicked */}
            <div id="popup_container" className="container">
                <div className="row" style={{height:"10%"}}>
                    <div className="col-1">
                        {/* The X button used to close the popup */}
                        <h4 id="close_popup" onClick={()=>closeVote()}>X</h4>
                    </div>
                </div>
                
                <div className="row" style={{height:"78%", }}>
                    {/* <div id="profile_pic_container">
                        <img id="profile_pic" className="rounded-circle" src={user.picture} alt="Yeet"/>
                    </div> */}
                    <div id="explain-area">
                            <div id="explain-header">
                                <h2 id="you_voted"></h2>
                            </div>
                            <textarea onKeyDown={(pressedKey) => pressedKey.keyCode === 13 /*Is the pressed key the enter button*/? 
                                sendVote(user, hasToken, yays, setYays, nays, setNays, setComment_Id, changeCommentsList) : null }
                                maxlength="1000" resize="none" placeholder="Please explain why..." id="explanation" cols="30" rows="10">
                            </textarea>
                    </div>                   
                </div>
                <div className="row justify-content-end" >
                    
                    <div className="col-3 text-center"> 
                        <button id="send_vote" className="" onClick={()=> sendVote(user, hasToken, yays, setYays, nays, setNays, setComment_Id, changeCommentsList)}>
                            Vote
                        </button>
                    </div> 
                   
                </div>    
            </div>
            {/* The yay and nay buttons */}
            <div className="vote_buttons">
                <button id="yay" onClick={()=>openVote("Yay")}>YES</button>
                <button id="nay" onClick={()=>openVote("Nay")}>NO</button>
            </div>
            </>
        );
    }

}

export default VotingSystem;