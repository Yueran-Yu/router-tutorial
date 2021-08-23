import React from 'react';
import Header from "./Header";
import Home from "./Home";
import Directory from "./Directory";
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path='/directory' component={Directory}/>
        <Route path='/directory/:id' component={Profile}/>
      </Switch>
    </div>
  )
}

export default App;
