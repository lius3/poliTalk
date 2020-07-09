import React from 'react';
import Navigation from '../Navigation.js';



function HeaderTest(){





    function navbarOpen() {
      let nav = document.getElementById("experimentNav");
      let home = document.getElementById("home");
      let about = document.getElementById("about");
      let archive = document.getElementById("archive");
      

      nav.style.width = "400px";
      nav.style.transition = "width 0.2s";
      
      function content() {
        home.innerHTML="Home";
        about.innerHTML="About";
        archive.innerHTML="Archive";
        
      }
      var a = nav.addEventListener("transitionend", content);

    document.body.onclick = function(e) {
      if (e.target.id != "experimentNav"){
        home.innerHTML="";
        about.innerHTML="";
        archive.innerHTML="";
        nav.style.width = "0%";
        nav.style.transition = "width 0.2s";
        nav.removeEventListener("transitionend", content, false);
      }
    }
    }

    return (
      <>
      <div style={{backgroundColor:"#92b7c9"}} id="experimentNav">
        <h2 className="navElement" id="home"></h2>
        <h2 className="navElement" id="about"></h2>
        <h2 className="navElement" id="archive"></h2>
      </div>
      <div className="container-fluid" style={{height: "120px"}}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-1">
            <button id="clickfornav" style={{height:"50px", marginTop:"30px"}} onClick={()=> navbarOpen()}>Navigation</button>
          </div>
          <div id = "header-object" className="col-2">
              <h1 id="logo">PoliTalk</h1>
          </div>
          <div id = "header-object"  className="col-lg-5" >
            <form className="searchbar">
              <input id="search" type="text" placeholder="Search..." name="search"></input>
            </form>
          </div>
  
          <div id = "header-object"  className="col-lg-2">
            <form  className="login" method="login" action="/login">
              <button id="login" type="login" style={{borderRadius:"4px", font: "Trebuchet MS"}}>Log In</button>
              <button className="sign" id="login" type="signup" style={{borderRadius:"4px"}}>Sign Up</button>
            </form> 
          </div> 
          <div className="col-lg-1"></div>    
          </div>
      </div>
      </>
    );
  }

  export default HeaderTest;