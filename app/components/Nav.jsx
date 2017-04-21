import React, {Component, PropTypes, LinkContainer} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


export default class Nav extends Component {
  constructor() {
    super();
  }

  handle(e){
    let temp = e.target.parentNode.parentNode.children;
    for(var i of temp){
      if(e.target.tagName.toLowerCase() === 'a')
      i.firstChild.classList.remove('active');
    }
    //
    // for(var i = 1; i<temp.length;i++){
    //   temp[i].firstChild.removeAttribute('class');
    // }
    if(e.target.tagName.toLowerCase() == 'a'){
      e.target.classList.toggle('active');
    }
  }



  onSearch(e) {
    e.preventDefault();
    alert('not yet wired up');
  }



  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul onClick={this.handle} className="menu">
            <li className="menu-text"><h1>React Weather App</h1></li>
            <li>
              <Link className="active" to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Get Weather</Link>
            </li>
            <li>
              <Link to="/examples">Examples</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather By City"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
