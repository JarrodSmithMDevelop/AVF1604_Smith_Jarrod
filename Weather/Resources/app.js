//Sets loading background color

Ti.UI.setBackgroundColor = ("000");

var mainWindow = Ti.UI.createWindow({
	title: "The weather",
	backgroundColor: ("#777")
}); 
console.log("main window");

if (Ti.Network.online === true){
		console.log("Entering getGeo");
		var runGeo = require("geo");
		runGeo.geoRun();
		console.log("getGeo Ran");
} else{
	alert("Check your network connection!");
};


mainWindow.open();