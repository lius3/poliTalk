
export default function ConvertTime(UTC_Time) {
    
        let convertedTime = new Date(UTC_Time + " UTC");
        let currentTime = new Date();
    
        let difference = currentTime.getTime() - convertedTime.getTime();
    
        let convert = {years:60*60000*24*30*12, months:60*60000*24*30, weeks:60*60000*24*7, days: 60*60000*24, hours:60000*60, minutes: 1000*60} ;
    
        let returnString = "";
    
        for(let i in convert){
          let calculated = Math.floor((difference / convert[i])).toString();
    
          if(calculated > 0){
            returnString += Math.floor((difference / convert[i])).toString() +" "+ i;
            return returnString +" ago";
          }
         
          difference = difference % convert[i];
        }
        
      
        return "Just now";
}

