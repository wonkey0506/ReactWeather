import React,{Component} from 'react';


export default (props) => {
  return(
      <h4>{props.location} {props.temp}</h4>
  );
}




// export default class WeaterMessage extends Component{
//   constructor(){
//     super();
//   }
//
//   render(){
//     return(
//         <h4>{this.props.location} {this.props.temp}</h4>
//     );
//   }
// }
