//API Key browser AIzaSyAlJHW3hVfbA2163lAtFMP98oaFVHBllhw
//API Key android AIzaSyAUDR4XIq93M7fisnAaVuFhuanAsZi-OAc
//API key IOS AIzaSyDky-aMwZjkeO3dINLQPMAwy_QGarRtfvM
// API URL "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlJHW3hVfbA2163lAtFMP98oaFVHBllhw&callback=initMap"

Ti.UI.setBackgroundColor = "#000";

var mainWindow = Ti.UI.createWindow({
	title: 'Trip Memories',
});

if (Ti.Network.online == true){
	var getGeo = require("geo");
	getGeo.geoData();
	
}else{
	alert("Check your network connection!");
};


mainWindow.open();

