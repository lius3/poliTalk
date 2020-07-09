import React from 'react';
import Navigation from '../components/Navigation.js';


function About(){
    return (
        <>
        <div style={{position: "fixed", zIndex:"5", width:"200px"}}><Navigation/></div>
        <h1 style={{textAlign:"center"}}>About</h1>
        </>
    );
}

export default About;