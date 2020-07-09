import React from 'react';

function Topic({question}){
    return(
        <div id = "topic-object" className="container-fluid" style={{backgroundColor:"white"}}>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-md-10" style={{ backgroundColor:"#123b52ff"}}>
                    <p id="topic" style={{fontSize: "36px", font: "Trebuchet MS", color: "#ffe599", 
                    textAlign:"center", padding: "20px"}}> Topic: {question} </p>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default Topic;
