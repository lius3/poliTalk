import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { hasToken } from '../../../auth/auth';
import { closeReply } from '../../../functions/replying_functions.js';



function ReplyPopup({explanation_id, setComment_Id, changeCommentsList}) {

    const { user, isAuthenticated } = useAuth0();

    useEffect(()=>{
        console.log("This is it: " + explanation_id);
    }, [explanation_id])

    if (isAuthenticated || hasToken()) {

    
        const sendReply = () => {
            var reply = document.getElementById("reply_text_area");
            var data = {username: user.name, reply: reply.value, explanation_id: JSON.parse(explanation_id)}
            console.log(data);
            let req = new Request("	https://replies.thien-bui.com/index.php",
            {
                method:"post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)   
    
            })
            fetch(req)
            .then(()=> {
                reply.value = "";
                closeReply_ReloadComments();
            })
            .catch(console.error())
            
        }
        
        const closeReply_ReloadComments = () => {
            closeReply();
            changeCommentsList([])
            setComment_Id(null)
        }
    
        return  (
        <>
            <div id="gray_out"></div>
            <div id="reply_popup_container" className="container">
                <div className="row" style={{height:"10%"}}>
                    <div className="col-1">
                        {/* The X button used to close the popup */}
                        <h4 id="close_popup" onClick={()=>closeReply()}>x</h4>
                    </div>
                </div>
                <div className="row" style={{height:"2px", backgroundColor:"#184f64"}}></div>
                <div className="row" style={{height:"88%", marginTop:"10px"}}>
                    <div style={{display:"flex", height:"75%", width:"100%", marginTop:"20px"}}>
                        <div id="reply-area">
                                <textarea onKeyDown={(pressedKey) => pressedKey.keyCode === 13 /*Is the pressed key the enter button*/? sendReply() : null }
                                placeholder="Add a comment..." id="reply_text_area" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div id="send_reply_container">
                        <button id="send_reply" onClick={()=>sendReply()}>Reply</button>
                    </div>        
                </div>
            </div>
        </>
        )

    }
    else {
        return (
            <div></div>
        )
    }


    
}

export default ReplyPopup;
