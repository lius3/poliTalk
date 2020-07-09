import React from 'react';
import Home from './pages/Home.js';
import About from './pages/About.js';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
//Kevin is working on navbar
//Shannon is working on the header and the topic space
//Quoc is working on the chart and comments space
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>

      
    </>
    
  );
}


export default App;

