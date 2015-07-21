$(document).ready(function() {
	//Setup for AJAX getJSON
	var weatherAPI = "http://api.openweathermap.org/data/2.5/forecast?q=taipei,tw";
	var weatherOptions = {
		units: "metric",
		lang: "zh_tw"
	};

	function displayWeather(data) {
		var d = data;
		console.log(d);
	};

	$.getJSON(weatherAPI, weatherOptions, displayWeather);
	
});//ready ends here