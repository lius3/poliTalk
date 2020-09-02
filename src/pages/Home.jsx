import React, { useState, useEffect } from 'react';
import '../App.css';
import Topic from '../components/home_components/topic_space/Topic';
import CommentsBox from '../components/home_components/comments_related/CommentsBox';
import HeaderHome from '../components/home_components/header/HeaderHome';
import BackgroundInfo from '../components/home_components/topic_space/BackgroundInfo';
import VotingSystem from '../components/home_components/voting_components/VotingSystem';
// import NavBar from '../components/home_components/navigation/NavBar'
import ConvertTime from '../components/functions/ConvertTime';


function Home(){

  const [commentsList, changeCommentsList] = useState([]);
  const [comment_id, setComment_Id] = useState(null);
  const list = [...commentsList];
  const [ topic , setTopic ] = useState("");
  const [ yays, setYays ] = useState(0); /*This value is fed into 'data' attribute of PieChart component */
  const [ nays, setNays ] = useState(0); /*This value is fed into 'data' attribute of PieChart component */

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
      <div className="row">
          {/* <div className="col-1">
            <NavBar/>
          </div> */}
          <div className="col-1">
          </div>
          <div className="col-md-5" style={{minHeight:"700px" }}>
            <div style={{display:"block"}}>
              <Topic question={topic}/>
            </div>
            <div id="BackgroundInfo-container">
              <BackgroundInfo/>
            </div>
            <div style={{marginTop:"50px"}}>
              <VotingSystem yays={yays} setYays={setYays} nays={nays} setNays={setNays} commentsList={commentsList} changeCommentsList={changeCommentsList} 
                            comment_id={comment_id} setComment_Id={setComment_Id}/>
            </div>
          </div>
          <div className="col-md-6" style={{height:"85vh", minHeight:"810px"}}>
            <CommentsBox commentsList={commentsList} changeCommentsList={changeCommentsList} comment_id={comment_id} setComment_Id={setComment_Id} list={list}/>
          </div>
      </div>
    </>
  );
}

export default Home;