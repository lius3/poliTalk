import CheckString from './CheckString';
import jwt_decode from 'jwt-decode';

/**Open the vote popup and display text according if user clicked Yay or Nay button. */
export const openVote = (vote) => {
    let disable = document.getElementById("gray_out");
    let popup = document.getElementById("popup_container");
    let you_voted = document.getElementById("you_voted");
    disable.style.display = "block";
    popup.style.display = "block";
    you_voted.innerHTML = "You voted " + vote + "."
    you_voted.style.color = "white";
}

/*Close the vote popup*/
export const closeVote = () => {
    let disable = document.getElementById("gray_out");
    let popup = document.getElementById("popup_container");
    let explain = document.getElementById("explanation");
    disable.style.display = "none";            
    popup.style.display = "none";
    explain.value = "";
}

/**Client-Server interactions that happens once user submits their vote. */
export const sendVote = (user, hasToken, yays, setYays, nays, setNays, setComment_Id, changeCommentsList) => {
      let you_voted = document.getElementById("you_voted");
      let explain = document.getElementById("explanation").value;
      let name = user.name;
  
      // CheckString verify that explanation is good and won't compromise server
      if(CheckString(explain)){
          let poll_data = {vote : 'YAY'};
          if (user.name == null) {
              name = jwt_decode(hasToken()).data.name
          }
          else {
              name = user.name;
          }
          let data = {username: name, explanation: explain, vote: 1};
          if (you_voted.innerHTML === "You voted Yay.") {
              setYays(yays+1);
          }
          else {
              poll_data = {vote : 'NAY'};
              data = {username: name, explanation: explain, vote: 0};
              setNays(nays+1);
          }

          // Send the post request to server 

          let explanation_table = "https://explanations.thien-bui.com/index.php"
          let update_explanation = new Request(explanation_table,
          {
              method:'post',
              headers: {
                  'Authorization' : 'Bearer ' + hasToken(),
                  'Accept': 'application/json',
                  'Content-Type':'application/json'
              },
              body: JSON.stringify(data)    
          })
          
          fetch(update_explanation)
          .then(response =>{
              setComment_Id(null)
          })
          .catch (console.error())

          let poll_table = "https://polls.thien-bui.com/index.php";
          let update_poll = new Request(poll_table, {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(poll_data)    
          })
          fetch(update_poll)
          .catch (console.error())
          closeVote();
          changeCommentsList([])
          
          window.location.hash = "comments_box";  
      }
      else{
          window.alert("not long enough");
      }
  }