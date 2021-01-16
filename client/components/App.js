/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  HashRouter as Router, Route, Switch,
} from 'react-router-dom';

import Photos from './Photos';
import AddPhoto from './AddPhoto';
import NavBar from './NavBar';
import Login from './auth/Login';

// KEEP AS class for get user later on
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Photos} />
            <Route path="/addPhoto" exact component={AddPhoto} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </>
    );
  }
}
