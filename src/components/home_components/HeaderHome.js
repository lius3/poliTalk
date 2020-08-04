import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function HeaderHome(){

    const { isAuthenticated, user, logout } = useAuth0();

    if ( isAuthenticated ) {
      /*If the  user is authenticated, this version of the header is loaded.*/

      function dropDown(e) {
        var triangleDown = document.getElementById("triangle-down");
        var dropdownContent = document.getElementById("dropdown-content");
        triangleDown.style.visibility = "hidden";
        triangleDown.style.borderTopColor = "#92b7c9";
        dropdownContent.style.display = "block";

        document.body.onclick = function(e) {
          if (e.target.id != "dropdown") {
            triangleDown.style.visibility = "visible";
            triangleDown.style.borderTopColor = "white";
            dropdownContent.style.display = "none";
          }
        }

      }

      return (
        <>
            {/* Based on grid system, this row is divided into 5
            separate columns. The first column and last column
            are both white space. The second column contains 
            the logo and the button that expands the nav bar.
            The third column contains the search bar. The fourth
            column contains the sign up and log in buttons. */}
          <div className="row" style={{backgroundColor:"#073763ff", minWidth:"200px"}}>
            <div className="col-md-1"/>
            <div className="col-md-3">
                <div>
                  <Link to="/" exact style={{textDecorationLine:"none"}}>
                    <h1 id="logo">PoliTalk</h1>
                  </Link>
                </div>
            </div>
            <div className="col-md-4" style={{minWidth:"320px"}}>
              <form>
                <input id="search" type="text" placeholder="Search..." name="search"></input>
              </form>
            </div>
            <div className="col-1"></div>
            <div className="col-md-2" style={{paddingLeft:"10%", display:"flex", minWidth:"100px"}}>
              <div onClick={(e)=>dropDown(e.target)} style={{display:"flex"}}> 
                <div id="dropdown">
                  <div id="triangle-down"></div>
                  <div id="dropdown-content">
                    <p onClick={()=>logout({returnTo: window.location.origin})}>Log out</p>
                    <Link style={{textDecorationLine:"none"}} to="/profile">
                      <p style={{color:"white"}}>Profile</p>
                    </Link>
                    <p>Settings</p>
                    <p>Help</p>
                  </div>
                </div>
                <img className="rounded-circle" id="user_picture" src={user.picture} alt="" />    
              </div>
     
            </div>
          </div>
        </>
      );

    }
    else {
      /*If the  user is not authenticated, this version of the header is loaded.*/
      return (
        <>  
          {/* Based on grid system, this row is divided into 5
          separate columns. The first column and last column
          are both white space. The second column contains 
          the logo and the button that expands the nav bar.
          The third column contains the search bar. The fourth
          column contains the sign up and log in buttons. */}
          <div className="row" style={{backgroundColor:"#073763ff", minWidth:"200px"}}>
            <div className="col-md-1"/>
            <div className="col-md-3">
                <div>
                  <Link style={{textDecorationLine:"none"}} to="/" exact>
                    <h1 id="logo">PoliTalk</h1>
                  </Link>
                </div>
            </div>
            <div className="col-md-4">
              <form>
                <input id="search" type="text" placeholder="Search..." name="search"></input>
              </form>
            </div>
            <div className="col-md-3" style={{minWidth:"220px"}}>
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