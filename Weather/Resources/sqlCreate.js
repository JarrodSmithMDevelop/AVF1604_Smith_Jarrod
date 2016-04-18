//Create a sql database

var createSql = function(observation){
	console.log("Inside create sql function!");
	var db = Ti.Database.open('weatherInfo');
		db.execute('CREATE TABLE IF NOT EXISTS weatherInfo(id INTEGER PRIMARY KEY, city TEXT, state TEXT, zip INT, currentTemp INT, heatIndex INT, windChill INT, stationId TEXT, currentWeather TEXT, windSpeed INT, windDirection TEXT, windGust INT, humidity INT, feelsLike INT, local TEXT, visability INT, pressure INT, dewpoint INT, dateTime TEXT)');
		db.execute('INSERT INTO weatherInfo (city, state, zip, currentTemp, heatIndex, windChill, stationId, currentWeather, windSpeed, windDirection, windGust, humidity, feelsLike, local, visability, pressure, dewpoint, dateTime) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', observation.city, observation.state, observation.zip, observation.currentTemp, observation.heatIndex, observation.windChill, observation.stationId, observation.currentWeather, observation.windSpeed, observation.windDirection, observation.windGust, observation.humidity, observation.feelsLike, observation.local, observation.visability, observation.pressure, observation.dewpoint, observation.dateTime);
	var rowId = db.lastInsertRowId;
	console.log(rowId);
	db.close();
		var readSql = require("sqlRead");
		readSql.read();
};

exports.createSql = createSql;