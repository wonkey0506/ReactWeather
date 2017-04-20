import React,{Component} from 'react';


export default (props) => {
  return(
      <h3 className = "text-center">{props.location} {props.temp}</h3>
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
