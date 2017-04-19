var axios = require('axios');

const OPEN_WEATHER_MAP_URL1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
const OPEN_WEATHER_MAP_URL2 = '&units=metric&appid=d6b08ea9e60e09a9f1eceb8175aa9f40';

//  d6b08ea9e60e09a9f1eceb8175aa9f40 - myApiID

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL1}${encodedLocation}${OPEN_WEATHER_MAP_URL2}`;

    return new axios.get(requestUrl).then(function(res) {
      
      if (res.data.message && res.data.cod) {
        return new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      return "res.data.message";
    });
  }
}
