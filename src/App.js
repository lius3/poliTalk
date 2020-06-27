import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from "react-google-charts";

//Kevin's Section
/*
function Navbar(){
  
 return (
    //collapsible
    <nav>
      <button class = "navbar-toggler" type= "button" data-toggle="collapse" data-target="#collapsibleNavBar"> <span class="navbar_toggle_icon"></span> </button> 
      <div class="collapse navbar-collapse" id = "collapsibleNavBar">
        <ul class="navbar-nav"
        style={{width: "50%", height:"50%", backgroundColor:"yellow"}}>
          <div class = "wrapper">
            <li class = "nav-item"> 
              <a class= "nav-link" href = "#">Home</a>       
            </li>
            <li>
              <a class = "nav-link" href = "#2">About</a>
            </li>
            <li>
              <a class = "nav-link-dropDown" href = "#3">Archive</a>
            </li>
            <li>
              <a class = "nav-link" href = "#4">Apply</a>
            </li>
            <li>
              <a class = "nav-link" href = "#5">Donate</a>
            </li>
          </div>         
        </ul>
      </div>
    </nav>
  );
}*/

// function NavBar_React(){
  
// }
//Shannon's Section
function Header1(){
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div id = "header-object" className="col-md-1">
          <div id="logo">placeholder</div>
        </div>
        <div id = "header-object" className="col-md-3">
          <h1 id="logo">PoliTalk</h1>
        </div>

        <div id = "header-object"  className="col-md-6" >
          <form class="searchbar">
            <input id="search" type="text" placeholder="Search..." name="search"></input>
          </form>
        </div>

        <div id = "header-object"  className="col-md-2">
          <form  class="login" method="login" action="/login">
            <button id="login" type="login">Log In</button>
            <button id="login" type="signup">Sign Up</button>
          </form> 
        </div>     
       
        </div>
    </div>
    </>
  );
}

/*function TopicSpace(){
  return (

  );
}*/

function PieChart(){
  return (
  <Chart
    width={'1000px'}
    height={'1000px'}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Vote', '# of Votes'],
      ['Yes', 10],
      ['No', 10],
    ]}
    options={{
      title: 'Current Poll',
      chartArea: {
      backgroundColor: {
          stroke: '#4322c0',
          strokeWidth: 3
      }},
    colors: ["#92b7c9", "#184f64"],
    legend: {position:'bottom',alignment: 'center'}
  }}
/>
  )
}

function Comments(){
  return (
    <div className="container" style={{width: "600px", backgroundColor:"white"}}>
      <div className="row">
        <div className="col-1" style={{marginRight:"5px", height: "50px", backgroundColor:"aqua"}}></div>
        <div className="col-1" style={{marginRight:"5px",  height: "50px", backgroundColor:"aqua"}}></div>
        <div className="col-1" style={{marginRight:"5px", height: "50px", backgroundColor:"aqua"}}></div>
        <div className="col-1" style={{marginRight:"5px", height: "50px", backgroundColor:"aqua"}}></div>
      </div>
      <div className="row" style={{height:"10px"}}></div>
      <div className="row">
        <div className="col-12" style={{border:"1px black solid", height: "500px", backgroundColor:"white"}}></div>
      </div>
    </div>
  );
}


function Vote(){
  return (
    <button style={{color:"Yellow", backgroundColor:"blue"}}>Vote</button>
  );
}


function App() {
//Kevin is working on navbar
//Shannon is working on the header and the topic space
//Quoc is working on the chart and comments space
  return (
    <>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" 
    crossorigin="anonymous"></link>
    <Header1/>
    <PieChart/>
    <Comments/>
    </>
    
  );
}


export default App;

