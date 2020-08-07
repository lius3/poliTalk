import React from 'react';

function Comment({username, explanation}){
    return (
      <div id = "user-explanation" className="container-fluid" style={{paddingTop:"10px", marginTop:"30px", backgroundColor:"white"}}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10" style={{border:"1px black solid", height: "50px", backgroundColor:"#92b7c9"}}>
            <h4 style={{lineHeight:"50px"}}>{username}</h4>       
          </div>
          <div className="col-1"></div>  
        </div>
        <div className="row " >
          <div className="col-1"></div>
          <div className="col-10 pr-0" style={{height: "50px", backgroundColor:"white"}}>
            <div style={{height: "75px", padding:"10px 10px", border:"1px black solid", marginLeft:"2%", backgroundColor:"white"}}>
              <p style={{fontSize:"18px"}}>
                {explanation}
              </p>       
            </div>
          </div> 
          <div className="col-1"></div>
        </div>
      </div>

    );
  }

export default Comment;