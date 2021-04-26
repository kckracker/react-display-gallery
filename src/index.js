import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './css/index.css';



ReactDOM.render(
  <BrowserRouter basename="/">
    <App /> 
 </BrowserRouter>,
  document.getElementById('root')
);


