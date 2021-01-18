import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { login, register } from '../../store/user';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
      username: '',
      loggedIn: false,
    };
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.submit = this.submit.bind(this);
  }

  setEmail(ev) {
    this.setState({ userEmail: ev.target.value });
  }

  setPassword(ev) {
    this.setState({ password: ev.target.value });
  }

  setUsername(ev) {
    this.setState({ username: ev.target.value });
  }

  submit(ev) {
    ev.preventDefault();
    const { login, register, type } = this.props;
    if (type === 'new') register(this.state);
    else login(this.state);
  }

  render() {
    const { user, type } = this.props;
    if (user.userEmail) {
      return (
        <p>
          You are logged in as
          { user.userEmail }
        </p>
      );
    }
    return (
      <>
        <div id="signInContainer">
          <div id="signInForm">
            <h3>Welcome!</h3>
            <form id="signInForm" onSubmit={this.submit}>
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                id="login-email"
                label="Your Email"
                autoComplete="email"
                onChange={this.setEmail}
                value={this.state.userEmail}
              />
              <p />
              <TextField
                variant="filled"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                id="login-password"
                autoComplete="current-password"
                onChange={this.setPassword}
                value={this.state.password}
              />
              <p />
              {
                  type === 'new'
                    ? (
                      <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        onChange={this.setUsername}
                        value={this.state.username}
                      />
                    )
                    : null
                }
              <p />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className="signInAuthButton"
              >
                { type === 'new' ? 'Register' : 'Log In' }
              </Button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (loginInfo) => dispatch(login(loginInfo)),
  register: (userInfo) => dispatch(register(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
