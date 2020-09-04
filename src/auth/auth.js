
let inMemoryToken;

export function hasToken() {
    const jwt_token = inMemoryToken;
    if (!jwt_token) {
        return false;
    }
    return jwt_token;
    
}

export function login(jwt_token) {
    inMemoryToken = jwt_token;
}

/*This function is called when the user clicks the 'Log In' button in
the Log In page. User sends a request to backend to authenticate.*/
export function sendLogin(history, setFail) {

    let response_status;
    let username = document.getElementById("Username");
    let password = document.getElementById("Password");

    console.log(username);
    console.log(password);
    console.log("READ THIS");
    let data = {username: username.value, password: password.value};
    let req = new Request("http://localhost/auth/login.php", 
    {
        method:'post',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }
    );

    fetch(req)
    .then(response =>  {
        
        window.alert("hello 43");
        if (response.status == 200) {
            response_status = 200;
            username.value = "";
            password.value = "";
            return response.json();
        }
        else {
            response_status = 400;
            return response.json()
        }
    })
    .then(jsonData => {
       if (response_status == 200) {
            username.value = "";
            password.value = "";
           const jwt_token = jsonData.jwt;
           login(jwt_token);

           //direct users back to homepage; see app.js for more info
           history.push('/');
       }
       else {
           setFail(true)
           console.log(JSON.stringify(jsonData.message));
       }
    })
    .catch(console.error())
}






export function sendRegistration() {
    let first_name = document.getElementById("First name").value;
    let last_name = document.getElementById("Last name").value;
    let email = document.getElementById("Email").value;
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    let data = {first_name: first_name, last_name: last_name, username: username, password: password, email: email}

    console.log(data);

    let req = new Request("http://localhost/auth/signup.php", 
    {
        method:'post',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }
    );

    fetch(req)
    .catch(console.error())
}

