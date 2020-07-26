import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function UserDetails() {
    return (
        <>
            <h3 id="political_affiliation">Political Affiliation:</h3>
            <h3 id="occupation">Occupation:</h3>
            <h3 id="education">Education:</h3>
            <h3 id="topics_of_interest">Topics of Interest: </h3>
            <p style={{width:"80%", marginTop:"40px"}} id="bio">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora ad non 
                velit dicta culpa ipsum at exercitationem eaque quam earum, 
                iure similique aperiam veniam consequuntur commodi voluptate, eveniet facilis.
            </p>
        </>
    )

}

function MainDisplay() {
    
    const { user } = useAuth0(); 

    return (
        <div id="main-display-container">
            <div className="top-section">
                <img id="profile-profile_picture" className="rounded-circle" src={user.picture} alt=""/>
            </div>
            <div className="bottom-section" style={{height:"60vh", minHeight:"max-content"}}>
                <div className="profile-username-container" style={{paddingLeft:"20%"}}>
                    <div style={{width:"80%", display:"inline-block"}}>
                        <h1 className="profile-username">{user.name}</h1>
                    </div>
                </div>
                <div className="profile-description-container" style={{marginTop:"60px", paddingLeft:"20%"}}>
                    <div className="column-2" style={{width:"80%", display:"inline-block"}}>
                        <UserDetails/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDisplay;