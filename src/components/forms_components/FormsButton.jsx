import React from 'react';
import "./Forms.css";

export default function FormsButton({buttonType, message}) {
    let buttonStyle;

    if(buttonType == "big"){
    
        buttonStyle = "buttonStyleBig";

        return(    
            <div className="col-4">
                <input type="submit" value={message} className= {buttonStyle} ></input>
            </div>       
        );
    }
    else if(buttonType == "small"){
        
        buttonStyle = "buttonStyleSmall";

        return(
            <div className="col-2">
                <input type="submit" value={message} className= {buttonStyle} ></input>
            </div>
        );
    }
    else{
        throw new Error("Incorrect buttonType");
    }
    
}
