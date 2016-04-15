var getGeo = function(){

if (Ti.Platform.osname === "iphone OS"){
	
	if (Ti.Geolocation.locationServicesEnabled){
		console.log("Geolocation is turned on!");
			Ti.Geolocation.purpose = ("Give your current position for current weather.");	
				Ti.Geolocation.getCurrentPosition(function(e){
					console.log(e);
						var lat = e.coords.latitude;
						var lng = e.coords.longitude;	
							console.log("Iphone lat and long ", lat, ", ", lng);
		});
	}else{
		alert("Check network connection!");
	};
	
	
}else

	var lat = 30;
	var lng = 120;
		console.log("This is the android coords!",lat, lng);
};

exports.getGeo = getGeo;