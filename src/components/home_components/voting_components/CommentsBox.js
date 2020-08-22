import React, { useEffect } from 'react';
import Comment from './Comment.jsx';

function CommentsBox({commentsList, changeCommentsList, comment_id, setComment_Id, list}){
  
    const reload_comments = () => {
        setComment_Id(null);
        changeCommentsList([]);
    }

    window.onresize = function() {
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
          list.push({user:JSON.parse(JSON.stringify(jsonData[comment_id].username)), explanation: JSON.parse(JSON.stringify(jsonData[comment_id].explanation)), vote: JSON.parse(JSON.stringify(jsonData[comment_id].vote))});
          changeCommentsList(list);
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
          console.log(JSON.stringify(jsonData));
          if (comment_id == null) {
            setComment_Id(jsonData.length-1);
            console.log("It is null.");
          }
          else {
            try {
              list.push({user:JSON.parse(JSON.stringify(jsonData[comment_id].username)), explanation: JSON.parse(JSON.stringify(jsonData[comment_id].explanation)), vote: JSON.parse(JSON.stringify(jsonData[comment_id].vote)), created_time: JSON.parse(JSON.stringify(jsonData[comment_id].created_time))});
              changeCommentsList(list);
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
      console.log("This is the clientHeight + scrollTop: ", scrolledDiv.clientHeight + scrolledDiv.scrollTop);
      console.log("This is scroll height: ", scrolledDiv.scrollHeight );
      if (scrolledDiv.clientHeight + scrolledDiv.scrollTop === scrolledDiv.scrollHeight){
        console.log("This is comment id: ", comment_id);
        if (comment_id >= 0){
          console.log("Triggered");
          fetch("https://explanations.thien-bui.com/index.php")
          .then (response => response.json())
          .then (jsonData=>{
            list.push({user:JSON.parse(JSON.stringify(jsonData[comment_id].username)), explanation: JSON.parse(JSON.stringify(jsonData[comment_id].explanation)), vote: JSON.parse(JSON.stringify(jsonData[comment_id].vote))});
            changeCommentsList(list);
          })
          .catch(console.error())
          setComment_Id(comment_id-1);  
        }
      }
    }

    return (
      <>
        {/* <div className="row" style={{marginTop:"30px"}}> */}
          {/* These boxes are used for sorting the method in which user wants the 
          comments to be sorted. */}
          {/* <div  className="col-1 sort" style={{backgroundColor:"#184f64"}}></div>
          <div  className="col-1 sort" style={{backgroundColor:"#92b7c9"}}></div>
          <div  className="col-1 sort" style={{backgroundColor:"#184f64"}}></div>
          <div  className="col-1 sort" style={{backgroundColor:"#92b7c9" }}></div>
        </div> */}
          <div id="comments_box">
            <div id="reload_comments_btn" onClick={()=> reload_comments()}>
              <svg id="refresh-icon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-refresh" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
              </svg>
            </div>
            <div id="scrollable-comments" onScroll={()=> moreComments()}>   
              { 
                commentsList.map((item, index) => (
                  <Comment key={index} username={item.user} explanation={item.explanation} vote={item.vote} timeStamp={item.created_time} /> 
                ))
              }
            </div>
          </div>
      </>
    );
  }

  export default CommentsBox;