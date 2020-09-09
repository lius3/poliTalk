import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {ReactComponent as HomeIcon} from '../../../images/HomeIcon.svg';
import {ReactComponent as ArchiveIcon} from '../../../images/ArchiveIcon.svg';
import {ReactComponent as LibraryIcon} from '../../../images/LibraryIcon.svg';

//side navigation bar
function NavBar(){
    return(
    <>
        <div id="nav_container" style={{backgroundColor:"black"}}>
            <Link to="/">
                <HomeIcon className="header_icon" id="home-icon" alt="Home" width="35px" height="35px" style={{marginLeft:"20px"}}>
                </HomeIcon>
              </Link>
            <Link to="/404NotFound">
              <ArchiveIcon className="header_icon" id="archive-icon" alt="Archive" width="35px" height="35px" style={{marginLeft:"20px"}}>
              </ArchiveIcon>
            </Link>
            <Link to="/404NotFound">
              <LibraryIcon className="header_icon" id="library-icon" alt="Library" width="35px" height="35px" style={{marginLeft:"20px"}}>
              </LibraryIcon>
            </Link>
        </div>
    </>
    );
}

export default NavBar;