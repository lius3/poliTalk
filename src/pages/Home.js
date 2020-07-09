import React from 'react';
import '../App.css';
import Topic from '../components/home_components/Topic';
import PieChart from '../components/home_components/PieChart';
import Comments from '../components/home_components/CommentsBox';
import Header1 from '../components/home_components/Header1';
import HeaderTest from '../components/home_components/HeaderTest';

function Vote(){
  return (
    <button style={{height:"50px", width:"200px", display:"block", margin:"auto", color:"yellow", backgroundColor:"#184f64"}}>Vote</button>
  );
}

function MainPage(){
  return (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md"><HeaderTest/></div>
    </div>
    <div className="row"></div>
    <div className="row">
      <div className="col-md">
        <Topic
          question="Hello how are you? How much wood would a wood chuck chuck if a wood chuck could chuck wood?"
        />
      </div>
    </div>
    <div className="row" style={{height:"50px"}}></div>
    <div className="row">
      <div className="col-md-6">
        <div style={{marginBottom:"20px"}}>
          <PieChart/>
          <Vote/>
        </div>
      </div>
      <div className="col-md-5">
        <Comments/>  
      </div>  
    </div>
  </div>
  );
}

function Home() {
  return (
    <>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" 
    crossorigin="anonymous"></link>
    <MainPage/>
    </>
    
  );
}


export default Home;