import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import EventData from './EventData';

function App(){
  return(
    <div className = 'App'>
      <BrowserRouter>
        <div>
        <div className="header">
            <NavLink exact activeClassName="active" to="/">EventData</NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={EventData} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;