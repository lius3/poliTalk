import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function MainDisplay() {
    
    const { user, isAuthenticated } = useAuth0(); 

    return (
        isAuthenticated && (
        <div id="main-display-container">
            <div className="top-section">
                <img className="rounded-circle" style={{marginLeft:"5%", marginTop:"5%", height:"100%", width:"12%"}} src={user.picture} alt=""/>
            </div>
            <div className="bottom-section">
                <div className="profile-username-container">
                    <div className="column-1" style={{width:"20%", display:"inline-block"}}>
                    </div>
                    <div className="column-2" style={{width:"80%", display:"inline-block"}}>
                        <h1 className="profile-username">{user.name}</h1>
                    </div>
                </div>
                <div className="profile-description-container" style={{marginTop:"60px"}}>
                    <div className="column-1" style={{width:"20%", display:"inline-block"}}></div>
                    <div className="column-2" style={{width:"80%", display:"inline-block"}}>
                        <h3 id="political_affiliation">Political Affiliation:</h3>
                        <h3 id="occupation">Occupation:</h3>
                        <h3 id="education">Education:</h3>
                        <h3 id="topics_of_interest">Topics of Interest: </h3>
                        <p style={{width:"80%", marginTop:"40px"}} id="bio">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora ad non 
                            velit dicta culpa ipsum at exercitationem eaque quam earum, 
                            iure similique aperiam veniam consequuntur commodi voluptate, eveniet facilis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    );
}

export default MainDisplay;