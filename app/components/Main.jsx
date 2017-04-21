import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Nav from './Nav.jsx';
import Weather from './Weather.jsx';
import About from './About.jsx';
import Examples from './Examples.jsx';
import Basic from './Basic.jsx';

export default class Main extends Component{
  constructor(){
    super();
  }

  change(info){
    alert('hej');
  }

  newWeather(){
    return(
      <Weather change = {this.change.bind(this)}/>
    )
  }

  render(){
    return(
      <div id = "main">
        <Nav/>
        <div className = "row">
          <div className = "columns medium-6 large-4 small-centered">
            <Route path = "/weather" component = {Weather}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/examples" component = {Examples}/>
            <Route exact path = "/" component = {Basic}/>
          </div>
        </div>
      </div>
    );
  }
}
