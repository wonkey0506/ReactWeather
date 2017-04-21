import React, {Component} from 'react';
let C = Component;
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

export default () => {
  return(
    <div>
      <h1 className="text-center page-title">Exampels</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ol>
          <li>
            <Link to="/?location=Stockholm">Stockholm, SWE</Link>
          </li>
          <li>
            <Link to = "/?location=Rio">Rio, Brazil</Link>
          </li>
        </ol>
      <img src = "https://i.gyazo.com/a6e29dcc1dc9f90aa06765be8f6191d8.png"></img>
    </div>
  );
}


//
// export default class Examples extends Component{
//   constructor(){
//     super();
//   }
//
//   render(){
//     return(
//       <h3>Examples component</h3>
//     );
//   }
// }
//
// export default class test extends C {
//   render() {
//     return (
//       <div>
//         <img src = "https://i.gyazo.com/a6e29dcc1dc9f90aa06765be8f6191d8.png"></img>
//       </div>
//     );
//   }
// }
