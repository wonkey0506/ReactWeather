import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Nav from './Nav.jsx';
import Weather from './Weather.jsx';
import About from './About.jsx';
import Examples from './Examples.jsx';
import Basic from './Basic.jsx';

export default () => {
  return(
    <div id = "main">
      <Nav/>
      <h2 className = "test">Main component</h2>
    </div>
  );
}

//
// export default class Main extends Component{
//   constructor(){
//     super();
//   }
//   render(){
//     return(
//       <div id = "main">
//         <Nav/>
//         <h2 className = "test">Main component</h2>
//       </div>
//     );
//   }
// }
