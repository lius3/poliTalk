import React, { useState, useEffect } from 'react';
import '../App.css';
import Topic from '../components/home_components/Topic';
import CommentsBox from '../components/home_components/voting_components/CommentsBox';
import HeaderHome from '../components/home_components/HeaderHome';
import BackgroundInfo from '../components/home_components/BackgroundInfo';
import VotingSystem from '../components/home_components/voting_components/VotingSystem';


function Home(){

  const [ topic , setTopic ] = useState("");

  /**We populate the Topic space with a topic pulled from database. */
  useEffect(()=> {
    fetch("https://polls.thien-bui.com/index.php")
    .then (res => res.json())
    .then (jsonData => {
        setTopic(jsonData.poll_question)
    })
    .catch (console.error())
  }, [topic])

  return (
    <>
      <HeaderHome/>
      <div className="row" style={{marginTop:"30px"}}>
          <div className="col-md-1"></div>
          <div className="col-md-5" style={{minHeight:"700px"}}>
            <div style={{display:"block", height:"50%"}}>
              <Topic question={topic}/>
            </div>
            <div id="BackgroundInfo-container">
              <BackgroundInfo/>
            </div>
          </div>
          <div className="col-md-6" style={{minHeight:"500px"}}>
            <VotingSystem/>
          </div>
      </div>
      <div className="row" style={{marginTop:"100px", minWidth:"300px"}}>
        <div id="Comments-container">
          <CommentsBox/>
        </div>
      </div>
    </>
  );
}

export default Home;