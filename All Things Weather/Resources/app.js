// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor = '#000';



// create base UI tab and root window
//
var mainWindow = Ti.UI.createWindow({  
    title:'All Things Weather',
    backgroundColor:'#777'
});

if (Ti.Network.online === true){
	console.log("app js if statement");
	var loadGeo = require("location");
	console.log("ran load geo");
	loadGeo.runGetGeo();
} else {
	alert("Please check network connection!");
	};



mainWindow.open();
