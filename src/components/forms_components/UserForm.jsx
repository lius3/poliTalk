import React from 'react';
import "./Forms.css";


export default function UserForm({type, text, formType}) {     
    if(formType == "long"){
        return(
            
               
            <div className="col-4" align="center">
                <label align="left" style={{width:"100%"}} for={text}>{text}:</label>
                <input id={text} className="formComponentStyle" type={type} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
            </div>
        
          
        );
    }
    else if(formType == "short"){
        return(
            
             <div className="col-2">
               <label align="left" style={{width:"100%"}} for={text}>{text}:</label>
                <input id={text} className="formComponentStyle" type={type} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
            </div>
         
        )
    }
    else{
        return null;
    }

    
}
