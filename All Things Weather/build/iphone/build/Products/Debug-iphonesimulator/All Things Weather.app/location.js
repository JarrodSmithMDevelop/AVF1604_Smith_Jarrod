 

var getGeo = function(){
	
	if  (Ti.Geolocation.locationServicesEnabled){
		Ti.Geolocation.getCurrentPosition (function(geo){
			console.log("raw data", geo);
		var lat = geo.coords.latitude;
		var lng = geo.coords.longitude;
        
        console.log("theses are cordinates", lat, lng);
        var network = require("network");
		network.weatherData(lat, lng); 
		
	});
	
	 }else {
		alert("Please enable location settings on device!");
	};
};

exports.runGetGeo = getGeo;
