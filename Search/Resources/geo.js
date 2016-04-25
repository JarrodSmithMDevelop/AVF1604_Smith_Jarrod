//Finds the geolocation of the device

var geoData = function(){
	console.log("Inside the geo function!");	
	
	if (Ti.Platform.osname === 'android'){
		
		var lat = 37.4020;
		var lng = -86.8758;
		console.log("This is the android Latitude " + lat + " and this is the longitude " + lng);
		
		var getApi = require("api");
		getApi.apiPull(lat, lng);
		
		
	}else{
		
		if (Ti.Geolocation.locationServicesEnabled === true){
			console.log("In IOS geolocation");
				Ti.Geolocation.purpose = ("Location services needed in order for app to function.");
				Ti.Geolocation.getCurrentPosition(function(c){
					console.log(c);
					
					var lat = c.coords.latitude;
					var lng = c.coords.longitude;
					
					var getApi = require("api");
					getApi.apiPull(lat, lng);
					
				});
		};
	};
	
};

exports.geoData = geoData;
