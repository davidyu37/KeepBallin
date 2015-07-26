(function(){
	var app = angular.module('keepBallin', ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html'
			})
			.state('court', {
				url: '/court',
				templateUrl: 'templates/court.html',
				onEnter: function() {loadScript()}
			})
			.state('event', {
				url: '/event',
				templateUrl: 'templates/event.html'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'templates/contact.html'
			})
	}]);
	
	app.controller('weatherController', ['$http', function($http){
		var originalData = this;
		originalData.now = [];
		$http.get('http://api.openweathermap.org/data/2.5/weather?q=taipei,tw&units=metric&lang=zh_tw').
		success(function(data, status, headers, config) {
	    	console.log(data);
	    	originalData.now = data;
	  	}).
  		error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  	});
	}]); //weather controller ends here
	
})(); //self-enclosed function ends here