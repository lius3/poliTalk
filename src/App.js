import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';

function App() {

  return (
    <>
    <Auth0Provider
      domain="dev-olg0mywd.us.auth0.com"
      clientId="46QahzxF1pwiiU2KlTJyPn8eV4Zwmlss"
      redirectUri={"http://localhost:3000/"}
      
    >
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </Router>
    </Auth0Provider> 
    </>
  );
}


export default App;

