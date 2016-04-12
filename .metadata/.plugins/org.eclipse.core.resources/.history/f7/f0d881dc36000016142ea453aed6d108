// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000');



// create base UI tab and root window
//
var mainWindow = Ti.UI.createWindow({  
    title:'All Things Weather',
    backgroundColor:'#777'
});

if (Ti.Network.online === true){
	var loadGeo = require("location");
} else {
	alert("Please check network connection!");
	};

var infoDisplay = require("infoDisplay");
var network = require("network"); 
var location = require("location");

mainWindow.open();
