import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import App from './components/app';

const createStoreWithMiddleware = compose(
  applyMiddleware(ReduxPromise),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
</Provider>
  , document.getElementById('root')
);
registerServiceWorker();
