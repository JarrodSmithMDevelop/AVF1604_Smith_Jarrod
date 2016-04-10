
/*if (Ti.Network.online) {
     var getData = Ti.Network.createHTTPClient();
     getData.onload = function(e){
          console.log(e);  //this is the raw data-string returned from the URL request
          var json = JSON.parse(this.responseText);  //convert the string to JS object notation
          var weatherObj = {
              day : json.simpleforecast.forecastday[5].date.weekday,
              temp : json.current_observation.temp_f
          };
          var ui = require("ui");
          ui.buildUi(weatherObj);
     }; //getData.onload closing
     getData.open("GET", url);
     getData.send();
} else {
     alert("Network currently unavailable.");
     // load locally stored data perhaps?
}; // if else Ti.Network closing
*/