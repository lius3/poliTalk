import React from 'react'

export default function CheckString(str) {

    let parsedString = str.toString();

    // let test = "Please explain ...";

    if(str.length < 1){
        // window.alert(parsedString.length);
        // window.alert(test.length + " this the test");
        return false;
    }

   else{
       return true;
   }
}
