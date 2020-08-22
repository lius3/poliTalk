import React from 'react';
import Reply from '../comments_related/Reply.jsx';

function Comment({username, explanation, vote, timeStamp}){

    const thumbClick = (e) => {
      e.style.color = "#92b7c9";
    }

    const timeConvert = (utc_Time) => {
      let convertedTime = new Date(utc_Time + " UTC");
      let currentTime = new Date();

      let difference = currentTime.getTime() - convertedTime.getTime();

      let convert = {days: 60*60000*24, hours:60000*60} ;

      let returnString = "";

      for(let i in convert){
        let calculated = Math.floor((difference / convert[i])).toString();

        if(calculated > 0){
          returnString += Math.floor((difference / convert[i])).toString() + i;
        }
       
        difference = difference % convert[i];
      }
      
    
      if(returnString == ""){
        return "Now";
      }

      else{
        return returnString;
      }
      

    }

    var yes_or_no = '';

    var localTime = new Date(timeStamp + " UTC");

    var test = new Date("2012-11-29 17:00:34 UTC");


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
            <h4 style={{display:"inline-block", lineHeight:"50px", width:"max-content", marginRight:"5px"}}>{username}</h4>
            <h5 id="wow" style={{display:"inline-block", width:"max-content"}}>{yes_or_no}</h5>    
            <h5 id="time" style={{display:"inline-block", width:"max-content", backgroundColor:'green'}}> HELLO WHATS THE MOVE </h5>  
            <h5 id="time" style={{display:"inline-block", width:"max-content", backgroundColor:'green'}}> {localTime.toString()} </h5>  
            
            <h1 id="time" style={{display:"inline-block", width:"max-content", backgroundColor:'green'}}> {timeConvert(timeStamp)} </h1>  
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