(function(){
	var w1 = angular.module('weatherJS',[]);
	
	w1.controller('weatherController', ['$http', '$interval', function($http, $interval){
		var thisScope = this;
		//Main data json for current weather
		thisScope.now = [];
		//Gets weatherID
		thisScope.weatherID = [];
		//Icon source
		thisScope.icon = {};
		//Grab the data as it launch
		getNowData(dataToIcon);
		getFutureData(calTimeDifference);
		//Update time every second
		$interval(function() {
			thisScope.time = getTimeNow();
		}, 1000);
		
		//Get new weather every ten minutes
		$interval(getNowData(dataToIcon), 600000);
		$interval(function() { getFutureData(calTimeDifference) }, 5000);
		//Activate button toggle for current weather and future weather
		nowFutureToggle();



		function getNowData(callback) {
			$http.get('http://api.openweathermap.org/data/2.5/weather?q=taipei,tw&units=metric&lang=zh_tw').
			success(function(data, status, headers, config) {
		    	thisScope.now = data;
		    	thisScope.weatherID = data.weather[0].id;
		    	callback(thisScope.weatherID);
		  	}).
	  		error(function(data, status, headers, config) {
		    	console.log(data);
		  	});
		};

		function getFutureData(callback) {
			$http.get('http://api.openweathermap.org/data/2.5/forecast?q=taipei,tw&units=metric&lang=zh_tw').
			success(function(data, status, headers, config) {
		    	//Get timestamp of every list item
		    	var dt = data.list[0].dt;
		    	var nowUnix = moment(getTimeNow()).unix();
		    	//Get the difference between the timestamp and now
				callback(nowUnix, dt);
		  	}).
	  		error(function(data, status, headers, config) {
		    	console.log(data);
		  	});
		};

		function calTimeDifference(now, future) {
			var delta = future - now;
			if (delta > 86400) {
				var days = Math.floor(delta / 86400);
				delta -= (days * 86400);	
			}
			if (delta > 3600) {
				var hours = Math.floor(delta / 3600) % 24;
				delta -= (hours * 3600);	
			}
			var minutes = Math.floor(delta / 60) % 60;
			delta -= minutes * 60;
			var seconds = delta % 60;
			console.log(hours+"H "+minutes+"M "+seconds+"S");
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
				console.log("What's this weather?");
			}
			
			thisScope.icon.where = 'templates/weatherIconSVG/' + iconName + '.html';
		};

		function nowFutureToggle() {
			var btn = $("#weatherTimeBtn");
			btn.click(function(){
				console.log('clicked');
				if(btn.hasClass('now')) {
					btn.removeClass('now').addClass('future').text('未來');
					$('#weatherContent').children().hide();
				} else if (btn.hasClass('future')) {
					btn.removeClass('future').addClass('now').text('現在');
					$('#weatherContent').children().show();
				}

			});//click event ends
		};

		function getTimeNow() {
			var d = new Date();
			return d
		};


	}]); //weather controller ends here
})();