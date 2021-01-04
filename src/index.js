import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
