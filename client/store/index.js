import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import photosReducer from './photos';
import userReducer from './user'

const reducer = combineReducers({
  photos: photosReducer,
  user: userReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware));

export default store;
