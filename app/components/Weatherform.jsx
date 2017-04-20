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
        <form onSubmit = {this.handleSubmit.bind(this)}>
          <input type = "text" ref = "location"/>

          <button className = "button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
}
