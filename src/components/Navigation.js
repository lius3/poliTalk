import React from 'react'
import styled from 'styled-components'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap/'
import {BrowserRouter as Router, Link} from 'react-router-dom';


const Styles = styled.div`
    .navBar-main{
        background-color:#92b7c9;
        z-index: 5;
        margin-left: -15px;
        
    }
    
    .navLink{
        text-decoration:none;
        color:#123b52ff;
    }
   
    .navLink:hover{
        background-color: white;
    }
    #responsive-navbar-nav{
        background-color: #92b7c9;
        width: 15em;
        font-size: 24px;
        height:100vh;
    }
 `
// const Styles1 = styled.h1`
//     .navLink1{
//         background-color:white;
//         color: orange;
//     }
// `


export default function Navigation() {

    return (
        <Styles>
            <Navbar id="navMain" as="div" className = "navBar-main" collapseOnSelect expand="true">
                <Navbar.Toggle style={{marginTop:"5px"}} aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav >
                    {/* <Styles1> */}
                    <   Link  to="/" className='navLink'>Home</Link>
                    {/* </Styles1> */}
                        <Link style={{ color:"#123b52ff"}} className='navLink' to="/about">About</Link>  
                        <NavDropdown style={{color:"#123b52ff"}} title= "Archive">
                            <NavDropdown.Item className="navLink" href="#">Archive 1</NavDropdown.Item>
                            <NavDropdown.Item className="navLink" href="#">Archive 2</NavDropdown.Item>
                            <NavDropdown.Item className="navLink"href="#">Archive 3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
      )     
}





