import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { hasToken } from '../../../auth/auth.js';

import './HeaderHome.css';
import AuthorizedHeader from './AuthorizedHeader.jsx';
import UnauthorizedHeader from './UnauthorizedHeader.jsx';
// import {ReactComponent as HomeIcon} from '../../../images/HomeIcon.svg';
// import {ReactComponent as ArchiveIcon} from '../../../images/ArchiveIcon.svg';
// import {ReactComponent as LibraryIcon} from '../../../images/LibraryIcon.svg';

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


      return (
        <>
          <AuthorizedHeader dropDown={dropDown} user={user} logout={logout}></AuthorizedHeader>
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
          <UnauthorizedHeader></UnauthorizedHeader>
        </>
      );
    }
  }

  export default HeaderHome;