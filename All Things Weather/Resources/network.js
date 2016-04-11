var url = "http://api.wunderground.com/api/4f7172086eb9b9c8/conditions/q";

var responseText = function(){
	Ti.API.debug(this.responseText);
};

if (Ti.Network.online) {
     var getData = Ti.Network.createHTTPClient({
     onload : function(e){
          console.log(e);  //this is the raw data-string returned from the URL request
          var json = JSON.parse(this.responseText);  //convert the string to JS object notation
          var weatherObj = {
              city: json.display_location.city,
              state: json.display_location.state,
              zip: json.display_location.zip,
              weather: json.current_observation.weather,
              temp: json.current_observation.temp_f,
              windDirection: json.current_observation.wind_dir,
              wind: json.current_observation.wind_mph,
              amountOfPrecip: json.current_observation.precip_today_in
          };
       }
});
 
     getData.open("GET", url);
     getData.send();
}else{
     alert("Network currently unavailable.");
   }; 