 

var getGeo = function(lat,lng){
	
	if  (Ti.Platform.osname == "iphone"){
	
		if (Ti.Geolocation.locationServicesEnabled){
		//Ti.Geolocation.purpose = ("Application needs your location cordinates");
		Ti.Geolocation.getCurrentPosition = (function(e){
		console.log(e);
			var lat = e.coords.latitude;
			console.log(lat);
			var lng = e.coords.longitude;
            
        console.log("theses are cordinates", lat, lng);
        var network = require("network");
		network.weatherData(lat, lng); 
		
	});
		}else{
			alert("Check network cennection!");
		};
	 }else {
		
		if (Ti.Geolocation.locationServicesEnabled){
		//Ti.Geolocation.purpose = ("Application needs your location cordinates");
		Ti.Geolocation.getCurrentPosition(function(e){
		console.log(e);
			var lat = 0;
			console.log(lat);
			var lng = 0;
            
        console.log("theses are cordinates", lat, lng);
        var network = require("network");
		network.weatherData(lat, lng);
	});	
		 
			}else{
				alert("Check network cennection!");
		};
	};
};
exports.runGetGeo = getGeo;
