(function(){
	var p1 = angular.module('parallax', []);
	p1.controller('parallaxCtrl', function(){
		console.log('loaded');
		$('.parallaxContent').parallax({imageSrc: "images/bg.jpg"});
	}); //controller ends here
})(); //self-enclosing function ends here
// background-image: url("../images/bg.jpg");
// background-size: cover;
// background-repeat: no-repeat;
