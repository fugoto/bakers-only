/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router, Route, Switch,
} from 'react-router-dom';
import Photos from './photo/Photos';
import AddPhoto from './photo/AddPhoto';
import NavBar from './NavBar';
import Login from './auth/Login';
import ManagePhotos from './photo/ManagePhotos';
import { getUser } from '../store/user';

// KEEP AS class for get user later on
class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Photos} />
            <Route path="/addPhoto" exact component={AddPhoto} />
            <Route path="/login" exact component={Login} />
            <Route path="/managePhotos" exact component={ManagePhotos} />
            {/* <Route path="/managePhotos/:photoId" render={(props) => <AddPhoto {...props} />} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
