(function(){
	var app = angular.module('keepBallin', []);
	
	app.controller('weatherController', ['$http', function($http){
		var originalData = this;
		originalData.dat = [];
		$http.get('http://api.openweathermap.org/data/2.5/weather?q=taipei,tw&units=metric&lang=zh_tw').
		success(function(data, status, headers, config) {
	    	console.log(data);
	    	originalData.dat = data;
	  	}).
  		error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  	});

		
	}]); //weather controller ends here
	
})(); //self-enclosed function ends here