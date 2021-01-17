import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { logout } from '../../store/user';

function Logout(props) {
  const { user, logout } = props;
  return (
    <Button
      onClick={() => logout(user.id)}
      type="submit"
      variant="contained"
      color="secondary"
      className="signInAuthButton"
    >
      Log out
    </Button>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (userId) => dispatch(logout(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
