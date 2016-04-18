
var weatherInfo = function(sqlData){
	console.log("Inside weatherInfo function");
	
	
	
var phoneHeight = Ti.Platform.displayCaps.platformHeight;
var phoneWidth = Ti.Platform.displayCaps.platformWidth;



var locationBackground = Ti.UI.createView({
	backgroundColor: "#1C20AB",
	height: 130,
	width: phoneWidth,
	top: 20
});

var locationLabel = Ti.UI.createLabel({
	color:'#FFFCCC',
	text: "Location",
	left: 15,
	top: 40,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var location = Ti.UI.createLabel({
	color:'#FFFCCC',
	text: sqlData.city + ", " + sqlData.state + "\n" + sqlData.zip,
	left: 15,
	top: 80,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'left',
	width:'auto'
});


var currentTempLabel = Ti.UI.createLabel({
	color:'#FFFCCC',
	text: "Current Tempature",
	right: 15,
	top: 40,
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var tempReading = Ti.UI.createLabel({
	color:'#FFFCCC',
	text: sqlData.temp,
	right: 15,
	top: 70,
	font:{fontSize:60,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var precipBackground = Ti.UI.createView({
	backgroundColor: "#1C20AB",
	height: 150,
	width: phoneWidth,
	bottom: 0
}); 

var windSpeedLabel =Ti.UI.createLabel({
	color:'#FFFCCC',
	text: "Wind",
	right: 15,
	top:175,
	font:{fontSize:22,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var windSpeed = Ti.UI.createLabel({
	color:'#FFFCCC',
	text: sqlData.wind,
	right: 15,
	top: 200,
	font:{fontSize:60,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var currentWeatherLabel = Ti.UI.createLabel({
	color:'#FFFCCC',
	text: "Current Weather",
	left: 15,
	top: 175,
	font:{fontSize:20,
	fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var currentWeather = Ti.UI.createLabel({
	color:'#FFFCCC',
	text: sqlData.weather,
	left: 15,
	top: 210,
	font:{fontSize:18,
	fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});


var amountPercentage = Ti.UI.createLabel({
	color:'#FFFCCC',
	text: sqlData.amountOfPrecip,
	right: 15,
	bottom: 50,
	font:{fontSize:32,
	fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var precipLabel = Ti.UI.createLabel({
	color:'#FFFCCC',
	text: "Chance of \n precipitation",
	right: 15,
	bottom: 90,
	font:{fontSize:20,
	fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var humidityLabel = Ti.UI.createLabel({
	color: '#FFFCCC',
	text: "Humidity",
	left: 15,
	bottom: 90,
	font:{fontSize:20,
	fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var humidityPercentage = Ti.UI.createLabel({
	color:'#FFFCCC',
	text: sqlData.humidity,
	left: 15,
	bottom: 50,
	font:{fontSize:32,
	fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});




mainWindow.add( locationBackground, precipBackground, windSpeedLabel, windSpeed, currentWeather, currentWeatherLabel, humidityPercentage, humidityLabel, amountPercentage, precipLabel, locationLabel ,location , currentTempLabel, tempReading);
};

exports.weatherInfo = weatherInfo;