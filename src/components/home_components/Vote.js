import React from 'react';
import {useAuth0} from '@auth0/auth0-react';



function Vote(){

    const { isAuthenticated, user, loginWithRedirect,  } = useAuth0();

    /*If the user is not authenticated, they will be redirected to the login page. */
    console.log(isAuthenticated); 
    if (!isAuthenticated) {
        return (
            <>
            {/* The yay and nay buttons */}
            <div className="vote_buttons">
                <button id="yay" onClick={()=>loginWithRedirect()}>YAY</button>
                <button id="nay" onClick={()=>loginWithRedirect()}>NAY</button>
            </div>
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
                popup.style.left = "15%";
              }
        }
    
        function sendVote() {
            let explain = document.getElementById("explanation");
            let data = {username: user.name, explanation: explain.value};
            let req = new Request("http://localhost/politalk/comments.php",
            {
                method:'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)    
            })
            fetch(req)
            .then (response=>response.json())
            .then (jsonData=> JSON.stringify(jsonData))
            .then (stringData=>console.log(stringData))
            .catch (console.error())
            closeVote();
            //window.location.reload(); 
        }
            
        function officialVote(vote){
            let disable = document.getElementById("gray_out");
            let popup = document.getElementById("popup_container");
            let you_voted = document.getElementById("you_voted");
            disable.style.display = "block";
            popup.style.display = "block";
            you_voted.innerHTML = "You voted " + vote + "."
            you_voted.style.color = "white";
        }
        function closeVote() {
            let disable = document.getElementById("gray_out");
            let popup = document.getElementById("popup_container");
            disable.style.display = "none";            
            popup.style.display = "none";
        }
        return (
            <>
            {/* Grays out the screen when the Vote Popup appears, drawing
            focus onto the Popup */}
            <div id="gray_out"></div>
            {/* The popup that displays once a Yay or Nay button is clicked */}
            <div id="popup_container" className="container">
                <div className="row" style={{height:"10%"}}>
                    <div className="col-1">
                        <h4 id="close_popup" onClick={()=>closeVote()}>X</h4>
                    </div>
                </div>
                <div className="row" style={{height:"2px", backgroundColor:"#184f64"}}></div>
                <div className="row" style={{height:"88%", marginTop:"10px"}}>
                    <div style={{display:"flex", height:"75%", width:"100%", marginTop:"20px"}}>
                        <div id="profile_pic_container">
                            <img id="profile_pic" className="rounded-circle" src={user.picture} alt="Yeet"/>
                        </div>
                        <div style={{ height:"100%", width:"85%"}} >
                                <div style={{width:"90%", display:"block", margin:"auto", backgroundColor:"#073763", marginBottom:"-10px"}}>
                                    <h2 id="you_voted" style={{marginLeft:"10px"}}></h2>
                                </div>
                                <textarea placeholder="Please explain why..." id="explanation" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div id="send_vote_container">
                        <button id="send_vote" onClick={()=> sendVote()}>
                            Submit
                        </button>
                    </div>        
                </div>
            </div>
            {/* The yay and nay buttons */}
            <div className="vote_buttons">
                <button id="yay" onClick={()=>officialVote("Yay")}>YAY</button>
                <button id="nay" onClick={()=>officialVote("Nay")}>NAY</button>
            </div>
            </>
        );
    }
  }

  export default Vote;