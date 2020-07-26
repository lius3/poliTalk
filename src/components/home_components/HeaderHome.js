import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function HeaderHome(){

    const { isAuthenticated  } = useAuth0();

    if (isAuthenticated) {
      /*If the  user is authenticated, this version of the navBar and header is loaded.*/

      /*When the button is clicked, it calls this function, 
      which expands the nav bar */
      function navbarOpen() {
        let nav = document.getElementById("mainNavbar");
        let home = document.getElementById("home");
        let archive = document.getElementById("archive");
        let profile = document.getElementById("profile");
        
        /*The nav bar goes from 0px to 300px width when it expands */
        nav.style.width = "300px";
        nav.style.transition = "width 0.1s";
        
        /*When the nav bar fully expands, I call this function.
        This function puts the necessary text inside the nav bar */
        function content() {
          home.innerHTML="Home";
          archive.innerHTML="Archive"; 
          profile.innerHTML = "Profile";
        }
        var a = nav.addEventListener("transitionend", content);

        /*When you click outside of the navbar, navbar will collapse.*/
        document.body.onclick = function(e) {
          if (e.target.id != "mainNavbar" && e.target.className != "navElement"){
            home.innerHTML="";
            archive.innerHTML="";
            profile.innerHTML ="";
            nav.style.width = "0%";
            nav.style.transition = "width 0.2s";
            nav.removeEventListener("transitionend", content, false);
          }
        }
      }

      return (
        <>
          {/* This is the nav bar.  */}
          <div style={{backgroundColor:"#92b7c9"}} id="mainNavbar">
            <Link style={{textDecorationLine:"none", color:"black"}} to="/"><h2 className="navElement" id="home"></h2></Link>        
            <Link style={{textDecorationLine:"none", color:"black"}} to="/profile"><h2 className="navElement" id="profile"></h2></Link>
            <h2 className="navElement" id="archive"></h2>
          </div>

            {/* Based on grid system, this row is divided into 5
            separate columns. The first column and last column
            are both white space. The second column contains 
            the logo and the button that expands the nav bar.
            The third column contains the search bar. The fourth
            column contains the sign up and log in buttons. */}
          <div className="row" style={{backgroundColor:"#073763ff"}}>
            <div className="col-xl-1"/>
            <div className="col-xl-3">
                <div>
                  <div id="clickfornav_icon" onClick={()=> navbarOpen()}>
                    <div className="menu_icon bar-1"></div>
                    <div className="menu_icon bar-2"></div>
                    <div className="menu_icon bar-3"></div>
                  </div>
                  <Link to="/" exact>
                    <h1 id="logo" style={{marginLeft:"10%", width: "40%"}}>PoliTalk</h1>
                  </Link>
                </div>
            </div>
            <div className="col-xl-5">
              <form>
                <input id="search" type="text" placeholder="Search..." name="search"></input>
              </form>
            </div>
          </div>
        </>
      );

    }
    else {
      /*If the  user is not authenticated, this version of the navBar and header is loaded.*/
      function navbarOpen() {
        let nav = document.getElementById("mainNavbar");
        let home = document.getElementById("home");
        let archive = document.getElementById("archive");
        
        /*The nav bar goes from 0px to 300px width when it expands */
        nav.style.width = "300px";
        nav.style.transition = "width 0.1s";
        
        /*When the nav bar fully expands, I call this function.
        This function puts the necessary text inside the nav bar */
        function content() {
          home.innerHTML="Home";
          archive.innerHTML="Archive"; 
        }
        var a = nav.addEventListener("transitionend", content);
  
        /*When you click outside of the navbar, navbar will collapse.*/
        document.body.onclick = function(e) {
          if (e.target.id != "mainNavbar" && e.target.className != "navElement"){
            home.innerHTML="";
            archive.innerHTML="";
            nav.style.width = "0%";
            nav.style.transition = "width 0.2s";
            nav.removeEventListener("transitionend", content, false);
          }
        }
      }

      return (
        <>
        {/* This is the nav bar.  */}
        <div style={{backgroundColor:"#92b7c9"}} id="mainNavbar">
          <Link style={{textDecorationLine:"none", color:"black"}} to="/">
            <h2 className="navElement" id="home"></h2>
          </Link>
          <h2 className="navElement" id="archive"></h2>
        </div>
  
          {/* Based on grid system, this row is divided into 5
          separate columns. The first column and last column
          are both white space. The second column contains 
          the logo and the button that expands the nav bar.
          The third column contains the search bar. The fourth
          column contains the sign up and log in buttons. */}
          <div className="row" style={{backgroundColor:"#073763ff"}}>
            <div className="col-xl-1"/>
            <div className="col-xl-3">
                <div>
                  <div id="clickfornav_icon" onClick={()=> navbarOpen()} style={{marginLeft:"7%"}}>
                    <div className="menu_icon bar-1"></div>
                    <div className="menu_icon bar-2"></div>
                    <div className="menu_icon bar-3"></div>
                  </div>
                  <Link to="/" exact>
                    <h1 id="logo" style={{marginLeft:"10%", width: "40%"}}>PoliTalk</h1>
                  </Link>
                </div>
            </div>
            <div className="col-xl-5">
              <form>
                <input id="search" type="text" placeholder="Search..." name="search"></input>
              </form>
            </div>
            <div className="col-xl-2">
              <div  className="header_button_container">
              <Link style={{textDecorationLine:"none", color:"black"}} className="header_button" id="logIn" to="/login">
                   <p style={{textAlign:"center", lineHeight:"30px"}}>
                      Log In
                    </p>
              </Link>
                <button className="header_button" id="signUp" type="signup">Sign Up</button>
              </div> 
            </div> 
          </div>
        </>
      );
    }
  }

  export default HeaderHome;