import React, { useState, useEffect }   from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PieChart from './PieChart';
import UnAuthdVoteBtns from './UnAuthdVoteBtns';

/*This file returns the PieChart and Vote buttons*/

function VotingSystem({yays, nays, setYays, setNays, setComment_Id, changeCommentsList}) {
    const [ loaded, setLoaded ] = useState(true); /*This variable is used to make sure that some useEffects are triggered only once every time Home page loads. */

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
    if (!isAuthenticated) {
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
    
        const sendVote = () => {
          /**Client-Server interactions that happens once user submits their vote. */
            let you_voted = document.getElementById("you_voted");
            let explain = document.getElementById("explanation");
            if (you_voted.innerHTML == "You voted Yay.") {
                var poll_data = {vote : 'YAY'};
                var data = {username: user.name, explanation: explain.value, vote: 1};
                setYays(yays+1);
            }
            else {
                var poll_data = {vote : 'NAY'};
                var data = {username: user.name, explanation: explain.value, vote: 0};
                setNays(nays+1);
            }
            let poll_table = "https://polls.thien-bui.com/index.php";
            let req = new Request("https://explanations.thien-bui.com/index.php",
            {
                method:'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)    
            })
            
            fetch(req)
            .then(()=>{
                setComment_Id(null)
            })
            .catch (console.error())

            let update_poll = new Request(poll_table, {
              method:'post',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type':'application/json'
              },
              body: JSON.stringify(poll_data)    
            })
            fetch(update_poll)
            .catch (console.error())
            closeVote();
            changeCommentsList([])
            
            window.location.hash = "comments_box";
        }
        
        /**Open the popup and display text according if user clicked Yay or Nay button. */
        const openVote = (vote) => {
            let disable = document.getElementById("gray_out");
            let popup = document.getElementById("popup_container");
            let you_voted = document.getElementById("you_voted");
            disable.style.display = "block";
            popup.style.display = "block";
            you_voted.innerHTML = "You voted " + vote + "."
            you_voted.style.color = "white";
        }
        /**Close the popup. */
        const closeVote = () => {
            let disable = document.getElementById("gray_out");
            let popup = document.getElementById("popup_container");
            let explain = document.getElementById("explanation");
            disable.style.display = "none";            
            popup.style.display = "none";
            explain.value = "";
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
                <div className="row" style={{height:"2px", backgroundColor:"#184f64"}}></div>
                <div className="row" style={{height:"88%", marginTop:"10px"}}>
                    <div style={{display:"flex", height:"75%", width:"100%", marginTop:"20px"}}>
                        <div id="profile_pic_container">
                            <img id="profile_pic" className="rounded-circle" src={user.picture} alt="Yeet"/>
                        </div>
                        <div id="explain-area">
                                <div>
                                    <h2 id="you_voted"></h2>
                                </div>
                                <textarea onKeyDown={(pressedKey) => pressedKey.keyCode == 13 /*Is the pressed key the enter button*/? sendVote() : null }
                                 placeholder="Please explain why..." id="explanation" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div id="send_vote_container">
                        <button id="send_vote" onClick={()=> sendVote()}>
                            Vote
                        </button>
                    </div>        
                </div>
            </div>
            {/* The yay and nay buttons */}
            <div className="vote_buttons">
                <button id="yay" onClick={()=>openVote("Yay")}>YAY</button>
                <button id="nay" onClick={()=>openVote("Nay")}>NAY</button>
            </div>
            </>
        );
    }

}

export default VotingSystem;