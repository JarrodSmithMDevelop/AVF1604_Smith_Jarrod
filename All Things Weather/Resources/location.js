 

var getGeo = function(lat,lng){
	
	if  (Ti.Geolocation.locationServicesEnabled){
		Ti.Geolocation.purpose = ("Application needs your location cordinates");
		Ti.Geolocation.getCurrentPosition(function(e){
			console.log("raw data", e);
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
        
        console.log("theses are cordinates", lat, lng);
        var network = require("network");
		network.weatherData(lat, lng); 
		
	});
	
	 }else {
		alert("Please enable location settings on device!");
	}
};

exports.runGetGeo = getGeo;
