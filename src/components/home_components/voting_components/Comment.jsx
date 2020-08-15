import React from 'react';

function Comment({username, explanation, vote}){

    const thumbClick = (e) => {
      e.style.color = "#92b7c9";
    }

    var yes_or_no = '';

    if (vote === '1') {
      yes_or_no = 'voted YES'
    }
    else {
      yes_or_no = 'voted NO'
    }


    return (
      <div id = "user-explanation" className="container-fluid" style={{paddingTop:"10px", marginTop:"10px", backgroundColor:"white"}}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10" style={{border:"1px black solid", height: "50px", backgroundColor:"#92b7c9"}}>
            <h4 style={{display:"inline-block", lineHeight:"25px", width:"max-content", marginRight:"5px"}}>{username}</h4>
            <h5 id="wow" style={{display:"inline-block", width:"max-content"}}>{yes_or_no}</h5>    
          </div>
          <div className="col-1"></div>  
        </div>
        <div className="row" >
          <div className="col-1"> 
          </div>
          <div className="col-10 pr-0">
            <div style={{minHeight: "80px", padding:"5px 10px", border:"1px black solid", marginLeft:"2%"}}>
              <p style={{fontSize:"16px", margin:"5px"}}>
                {explanation}
              </p>
              <div style={{height:"30px", display:"block", marginBottom:"5px"}}>
                <div class="w3-xlarge" style={{position:"relative", width:"100%", paddingLeft:"70%"}}>
                  <i onClick={(e)=>thumbClick(e.target)} id="thumb" class="comment-thumb fa fa-thumbs-up" aria-hidden="true" style={{marginRight:"20px"}}></i>
                  <i onClick={(e)=>thumbClick(e.target)} id="thumb" class="comment-thumb fa fa-thumbs-down" aria-hidden="true" style={{marginTop:"-5px"}}></i>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-1"></div>
        </div>
      </div>

    );
  }

export default Comment;