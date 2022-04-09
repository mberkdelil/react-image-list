import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux'
import { reducer } from './reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
