import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './HeaderHome.css';
import {ReactComponent as HomeIcon} from '../../../images/HomeIcon.svg';
import {ReactComponent as ArchiveIcon} from '../../../images/ArchiveIcon.svg';
import {ReactComponent as LibraryIcon} from '../../../images/LibraryIcon.svg';

function UnauthorizedHeader(){
    return(
        <div className="row" style={{backgroundColor:"#073763ff", minWidth:"200px"}}>
            <div className="col-md-3">
                <Link to="/" exact style={{textDecorationLine:"none"}}>
                    <h1 id="logo">PoliTalk</h1>
                </Link>
            </div>
            <div className="col-md-4" style={{minWidth:"320px"}}>
                <form>
                    <input id="search" type="text" placeholder="Search..." name="search"></input>
                </form>
            </div>
            <div className="col-md-2 text-center" style={{minWidth:"230px"}} >
                <Link to="/">
                    <HomeIcon className="header_icon" id="home-icon" alt="Home">
                    </HomeIcon>
                </Link>
                <Link to="/404NotFound">
                    <ArchiveIcon className="header_icon" id="archive-icon" alt="Archive">
                    </ArchiveIcon>
                </Link>
                <Link to="/404NotFound">
                    <LibraryIcon className="header_icon" id="library-icon" alt="Library">
                    </LibraryIcon>
                </Link>
            </div>
            <div className="col-md-3" style={{minWidth:"200px"}}>
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
    );
}

export default UnauthorizedHeader;