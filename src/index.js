import React from 'react';
import ReactDOM from 'react-dom';
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import './index.css';
import App from './App';

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


