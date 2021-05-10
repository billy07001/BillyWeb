import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './component/App';
import { BrowserRouter, Switch } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
