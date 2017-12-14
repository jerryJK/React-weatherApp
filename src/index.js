import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducer from './reducers';
import './index.css';
import App from './components/App';

const store = createStore(reducer, applyMiddleware(ReduxPromise));

ReactDOM.render(
      <Provider store={store}>
         <App />
      </Provider>,
      document.getElementById('root')
);
