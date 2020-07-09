import React from 'react';
import Navigation from '../Navigation.js';



function Header1(){

    // document.body.onclick = function() {
    //   let nav = document.getElementById("kevinNav");
    //   console.log(nav);
    // }

    return (
      <>
      <div className="container-fluid" style={{height: "120px"}}>
        <div className="row">
          <div className="col-lg-1">
            <div style={{marginLeft:"-15px", zIndex: "5", position:"fixed"}}><Navigation id="kevinNav"/></div>
          </div>
          <div id = "header-object" className="col-lg-2">
                <h1 id="logo">PoliTalk</h1>
          </div>
          <div id = "header-object"  className="col-lg-6" >
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

  export default Header1;