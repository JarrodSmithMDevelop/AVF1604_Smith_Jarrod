var url = "http://api.wunderground.com/api/4f7172086eb9b9c8/conditions/q";

var responseText = function(){
	Ti.API.debug(this.responseText);
};

var weatherData = Ti.Network.createHTTPClient({
	onload: responseText,
	timeout: 5000
});
