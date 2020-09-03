import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { hasToken } from '../../auth/auth.js';
import {ReactComponent as HomeIcon} from '../../images/HomeIcon.svg';
import {ReactComponent as ArchiveIcon} from '../../images/ArchiveIcon.svg';
import {ReactComponent as LibraryIcon} from '../../images/LibraryIcon.svg';
import DefaultPicture from '../../images/default-profile.png';

function HeaderHome(){
  
    const { isAuthenticated, user, logout, isLoading } = useAuth0();

    if (isLoading) {
      return <div></div>
    }

    /*If the  user is authenticated, this version of the header is loaded.*/
    if (hasToken() || isAuthenticated) {
      const dropDown = (e) => {
        // var triangleDown = document.getElementById("triangle-down");
        var dropdownContent = document.getElementById("dropdown-content");
        // triangleDown.style.visibility = "hidden";
        // triangleDown.style.borderTopColor = "#92b7c9";
        dropdownContent.style.display = "block";

        /*If you click outside of the dropdown, it closes the dropdown. */
        document.body.onclick = function(e) {
          if (e.target.id !== "dropdown") {
            // triangleDown.style.visibility = "visible";
            // triangleDown.style.borderTopColor = "white";
            dropdownContent.style.display = "none";
          }
        }
      }

      const userPicture = () => {
        if (user.picture == null) {
          return DefaultPicture;
        }
        else {
          return user.picture;
        }
      }

      return (
        <>
          <div className="row" style={{backgroundColor:"#073763ff", minWidth:"200px"}}>
            <div className="col-lg-1"/>
            <div className="col-lg-2">
                <div>
                  <Link to="/" exact style={{textDecorationLine:"none"}}>
                    <h1 id="logo">PoliTalk</h1>
                  </Link>
                </div>
            </div>
            <div className="col-lg-3" style={{minWidth:"320px"}}>
                <input id="search" type="text" placeholder="Search..." name="search"></input>
            </div>
            <div className="col-1"></div>
            <div className="col-3"  style={{minWidth:"180px"}}>
              <Link to="/">
                <HomeIcon className="header_icon" id="home-icon" alt="Home" width="35px" height="35px" style={{marginTop:"20px", marginRight:"20px"}}>
                </HomeIcon>
              </Link>
              <Link to="/Archive">
                <ArchiveIcon className="header_icon" id="archive-icon" alt="Archive" width="35px" height="35px" style={{marginTop:"20px" , marginRight:"20px"}}>
                </ArchiveIcon>
              </Link>
              <Link to="/Library">
                <LibraryIcon className="header_icon" id="library-icon" alt="Library" width="35px" height="35px" style={{marginTop:"20px"}}>
                </LibraryIcon>
              </Link>
            </div>
            <div id="dropdown-image_grid_column" className="col-1">
              <div onClick={(object_clicked)=>dropDown(object_clicked.target)}> 
                <div id="dropdown">
                  {/* <div id="triangle-down"></div> */}
                  <img className="rounded-circle" id="user_picture" src={userPicture()} alt="" />    
                  <div id="dropdown-content">
                    <Link style={{textDecorationLine:"none"}} to="/profile">
                      <p>Profile</p>
                    </Link>
                    <p>Settings</p>
                    <p>Help</p>
                    <p onClick={()=>logout({returnTo: window.location.origin})}>Log out</p>
                  </div>
                </div>
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
          <div className="row" style={{backgroundColor:"#073763ff", minWidth:"200px"}}>
            <div className="col-lg-1"/>
            <div className="col-lg-2" style={{minWidth:"200px"}}>
                <div>
                  <Link style={{textDecorationLine:"none"}} to="/" exact>
                    <h1 id="logo">PoliTalk</h1>
                  </Link>
                </div>
            </div>
            <div className="col-lg-2" >
              <form>
                <input id="search" type="text" placeholder="Search..." name="search"></input>
              </form>
            </div>
            <div className="col-1"></div>
            <div className="col-2" style={{minWidth:"220px", width:"60%"}}>
              <Link to="/">
                <HomeIcon className="header_icon" id="home-icon" alt="Home" width="35px" height="35px" style={{marginTop:"20px", marginRight:"35px"}}></HomeIcon>
              </Link>
              <Link to="/Archive">
                <ArchiveIcon className="header_icon" id="archive-icon" alt="Archive" width="35px" height="35px" style={{marginTop:"20px" , marginRight:"35px"}}></ArchiveIcon>
              </Link>
              <Link to="/Library">
                <LibraryIcon className="header_icon" id="library-icon" alt="Library" width="35px" height="35px" style={{marginTop:"20px"}}></LibraryIcon>
              </Link>
            </div>
            <div className="col-3" style={{minWidth:"220px"}}>
              <div  className="header_button_container">
                <Link className="header_button" id="logIn" to="/login">
                    <p>Log In</p>
                </Link>
                <Link className="header_button" id="signUp" to="/signup">
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