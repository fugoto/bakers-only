import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

// if using react router
// ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));

// if not using react router
// ReactDOM.render(<App />, document.getElementById("root"))
// make sure "root" is right or change it
