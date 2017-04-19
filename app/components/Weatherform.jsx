import React,{Component} from 'react';



export default class Form extends Component{
  constructor(){
    super();
  }


  handleSubmit(e){
    e.preventDefault();
    var location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  }

  render(){
    return(
      <div id = "weather">
        <h1>Get Weather</h1>
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <input type = "text" ref = "location"/>
          <br/>
          <input type = "submit"/>
        </form>
      </div>
    );
  }
}
