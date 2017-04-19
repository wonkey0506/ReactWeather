import React,{Component} from 'react';
import Form from './Weatherform.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import WeatherInfo from '../api/openWeatherMap.jsx';


export default class Weather extends Component{
  constructor(){
    super();
    this.state = {
      temp:20,
      location:'Gothenburg',
      isLoading: false
    }
  }

  handleSearch(location){
    var self = this;
    this.setState({isLoading:true});



    WeatherInfo.getTemp(location).then(function(temp) {
      self.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    }),function(err) {
      self.setState({isLoading:false});
      console.log(err);
      alert(err);
    }
  }
  render(){
    var {isLoading, location, temp} = this.state;
    
    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather..</h3>;
        } else if(temp && location) {
          return <WeatherMessage location = {location} temp = {temp}/>;
        }
      }

      return(
        <div>
          <Form onSearch = {this.handleSearch.bind(this)}/>
          {renderMessage()}
        </div>
      );
    }
  }
