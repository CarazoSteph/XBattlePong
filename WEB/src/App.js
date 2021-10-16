import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./components/home.component"


export default class App extends Component {

  render() {
    return (<Router>
      <div className="App">
        <body>        
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </body>
      </div></Router>
    );
  }
}
