import React, {Component} from 'react';
import Form from './Weatherform.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import WeatherInfo from '../api/openWeatherMap.jsx';
import Warning from './warning.jsx';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      temp: 20,
      location: '',
      isLoading: false,
      errorMessage: undefined
    }
  }

  handleSearch(location) {
    var self = this;


    self.setState({isLoading: true, errorMessage: undefined}, function() {
      WeatherInfo.getTemp(location).then(function(success) {
        self.setState({temp:success,isLoading:false,location:location}); // Done
      }, function(err) {
        self.setState({errorMessage:err.message,isLoading:false});
      });
    })};




    render() {
      var {test, isLoading, location, temp, errorMessage} = this.state;

      function renderMessage() {
        if (isLoading) {
          return <h3 className="text-center">Fetching weather..</h3>;
          } else if (temp && location) {
            return <WeatherMessage location={location} temp={temp}/>;
          }
        }

        function renderError() {
          if (typeof errorMessage === 'string') {
            return (<Warning message={errorMessage}/>);
          }
        }

        return (
          <div>
            <h1 className="text-center page-title">Get Weather</h1>
            <Form onSearch={this.handleSearch.bind(this)}/>
            {renderMessage()}
            {renderError()}
          </div>
        );
      }
    }
