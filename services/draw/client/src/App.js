import React, { Component } from 'react';
import MaterialContainer from './components/MaterialContainer';
import DrawApp from './components/DrawApp';
import ViewApp from './components/ViewApp';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <MaterialContainer>
        <Router>
          <Switch>
            <Route exact path="/" component={DrawApp}/>
            <Route exact path="/view" component={ViewApp}/>
            <Redirect to='/' />
          </Switch>
        </Router>
      </MaterialContainer>
    );
  }
}

export default App;
