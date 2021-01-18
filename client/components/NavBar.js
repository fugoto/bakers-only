import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core/';
import Logout from './auth/Logout';

function NavBar(props) {
  return (
    <div id="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/addPhoto">Add Photo</Link>
      <Link to="/managePhotos">Manage Photos</Link>
      <div id="auth-button">
        { !props.user.id
          ? (
            <Link to="/login">
              <Button variant="contained" color="secondary" className="signInAuthButton">
                Log in
              </Button>
            </Link>
          )
          : <Logout /> }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(NavBar);
