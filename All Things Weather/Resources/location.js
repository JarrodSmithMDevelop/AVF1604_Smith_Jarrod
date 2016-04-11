
var getGeo = function(){
	if  (Ti.Geoloation.locationServicesEnabled){
		Ti.Geolocation.purpose = ("Application needs your location cordinates");
		Ti.Geolocation.getCurrentPosition(function(e){
			console.log(e);
			
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
        var infoDisplay = require("infoDisplay");
		infoDisplay.buildUi(lat, lng); 
	});
	
	 }else {
		alert("Please enable location settings on device!");
	}
};

exports.runGetGeo = getGeo;
