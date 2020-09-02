import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Reply from './Reply.jsx';
import ConvertTime from "../../functions/ConvertTime";
import "./NewComment.css";


function NewComment({username, explanation, vote, explanation_id, time, setExpID}) {

    const { user } = useAuth0();
    const [ replyID, setReplyID ] = useState(null);
    const [ maxReplyID, setMaxReplyID] = useState(0);
    const [ replies , setReplies ] = useState([]);
    let list = [...replies];

  
    var yes_or_no = '';

    if (vote === '1') {
        yes_or_no = 'voted YES'
    }
    else {
        yes_or_no = 'voted NO'
    }

    useEffect(()=> {
        fetch("https://replies.thien-bui.com/index.php?explanation_id=" + JSON.parse(explanation_id))
          .then (response => response.json())
          .then (jsonData=>{
              console.log("Max: " + maxReplyID);
            if (replyID == null) {
              setReplyID(jsonData.length-1);
            }
            else {
              try {
                if (replyID > jsonData.length - 1 - maxReplyID) {
                    const parsed_user = JSON.parse(JSON.stringify(jsonData[replyID].username));
                    const parsed_reply = JSON.parse(JSON.stringify(jsonData[replyID].reply));
                    const parsed_time = JSON.parse(JSON.stringify(jsonData[replyID].created_time));
                    list.push({user: parsed_user, reply: parsed_reply, cTime:parsed_time});
                    setReplies(list);
                    setReplyID(replyID-1);  
                }            
              }
              catch(e) {
                console.log("No more replies to load.");
              }            
            }
          })
          .catch(console.error())
    }, [replyID, maxReplyID])

    const openReply = () => {
        let gray_out = document.getElementById("gray_out");
        let reply_popup = document.getElementById("reply_popup_container");
        gray_out.style.display = "block";
        reply_popup.style.display = "block";
        setExpID(explanation_id)
    }

    const viewReplies = () => {
        setMaxReplyID(maxReplyID+2);
    }

    const test = () => {
        let test1 = new Date();
        
        return test1.toString();
    }

    return (
        <>  
            <div>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-1"></div> */}
                        <div className="col-1" style={{marginBottom:"15px"}}></div>
                        <div className="col-10" id="new_comment">
                            <p id="header">{username} voted {yes_or_no} {ConvertTime(time)}</p>

                            {/* REMOVE THE ENCLOSED PARTS when done testing ================ */}
                            <p id="NewComment-you_voted">CHECK{(time)}</p>  
                            <p id="NewComment-you_voted">current time{test()}</p>   
                            <p id="NewComment-explanation">{explanation}</p>
                            {/* ========================================== */}

                            <div onClick={()=>openReply()} style={{cursor:"pointer", marginLeft:"5px", display:"inline-block"}}>
                                <i style={{fontSize:"15px"}} class="fa fa-reply" aria-hidden="true"></i>
                                <p style={{display:"inline-block", marginLeft:"5px"}}>Reply</p>
                              
                            </div>
                            <p id="view_replies" style={{cursor:"pointer", width:"60%", textAlign:"right", display:"inline-block"}} onClick={()=>viewReplies()}>View replies</p>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        replies.map((reply, index) => (
                            <Reply key={index} username={reply.user} reply={reply.reply} time={reply.cTime}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default NewComment;