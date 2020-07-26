import React from 'react';

function Topic({question}){
    return(
            
            <div className="row" style={{marginTop:"25px"}}>
                <div className="col-12" style={{backgroundColor:"#ffe599"}}>
                {/*This is a topic space where a question/topic is posed to encourage political discourse */}
                    <p  id="topic">{question}</p>
                </div>
            </div>
    );
}

export default Topic;
