/* var weatherData = function(lat, lng){
	
var url = "http://api.wunderground.com/api/4f7172086eb9b9c8/conditions/q/" + lat + "," + lng + ".json";
	console.log(url);	
	
	if (Ti.Network.online === true){
		var fetchData = Ti.Network.createHTTPClient;
			fetchData.onload = function(){
			var json = JSON.parse(this.responseText);
				var observation = {
					city:
					state
					zip
					currentTemp
					lowTemp
					highTemp
					currentWeather
					windSpeed 
					windDirection
					feelsLike
					visability
					pressure
					dewpoint
					dataTime
				};
			};
		
	}else{
		alert("Please check connection and try again later");
	}
};


exports.weatherData = weatherData;  */