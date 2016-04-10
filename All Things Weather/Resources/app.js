// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000');



// create base UI tab and root window
//
var mainWindow = Ti.UI.createWindow({  
    title:'All Things Weather',
    backgroundColor:'#777'
});


var infoDisplay = require("infoDisplay");
var networkConnect = require("network"); 


mainWindow.open();
