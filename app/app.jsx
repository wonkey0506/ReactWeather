import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import Nav from './components/Nav.jsx';
import Weather from './components/Weather.jsx';
import About from './components/About.jsx';
import Examples from './components/Examples.jsx';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import { BrowserHistory,hashHistory } from 'react-history';
import Basic from './components/Basic.jsx';

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history = {BrowserHistory}>
    <div>
      <Main/>



      <Route path = "/weather" component = {Weather}/>
      <Route path = "/about" component = {About}/>
      <Route path = "/examples" component = {Examples}/>
      <Route exact path = "/" component = {Basic}/>
    </div>
  </Router>
  ,document.getElementById('app'))
