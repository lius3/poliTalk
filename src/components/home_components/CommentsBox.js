import React, { useState, useEffect } from 'react';
import Comment from './Comment.js';


function CommentsBox(){
    const [commentsList, changeCommentsList] = useState([]);
    const [comment_id, setComment_Id] = useState(1);
    const list = [...commentsList];

    window.onresize = function() {
        fetch("http://localhost/politalk/comments.php?comment_id=" + comment_id )
        .then (response => response.json())
        .then (jsonData => JSON.stringify(jsonData))
        .then (stringData => stringData.substring(1, stringData.length-1))
        .then (cleanData => cleanData.split("~!~"))
        .then (arrayData => {
          list.push(arrayData)
          changeCommentsList(list);
        });
        setComment_Id(comment_id+1);

    }

    useEffect(()=> {
      let scrolledDiv = document.getElementById("scrollable-comments");
      if (scrolledDiv.scrollHeight == scrolledDiv.clientHeight){
        fetch("http://localhost/politalk/comments.php?comment_id=" + comment_id )
        .then (response => response.json())
        .then (jsonData => JSON.stringify(jsonData))
        .then (stringData => stringData.substring(1, stringData.length-1))
        .then (cleanData => cleanData.split("~!~"))
        .then (arrayData => {
          setComment_Id(comment_id+1);
          list.push(arrayData)
          changeCommentsList(list);
        });
        
      }
    }, [commentsList])

    function moreComments() {
      let scrolledDiv = document.getElementById("scrollable-comments");
      if (scrolledDiv.clientHeight + scrolledDiv.scrollTop == scrolledDiv.scrollHeight){
        if (comment_id < 16){
          fetch("http://localhost/politalk/comments.php?comment_id=" + (comment_id) )
          .then (response => response.json())
          .then (jsonData => JSON.stringify(jsonData))
          .then (stringData => stringData.substring(1, stringData.length-1))
          .then (cleanData => cleanData.split("~!~"))
          .then (arrayData => {
            list.push(arrayData);
            changeCommentsList(list);
          })
          setComment_Id(comment_id+1);  
        }
        
      }
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div  className="col-1 sort" style={{marginRight:"5px", height: "50px", backgroundColor:"#184f64"}}></div>
          <div  className="col-1 sort" style={{marginRight:"5px",  height: "50px",backgroundColor:"#92b7c9"}}></div>
          <div  className="col-1 sort" style={{marginRight:"5px", height: "50px", backgroundColor:"#184f64"}}></div>
          <div  className="col-1 sort" style={{marginRight:"5px", height: "50px", backgroundColor:"#92b7c9" }}></div>
        </div>
        <div className="row" style={{height:"10px"}}></div>
        <div className="row">
          <div className="col-12" style={{border:"1px black solid", height: "55vh", backgroundColor:"white"}}>
            <div id="scrollable-comments" onScroll={()=> moreComments()} style={{overflow:"auto", marginTop: "1%", height:"86%"}}>
              { 
                commentsList.map((item, index) => (
                  <Comment key={index} username={item[0]} comment={item[1]}/> 
                ))
              }
            </div>
            <div className="text-right" style={{height:"13%"}}>
              <p  style={{display:"inline-block", textDecorationLine:"underline", marginRight:"5%", marginTop:"10px"}}>+Add Comment</p>
              <p style={{display:"inline-block", textDecorationLine:"underline", marginRight:"5%"}}>View all...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default CommentsBox;