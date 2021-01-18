/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GET_USER = 'GET_USER';

const _register = (user) => ({
  type: REGISTER,
  user,
});

const register = (userInfo) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/user/register', userInfo);
    dispatch(_register(data));
  } catch (err) {
    console.error(err);
  }
};

const _login = (user) => ({
  type: LOGIN,
  user,
});

const login = (loginInfo) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/user/login', loginInfo);
    dispatch(_login(data));
  } catch (err) {
    alert('Email and password do not match. Please try again.');
    console.error(err);
  }
};

const _logout = (emptyUser) => ({
  type: LOGOUT,
  emptyUser,
});

const logout = (userId) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/logout/${userId}`);
    dispatch(_logout({}));
  } catch (err) {
    console.error(err);
  }
};

const _getUser = (user) => ({
  type: GET_USER,
  user,
});

const getUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get('api/user');
    dispatch(_getUser(data));
  } catch (err) {
    console.error(err);
  }
};

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return action.user;
    case LOGOUT:
      return action.emptyUser;
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}

export { login, logout, getUser, register };
