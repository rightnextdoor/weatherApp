import React from 'react';
import './App.css';
import Home from './home';
import Nav from './Nav';
import WeatherApp from './weatherApp'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/weather" exact component={WeatherApp}/>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
