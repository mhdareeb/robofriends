import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import changeSearchField from './Reducers/changeSearchField';
import * as serviceWorker from './serviceWorker';

const store = createStore(changeSearchField);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
