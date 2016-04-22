var getGeo = function(){

if (Ti.Platform.osname === "android"){
	
	var lat = 37.4020;
	var lng = -86.8758;
		console.log("This is the android coords!",lat, lng);
			var weather = require("data");
			weather.weatherData(lat, lng);
	
}else{
	if (Ti.Geolocation.locationServicesEnabled){
		console.log("Geolocation is turned on!");
			Ti.Geolocation.purpose = ("Give your current position for current weather.");
				console.log("requested position");	
				Ti.Geolocation.getCurrentPosition(function(e){
					console.log(e);
						var lat = e.coords.latitude;
						var lng = e.coords.longitude;	
							console.log("Iphone lat and long ", lat, ", ", lng);
								var weather = require("data");
								weather.weatherData(lat, lng);
			});
		};
	};
};		
exports.geoRun = getGeo;