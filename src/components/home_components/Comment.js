import React from 'react';

function Comment({username, comment}){
    return (
      <div id = "user-comment" className="container-fluid" style={{paddingTop:"10px", backgroundColor:"white"}}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10" style={{border:"1px black solid", height: "50px", backgroundColor:"#92b7c9"}}>
            {username}
          </div>
          <div className="col-1"></div>  
        </div>
        <div className="row " >
          <div className="col-1"></div>
          <div className="col-10 pr-0" style={{height: "50px", backgroundColor:"white"}}>
            <div style={{border:"1px black solid", marginLeft:"2%", height:"50px", backgroundColor:"white"}}>
              {comment}
            </div>
          </div> 
          <div className="col-1"></div>
        </div>
      </div>

    );
  }

export default Comment;