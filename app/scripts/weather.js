(function(){
	var w1 = angular.module('weatherJS',[]);
	
	w1.controller('weatherController', function($http, $interval){
		var originalData = this;
		//Main data json
		originalData.now = [];
		//Gets weatherID
		originalData.weatherID = [];
		//Icon source
		originalData.icon = {};
		//Grab the data as it launch
		getData(dataToIcon);
		//Get new weather every ten minutes
		$interval(getData(dataToIcon), 600000);



		function getData(callback) {
			$http.get('http://api.openweathermap.org/data/2.5/weather?q=taipei,tw&units=metric&lang=zh_tw').
			success(function(data, status, headers, config) {
		    	console.log(data);
		    	originalData.now = data;
		    	originalData.weatherID = data.weather[0].id;
		    	callback(originalData.weatherID);
		  	}).
	  		error(function(data, status, headers, config) {
		    	
		  	});
		};

		function dataToIcon(ID) {
			console.log("The ID is " + ID);
			var iconName;
			iconName = "sun";
			//Logic thats matches the ID number to the icon
			if(ID >= 200 && ID < 300) {
				iconName = "cloudLightning";
			} else if (ID >= 300 && ID < 400) {
				iconName = "cloudDrizzle";
			} else if (ID >= 500 && ID < 600) {
				iconName = "cloudRain";
			} else if (ID == 800) {
				iconName = "sun";
			} else if (ID == 801 || ID == 802) {
				iconName = "cloudSun";
			} else if (ID == 803 || ID == 804) {
				iconName = "cloud";
			} else if (ID == 905) {
				iconName = "wind";
			} else {

			}
			
			originalData.icon.where = 'templates/weatherIconSVG/' + iconName + '.html';
		};
	}); //weather controller ends here
})();