
var weatherData = function(lat, lng){

var url = "http://api.wunderground.com/api/4f7172086eb9b9c8/conditions/q/" + lat + "," + lng + ".json";
console.log(url);


if (Ti.Network.online) {
     var getData = Ti.Network.createHTTPClient();
     getData.onload = function(url){
          console.log(getData);  //this is the raw data-string returned from the URL request
          var json = JSON.parse(this.responseText);  //convert the string to JS object notation
          console.log(json);
          var weatherObj = {
              city : json.current_observations.display_location.city,
              state : json.current_observations.display_location.state,
              zip : json.current_observations.display_location.zip,
              weather : json.current_observation.weather,
              temp : json.current_observation.temp_f,
              windDirection : json.current_observation.wind_dir,
              wind : json.current_observation.wind_mph,
              amountOfPrecip : json.current_observation.precip_today_in,
              humidity : json.current_observation.relative_humidity
            };
            console.log(weatherObj);
          var infoDisplay = require("infoDisplay");
          infoDisplay.buildUi(weatherObj);
      };
 
     getData.open("GET", url);
     getData.send();
     
    
}else{
     alert("Network currently unavailable.");
   };
};

exports.weatherObj = weatherData;