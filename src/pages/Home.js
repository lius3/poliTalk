import React from 'react';
import '../App.css';
import Topic from '../components/home_components/Topic';
import PieChart from '../components/home_components/PieChart';
import Comments from '../components/home_components/CommentsBox';
import HeaderHome from '../components/home_components/HeaderHome';
import Vote from '../components/home_components/Vote';
import BackgroundInfo from '../components/home_components/BackgroundInfo';


function getVotes() {
  /**I first need to fetch data. 
   * Store that data in a variable.
   * Feed that variable into the PieChart component.
   */
}

function MainPage(){
  return (
    <>
    <HeaderHome/>
    <div className="row" style={{marginTop:"30px"}}>
        <div className="col-md-1"></div>
        <div className="col-md-5" style={{minHeight:"700px"}}>
          <div style={{display:"block", height:"50%"}}>
            <Topic question="Hello how are you? How much wood would a wood chuck chuck if a wood chuck could chuck wood?"/>
          </div>
          <div style={{display:"block", marginTop:"10px", position:"relative", height:"40%", width:"100%"}}>
            <BackgroundInfo/>
          </div>
        </div>
        <div className="col-md-6" style={{minHeight:"500px"}}>
          <PieChart yay_votes={7} nay_votes={1} />
          <Vote/>
        </div>
    </div>
    <div className="row" style={{marginTop:"100px", minWidth:"300px"}}>
      <div style={{display:"block", margin:"auto", width:"90%"}}>
        <Comments/>
      </div>
    </div>
    
    </>
  );
}

function Home() {
  
    return (
      <>  
        <MainPage/>
      </> 
    );

  
}


export default Home;