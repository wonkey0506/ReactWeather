import React,{Component,PropTypes,LinkContainer} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';


function handle(e) {
  var temp = e.target.parentNode.children;
  for(var i of temp){
    i.removeAttribute('class');
  }
  e.target.classList.toggle("active");
}


export default class Nav extends Component{
  constructor(){
    super();
  }

  onSearch(e){
    e.preventDefault();
    alert('not yet wired up');
  }

  render(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className = "menu">
            <li className = "menu-text">React Weather App</li>
            <li>
              <Link className = "active" onClick={handle.bind(this)} to = "/">Home</Link>
            </li>
            <li>
              <Link onClick={handle.bind(this)} to = "/weather">Get Weather</Link>
            </li>
            <li>
              <Link onClick={handle.bind(this)} to = "/examples">Examples</Link>
            </li>
            <li>
              <Link onClick={handle.bind(this)} to = "/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder = "Search Weather"/>
              </li>
              <li>
                <input type="submit" className = "button" value = "Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}


// export default class Nav extends Component{
//   constructor(){
//     super();
//     this.state = {name:'adam'}
//   }
//
//   handle(e){
//     var temp = e.target.parentNode.children;
//     for(var i of temp){
//       i.removeAttribute('class');
//     }
//     e.target.classList.toggle("active");
//   }
//
//
//   render(){
//     return(
//       <div id = "nav">
//         <h3>nav component</h3>
//         <div>
//           <Link onClick={this.handle.bind(this)} to = "/weather">Get Weather</Link>
//           <Link onClick={this.handle.bind(this)} to = "/about">About</Link>
//           <Link onClick={this.handle.bind(this)} to = "/examples">Examples</Link>
//           <Link className = "active" onClick={this.handle.bind(this)} to = "/">Home</Link>
//         </div>
//       </div>
//     );
//   }
// }
//
