import React from 'react';
import '../App.css';
import Topic from '../components/home_components/Topic';
import PieChart from '../components/home_components/PieChart';
import Comments from '../components/home_components/CommentsBox';
import HeaderHome from '../components/home_components/HeaderHome';
import Vote from '../components/home_components/Vote';



function MainPage(){
  return (
    <>
    <HeaderHome/>
    <div className="row" style={{height:"30px"}}></div>
    <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <div style={{display:"block", height:"50%"}}>
            <Topic question="Hello how are you? How much wood would a wood chuck chuck if a wood chuck could chuck wood?"/>
          </div>
          <div style={{height:"50%"}}></div>
        </div>
        <div className="col-md-5">
          <PieChart/>
          <Vote/>
        </div>
    </div>
    <div className="row" style={{marginTop:"100px"}}>
      <div className="col-1"></div>
      <div className="col-10">
        <Comments/>
      </div>
      <div className="col-1"></div>
    </div>
    
    </>
  );
}

function Home() {
  return (
    <>
        <MainPage />
    </>
    
  );
}


export default Home;