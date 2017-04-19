import React,{Component,PropTypes,LinkContainer} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';


function handle(e) {
  var temp = e.target.parentNode.children;
  for(var i of temp){
    i.removeAttribute('class');
  }
  e.target.classList.toggle("active");
}
export default () => {
  return(
    <div id = "nav">
      <h3>nav component</h3>
      <div>
        <Link onClick={handle.bind(this)} to = "/weather">Get Weather</Link>
        <Link onClick={handle.bind(this)} to = "/about">About</Link>
        <Link onClick={handle.bind(this)} to = "/examples">Examples</Link>
        <Link className = "active" onClick={handle.bind(this)} to = "/">Home</Link>
      </div>
    </div>
  );
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
