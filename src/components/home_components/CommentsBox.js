
import React, { useState, useEffect } from 'react';
import Comment from './Comment.js';

function CommentsBox(){
  
    const [commentsList, changeCommentsList] = useState([]);
    const [comment_id, setComment_Id] = useState(null);
    const list = [...commentsList];
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
          popup.style.left = "15%";
          popup.style.transition = "left 0.5s"
        }
      }
      /*When the window resizes, we ensure
      that there is room to scroll in the comments box. 
      The ability to scroll is essential
      because that is how we know to display more comments.*/
      if (comment_id > 0) {
        fetch("http://localhost/politalk/comments.php")
        .then (response => response.json())
        .then (jsonData=>{
          /*I push an object into list. This object stores a user's name and the explanation that goes with it.*/ 
          list.push({user:JSON.stringify(jsonData[comment_id].username), explanation:JSON.stringify(jsonData[comment_id].explanation)});
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
        fetch("http://localhost/politalk/comments.php")
        .then (response => response.json())
        .then (jsonData=>{
          if (comment_id == null) {
            console.log(jsonData.length-1);
            setComment_Id(jsonData.length-1);
          }
          else {            
            list.push({user:JSON.stringify(jsonData[comment_id].username), explanation:JSON.stringify(jsonData[comment_id].explanation)});
            changeCommentsList(list);
            setComment_Id(comment_id-1);
          }

        })
        .catch(console.error())
      }
    }, [comment_id])

    /*we load in the comments from our MySQL database each time  a user reaches the end of their scroll, 
    with a PHP REST API acting as a middleman.*/
    function moreComments() {
      let scrolledDiv = document.getElementById("scrollable-comments");
      if (scrolledDiv.clientHeight + scrolledDiv.scrollTop === scrolledDiv.scrollHeight){
        if (comment_id > 0){
          fetch("http://localhost/politalk/comments.php")
          .then (response => response.json())
          .then (jsonData=>{
            list.push({user:JSON.stringify(jsonData[comment_id].username), explanation:JSON.stringify(jsonData[comment_id].explanation)});
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
          <div id="comments_box" style={{marginTop:"10px", border:"1px black solid", height: "100vh", marginBottom:"20px"}}>
            <div id="scrollable-comments" onScroll={()=> moreComments()} style={{ overflow:"auto", height:"90%"}}>
              
              { 
                commentsList.map((item, index) => (
                  <Comment key={index} username={item.user.substring(1, item.user.length-1)} explanation={item.explanation.substring(1, item.explanation.length-1)}/> 
                ))
              }
            </div>
            <div className="text-right" style={{height:"9%"}}>
              <p  style={{display:"inline-block", textDecorationLine:"underline", marginRight:"5%", marginTop:"10px"}}>+Add Vote</p>
            </div>
          </div>
      </>
    );
  }

  export default CommentsBox;