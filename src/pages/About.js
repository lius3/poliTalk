import React from 'react';
import Navigation from '../components/Navigation.js';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


function About(){
    /*When the button is clicked, it calls this function, 
    which expands the nav bar */
    function navbarOpen() {
        let nav = document.getElementById("mainNavbar");
        let home = document.getElementById("home");
        let about = document.getElementById("about");
        let archive = document.getElementById("archive");
        
        /*The nav bar goes from 0px to 300px width when it expands */
        nav.style.width = "300px";
        nav.style.transition = "width 0.1s";
        
        /*When the nav bar fully expands, I call this function.
        This function puts the necessary text inside the nav bar */
        function content() {
          home.innerHTML="Home";
          about.innerHTML="About";
          archive.innerHTML="Archive"; 
        }
        var a = nav.addEventListener("transitionend", content);
  
        /*When you click outside of the navbar, navbar will collapse.*/
        document.body.onclick = function(e) {
          if (e.target.id != "mainNavbar" && e.target.className != "navElement"){
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
        <div style={{backgroundColor:"#92b7c9"}} id="mainNavbar">
            <Link style={{textDecorationLine:"none", color:"black"}} to="/"><h2 className="navElement" id="home"></h2></Link>
            <Link style={{textDecorationLine:"none", color:"black"}} to="/about"><h2 className="navElement" id="about"></h2></Link>
            <h2 className="navElement" id="archive"></h2>
        </div>
        <h1 style={{textAlign:"center"}} onClick={()=> navbarOpen()}>About</h1>
        </>
    );
}

export default About;