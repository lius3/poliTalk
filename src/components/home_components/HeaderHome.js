import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function HeaderHome(){
  
    const { isAuthenticated, user, logout, isLoading } = useAuth0();

    if (isLoading) {
      return <div></div>
    }

    /*If the  user is authenticated, this version of the header is loaded.*/
    if ( isAuthenticated ) {
      const dropDown = (e) => {
        var triangleDown = document.getElementById("triangle-down");
        var dropdownContent = document.getElementById("dropdown-content");
        triangleDown.style.visibility = "hidden";
        triangleDown.style.borderTopColor = "#92b7c9";
        dropdownContent.style.display = "block";

        /*If you click outside of the dropdown, it closes the dropdown. */
        document.body.onclick = function(e) {
          if (e.target.id !== "dropdown") {
            triangleDown.style.visibility = "visible";
            triangleDown.style.borderTopColor = "white";
            dropdownContent.style.display = "none";
          }
        }
      }

      return (
        <>
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
                <input id="search" type="text" placeholder="Search..." name="search"></input>
            </div>
            <div className="col-1"></div>
            <div id="dropdown-image_grid_column" className="col-md-2">
              <div onClick={(object_clicked)=>dropDown(object_clicked.target)} style={{display:"flex"}}> 
                <div id="dropdown">
                  <div id="triangle-down"></div>
                  <div id="dropdown-content">
                    <Link style={{textDecorationLine:"none"}} to="/profile">
                      <p>Profile</p>
                    </Link>
                    <p>Settings</p>
                    <p>Help</p>
                    <p onClick={()=>logout({returnTo: window.location.origin})}>Log out</p>
                  </div>
                </div>
                <img className="rounded-circle" id="user_picture" src={user.picture} alt="" />    
              </div> 
            </div>
          </div>
        </>
      );

    }
    /*If the  user is not authenticated, this version of the header is loaded.*/
    else {    
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
                <Link className="header_button" id="logIn" to="/login">
                    <p>Log In</p>
                </Link>
                <Link className="header_button" id="signUp" to="/login">
                    <p>Sign Up</p>
                </Link>
              </div> 
            </div> 
          </div>
        </>
      );
    }
  }

  export default HeaderHome;