import React, { useEffect, useState } from 'react';
import NewComment from './NewComment.jsx';
import ReplyPopup from './ReplyPopup.jsx';

function CommentsBox({commentsList, changeCommentsList, comment_id, setComment_Id, list}){


    const [explain_id, setExpID] = useState(null);

    const modList = (jsonData, list) => {
      let parsed_user = JSON.parse(JSON.stringify(jsonData[comment_id].username));
      let parsed_explanation = JSON.parse(JSON.stringify(jsonData[comment_id].explanation));
      let parsed_vote = JSON.parse(JSON.stringify(jsonData[comment_id].vote));
      let parsed_explanation_id = JSON.parse(JSON.stringify(jsonData[comment_id].explanation_id));
      let parsed_created_time = JSON.stringify(jsonData[comment_id].created_time);
      list.push({user: parsed_user, explanation: parsed_explanation, vote: parsed_vote, explanation_id: parsed_explanation_id, cTime: parsed_created_time});
      changeCommentsList(list); 
    }

    window.onresize = () => {
      /*This JS is to ensure that the vote popup looks
      okay when the window size gets small.*/ 
      var popup = document.getElementById("popup_container");
      if (popup != null) {
        if (window.innerWidth > 580) {
          popup.style.left = "30%";
          popup.style.transition = "left 0.5s"
        }
        else {
          popup.style.left = "12%";
          popup.style.transition = "left 0.5s"
        }
      }

      /*When the window resizes, we ensure
      that there is room to scroll in the comments box. 
      The ability to scroll is essential
      because that is how we know to display more comments.*/
      if (comment_id > 0) {
        fetch("https://explanations.thien-bui.com/index.php")
        .then (response => response.json())
        .then (jsonData=>{
          /*I push an object into list. This object stores a user's name and the explanation that goes with it.*/ 
          modList(jsonData,list);  
        })
        .catch(console.error())
        setComment_Id(comment_id-1);
      }
    }

    /*we load in the comments from our MySQL database, with a PHP REST API acting
    as a middleman.*/
    useEffect(()=> {
      let scrolledDiv = document.getElementById("scrollable-comments");      
      if (scrolledDiv.scrollHeight === scrolledDiv.clientHeight){
        fetch("https://explanations.thien-bui.com/index.php")
        .then (response => response.json())
        .then (jsonData=>{
          if (comment_id == null) {
            setComment_Id(jsonData.length-1);
          }
          else {
            try {
              modList(jsonData,list);     
              setComment_Id(comment_id-1);       
            }
            catch(e) {
              console.log("No more comments to load.");
            }            
          }
        })
        .catch(console.error())
      }
    }, [comment_id])

    /*we load in the comments from our MySQL database each time  a user reaches the end of their scroll, 
    with a PHP REST API acting as a middleman.*/
    const moreComments = () => {
      
      let scrolledDiv = document.getElementById("scrollable-comments");
      if (scrolledDiv.clientHeight + scrolledDiv.scrollTop === scrolledDiv.scrollHeight){
        console.log("This is comment id: ", comment_id);
        if (comment_id >= 0){
          fetch("https://explanations.thien-bui.com/index.php")
          .then (response => response.json())
          .then (jsonData=>{
            modList(jsonData,list);   
          })
          .catch(console.error()) 
          setComment_Id(comment_id-1);  
        }
      }
    }


    return (
      <>
          <div id="comments_box">
            <div id="scrollable-comments" onScroll={()=> moreComments()}>   
              { 
                commentsList.map((item, index) => (
                  <NewComment key={index} username={item.user} explanation={item.explanation} vote={item.vote} explanation_id={item.explanation_id} time={item.cTime} setExpID={setExpID}/>
                ))
              }
            </div>
          </div>
          <ReplyPopup explanation_id={explain_id} setComment_Id={setComment_Id} changeCommentsList={changeCommentsList}/>
      </>
    );
  }

  export default CommentsBox;