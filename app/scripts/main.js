 wow = new WOW(
    {
      boxClass:     'scrollEffect',
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
  )
  wow.init();
//header hides when user scrolls up
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event) {
	didScroll = true;
});

//run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
	//scrollTop is the number that represents the position of the scroll
	//the very top is 0
	var st = $(this).scrollTop();
	console.log('st='+st);
	if(Math.abs(lastScrollTop - st) <= delta)
        return;
  	// If current position > last position AND scrolled past navbar...
	if (st > lastScrollTop){
	  // Scroll Down
	  $('.header').addClass('header-up');
	} else {
      // Scroll Up  
      $('.header').removeClass('header-up'); 
    }
	lastScrollTop = st;
	console.log(lastScrollTop);
}