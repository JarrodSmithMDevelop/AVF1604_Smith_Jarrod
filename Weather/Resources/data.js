var weatherData = function(lat, lng){
	
var url = "http://api.wunderground.com/api/4f7172086eb9b9c8/conditions/q/" + lat + "," + lng + ".json";
	console.log(url);	
	
	if (Ti.Network.online == true){
		console.log("inside if statment on data js");
		var fetchData = Ti.Network.createHTTPClient();
			console.log("fetch data variable");
			fetchData.onload = function(url){
				console.log("inside fetch data function");
			var json = JSON.parse(this.responseText);
				var observation = {
					city: json.current_observation.display_location.city,
					state: json.current_observation.display_location.state,
					zip: json.current_observation.display_location.zip,
					currentTemp: json.current_observation.temp_f,
					heatIndex: json.current_observation.heat_index_f,
					windChill: json.current_observation.windchill_f,
					stationId: json.current_observation.station_id,
					currentWeather: json.current_observation.weather,
					windSpeed: json.current_observation.wind_mph,
					windDirection: json.current_observation.wind_dir,
					windGust: json.current_observation.wind_gust_mph,
					humidity: json.current_observation.relative_humidity,
					feelsLike: json.current_observation.feelslike_f,
					local: json.current_observation.local_tz_short,
					visability: json.current_observation.visibility_mi,
					pressure: json.current_observation.pressure_in,
					dewpoint: json.current_observation.dewpoint_f,
					dateTime: json.current_observation.observation_time
				};
				console.log(observation);
				var create = require("sqlCreate");
				create.createSql(observation);
			};
		
		fetchData.open("GET", url);
     	fetchData.send();
	}else{
		alert("Please check connection and try again later");
	};
};


exports.weatherData = weatherData; 