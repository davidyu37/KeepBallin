(function(){
	var app = angular.module('keepBallin', ['ui.router', 'weatherJS', 'googleMap'])
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
				// onEnter: function() {loadScript()}
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
	
	
	
})(); //self-enclosed function ends here