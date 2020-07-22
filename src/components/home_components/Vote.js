import React from 'react';



function Vote(){

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
        let data = {explanation: explain.value};
        console.log(explain.value);
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
        window.location.reload(); 
    }
        
    function officialVote(vote){
        let disable = document.getElementById("gray_out");
        disable.style.display = "block";
        let popup = document.getElementById("popup_container");
        popup.style.display = "block";
        let you_voted = document.getElementById("you_voted");
        you_voted.innerHTML = "You voted " + vote + "."
        you_voted.style.color = "white";
    }
    function closeVote() {
        let disable = document.getElementById("gray_out");
        disable.style.display = "none";
        let popup = document.getElementById("popup_container");
        popup.style.display = "none";
        console.log(popup.style.width);
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
                        <img id="profile_pic" className="rounded-circle" src="https://i.ytimg.com/vi/snZ1dd0zgOs/hqdefault.jpg" alt="Yeet"/>
                    </div>
                    <div style={{ height:"100%", width:"85%"}} >
                            <div style={{width:"90%", display:"block", margin:"auto", backgroundColor: "#184f64", marginBottom:"-10px"}}>
                                <h2 id="you_voted" style={{marginLeft:"10px"}}></h2>
                            </div>
                            <textarea placeholder="Please explain why..." id="explanation" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div style={{display:"flex", height:"20%", width:"100%", marginTop:"-15px" }} >
                    <div id="send_vote_container">
                        <button id="send_vote" onClick={()=> sendVote()}>
                            Submit
                        </button>
                    </div>
                </div>
                        
                </div>
        </div>
        {/* The yay and nay buttons */}
        <div className="vote_buttons">
            <button id="yay" onClick={()=>officialVote("Yay")}>Yay</button>
            <button id="nay" onClick={()=>officialVote("Nay")}>Nay</button>
        </div>
        </>
    );
  }

  export default Vote;