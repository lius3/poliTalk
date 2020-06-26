import React from 'react';
import logo from './logo.svg';
import './App.css';

//Kevin's Section

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
}

//Shannon's Section
function Header(){
  return (
    <>
    <h1>
      PoliTalk
      </h1>  
    <form class="login" method="login" action="/login">
        <button type="login">Log In</button>
      </form>     
    <form class="searchbar">
      <input type="text" placeholder="Search..." name="search">
      </input>
    </form>
    </>
  );
}

/*function TopicSpace(){
  return (

  );
}*/

/*function PieChart(){
  return (

  );
}*/

function Comments(){
  return (
    <div>
      <div style={{display: "block", width: "200px", height:"50px"}}>
        <div style={{width: "50px", height:"50px", backgroundColor:"red"}}></div>
        <div style={{width: "50px", height:"50px", backgroundColor:"yellow"}}></div>
        <div style={{width: "50px", height:"50px", backgroundColor:"red"}}></div>
        <div style={{width: "50px", height:"50px", backgroundColor:"yellow"}}></div>
      </div>
      <div id="comments" style={{width: "200px", height:"50px", backgroundColor:"blue"}}></div>
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
    <Comments/>
    
  );
}


export default App;

