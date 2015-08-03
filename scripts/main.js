function hasScrolled(){var t=$(this).scrollTop();Math.abs(lastScrollTop-t)<=delta||(t>lastScrollTop&&t>50?($(".header").addClass("header-up"),$(".navbar-collapse").removeClass("in")):$(".header").removeClass("header-up"),lastScrollTop=t)}function init(){var t=[],e=document.getElementById("myMap"),n={center:new google.maps.LatLng(25.033259,121.543565),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP,panControl:!0,scrollwheel:!1};map=new google.maps.Map(e,n);var o,i,r=new google.maps.InfoWindow,a={url:"../images/mapSource/basketball.ico",size:new google.maps.Size(25,25),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(12.5,12.5),scaledSize:new google.maps.Size(25,25)};for(i=0;i<courtLocation.length;i++)o=new google.maps.Marker({position:new google.maps.LatLng(courtLocation[i][1],courtLocation[i][2]),map:map,animation:google.maps.Animation.BOUNCE,icon:a}),google.maps.event.addListener(o,"click",function(t,e){return function(){r.setContent(courtLocation[e][0]),r.open(map,t),map.setCenter({lat:courtLocation[e][1],lng:courtLocation[e][2]})}}(o,i));for(var s=[],l=0;l<daAnDistrict.length;l++)s.push(new google.maps.LatLng(daAnDistrict[l][0],daAnDistrict[l][1]));var u=new google.maps.Polyline({path:s,strokeColor:"#FF0000",strokeOpacity:.7,strokeWeight:3});u.setMap(map);var c=document.getElementById("pac-input");map.controls[google.maps.ControlPosition.TOP_LEFT].push(c);var p=new google.maps.places.SearchBox(c);google.maps.event.addListener(p,"places_changed",function(){var e=p.getPlaces();if(0!=e.length){for(var n,o=0;n=t[o];o++)n.setMap(null);t=[];for(var i,r=new google.maps.LatLngBounds,o=0;i=e[o];o++){var a={url:i.icon,size:new google.maps.Size(30,30),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(12.5,12.5),scaledSize:new google.maps.Size(25,25)},n=new google.maps.Marker({map:map,icon:a,title:i.name,position:i.geometry.location,animation:google.maps.Animation.DROP});t.push(n),r.extend(i.geometry.location)}map.fitBounds(r)}}),google.maps.event.addListener(map,"bounds_changed",function(){var t=map.getBounds();p.setBounds(t)});var h=document.getElementById("locateBtn");h.addEventListener("click",getLocation),map.controls[google.maps.ControlPosition.TOP_LEFT].push(h)}function handleNoGeolocation(t){if(t)var e="Error: The Geolocation service failed.";else var e="Error: Your browser doesn't support geolocation.";{var n={map:map,position:mapCenter,content:e};new google.maps.InfoWindow(n)}map.setCenter(n.position)}function loadScript(){var t=document.createElement("script");t.id="googleMap",t.type="text/javascript",t.src="https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=places&callback=init",document.body.appendChild(t)}var didScroll,lastScrollTop=0,delta=5,navbarHeight=$(".header").outerHeight();$(window).scroll(function(t){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250),function(){var t,e,n,o,i,r=function(t,e){return function(){return t.apply(e,arguments)}},a=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,o;for(n in e)o=e[n],null==t[n]&&(t[n]=o);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,o){var i;return null==e&&(e=!1),null==n&&(n=!1),null==o&&(o=null),null!=document.createEvent?(i=document.createEvent("CustomEvent"),i.initCustomEvent(t,e,n,o)):null!=document.createEventObject?(i=document.createEventObject(),i.eventType=t):i.eventName=t,i},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,o,i,r;for(r=this.keys,e=o=0,i=r.length;i>o;e=++o)if(n=r[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,o,i,r,a;for(a=this.keys,n=i=0,r=a.length;r>i;n=++i)if(o=a[n],o===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),o=this.getComputedStyle||function(t){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),i.test(e)&&e.replace(i,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},i=/(\-([a-z]){1})/g,this.WOW=function(){function i(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return i.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},i.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},i.prototype.start=function(){var e,n,o,i;if(this.stopped=!1,this.boxes=function(){var t,n,o,i;for(o=this.element.querySelectorAll("."+this.config.boxClass),i=[],t=0,n=o.length;n>t;t++)e=o[t],i.push(e);return i}.call(this),this.all=function(){var t,n,o,i;for(o=this.boxes,i=[],t=0,n=o.length;n>t;t++)e=o[t],i.push(e);return i}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(i=this.boxes,n=0,o=i.length;o>n;n++)e=i[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,o,i,r,a;for(a=[],n=0,o=e.length;o>n;n++)r=e[n],a.push(function(){var t,e,n,o;for(n=r.addedNodes||[],o=[],t=0,e=n.length;e>t;t++)i=n[t],o.push(this.doSync(i));return o}.call(t));return a}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},i.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},i.prototype.sync=function(){return t.notSupported?this.doSync(this.element):void 0},i.prototype.doSync=function(t){var e,n,o,i,r;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,i=t.querySelectorAll("."+this.config.boxClass),r=[],n=0,o=i.length;o>n;n++)e=i[n],a.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},i.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},i.prototype.applyStyle=function(t,e){var n,o,i;return o=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),i=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,o,n,i)}}(this))},i.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),i.prototype.resetStyle=function(){var t,e,n,o,i;for(o=this.boxes,i=[],e=0,n=o.length;n>e;e++)t=o[e],i.push(t.style.visibility="visible");return i},i.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()):void 0},i.prototype.customStyle=function(t,e,n,o,i){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),o&&this.vendorSet(t.style,{animationDelay:o}),i&&this.vendorSet(t.style,{animationIterationCount:i}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},i.prototype.vendors=["moz","webkit"],i.prototype.vendorSet=function(t,e){var n,o,i,r;o=[];for(n in e)i=e[n],t[""+n]=i,o.push(function(){var e,o,a,s;for(a=this.vendors,s=[],e=0,o=a.length;o>e;e++)r=a[e],s.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=i);return s}.call(this));return o},i.prototype.vendorCSS=function(t,e){var n,i,r,a,s,l;for(s=o(t),a=s.getPropertyCSSValue(e),r=this.vendors,n=0,i=r.length;i>n;n++)l=r[n],a=a||s.getPropertyCSSValue("-"+l+"-"+e);return a},i.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=o(t).getPropertyValue("animation-name")}return"none"===e?"":e},i.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},i.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},i.prototype.scrollHandler=function(){return this.scrolled=!0},i.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,o,i;for(o=this.boxes,i=[],e=0,n=o.length;n>e;e++)t=o[e],t&&(this.isVisible(t)?this.show(t):i.push(t));return i}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},i.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},i.prototype.isVisible=function(t){var e,n,o,i,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=window.pageYOffset,i=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,o=this.offsetTop(t),e=o+t.clientHeight,i>=o&&e>=r},i.prototype.util=function(){return null!=this._util?this._util:this._util=new e},i.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},i}()}.call(this);var map,daAnDistrict=[[25.008161,121.565985],[25.007189,121.564783],[25.008141,121.562466],[25.00855,121.562337],[25.008919,121.562058],[25.009034,121.561766],[25.00989,121.561123],[25.010123,121.5602],[25.011426,121.559342],[25.012068,121.55829],[25.012165,121.557453],[25.011912,121.556359],[25.011173,121.555179],[25.00919,121.553569],[25.008859,121.55254],[25.009637,121.551445],[25.009773,121.549128],[25.009226,121.547805],[25.008467,121.546732],[25.007806,121.544629],[25.008273,121.54317],[25.008175,121.541239],[25.008506,121.539265],[25.008467,121.53787],[25.010976,121.537162],[25.013037,121.536089],[25.023342,121.52521],[25.026103,121.523129],[25.028048,121.521691],[25.032344,121.522506],[25.035436,121.52433],[25.034075,121.527248],[25.033744,121.529566],[25.033628,121.531197],[25.033589,121.532634],[25.041637,121.532849],[25.045467,121.53287],[25.044923,121.534694],[25.044767,121.536647],[25.044592,121.540166],[25.044903,121.543857],[25.045137,121.54611],[25.045117,121.546775],[25.044437,121.552998],[25.044437,121.554092],[25.045156,121.557826],[25.029341,121.557428],[25.027844,121.556526],[25.024325,121.5526],[25.017383,121.560003],[25.017344,121.560045],[25.016411,121.560453],[25.015983,121.560754],[25.014972,121.561848],[25.014486,121.562256],[25.013786,121.56262],[25.013339,121.563307],[25.011686,121.563479],[25.011103,121.563779],[25.009936,121.565346],[25.008161,121.565985]],courtLocation=[["台北科技大學",25.043204,121.537544],["仁愛國中",25.036629,121.550943],["懷生國中",25.04037,121.540789],["師大附中",25.035833,121.540549],["延平中學",25.036516,121.538686],["大安高工",25.031991,121.541209],["仁愛國小",25.035928,121.551397],["忠孝東路三段248巷",25.039609,121.541616],["幸安國小",25.036613,121.535161],["金華國中",25.030611,121.532197],["新生國小",25.029987,121.532583],["金華國小",25.032583,121.528198],["師範大學",25.026391,121.525045],["古亭國小籃球場",25.021263,121.529668],["銘傳國小",25.014081,121.536246],["台大醉月湖",25.019211,121.536075],["台大醉月湖",25.020206,121.536455],["新民小學",25.02231,121.531443],["台灣科技大學",25.014738,121.542144],["公館國小",25.011994,121.54294],["芳和國中",25.018299,121.549634],["大安國小",25.019763,121.549806],["台北教育大學",25.02342,121.545166],["臥龍街56巷32弄17號",25.021344,121.54566],["喬治工商",25.026682,121.554532],["東方工商",25.032053,121.551188],["嘉興街363號",25.023435,121.552291],["金甌女中",25.034749,121.52447],["民族國中",25.00998,121.539141],["龍安國小",25.022897,121.535665],["龍門國中",25.023896,121.538345],["國立台北教大實小",25.024362,121.541069],["和平高中",25.019422,121.547461],["臺灣大學",25.018475,121.546572],["立人國中",25.029546,121.552003],["大安國中",25.030324,121.54633],["建安國小",25.029043,121.547022],["大安森林公園",25.031658,121.535971]],getLocation=function(){var t=new google.maps.Marker;t.setMap(null),t=null,navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var n=new google.maps.LatLng(e.coords.latitude,e.coords.longitude);t=new google.maps.Marker({map:map,position:n,animation:google.maps.Animation.DROP}),map.setCenter(n),map.setZoom(18)},function(){handleNoGeolocation(!0)}):handleNoGeolocation(!1)};!function(){angular.module("keepBallin",["ui.router","weatherJS"]).config(["$urlRouterProvider","$stateProvider",function(t,e){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"templates/home.html"}).state("court",{url:"/court",templateUrl:"templates/court.html",onEnter:function(){loadScript()}}).state("event",{url:"/event",templateUrl:"templates/event.html"}).state("contact",{url:"/contact",templateUrl:"templates/contact.html"})}])}(),function(){var t=angular.module("weatherJS",[]);t.controller("weatherController",["$scope","$http","$interval","$filter",function(t,e,n,o){function i(n){e.get("http://api.openweathermap.org/data/2.5/weather?q=taipei,tw&units=metric&lang=zh_tw").success(function(e,o,i,r){t.now=e,t.weatherID=e.weather[0].id;var a=n(t.weatherID);t.icon.whereNow="templates/weatherIconSVG/"+a+".html"}).error(function(t,e,n,o){console.log(t)})}function r(n){e.get("http://api.openweathermap.org/data/2.5/forecast?q=taipei,tw&units=metric&lang=zh_tw").success(function(e,n,o,i){var r=e.list;t.future=r,t.showFutureWeather(r[0])}).error(function(t,e,n,o){console.log(t)})}function a(t,e){var n={},o=e-t;if(o>86400){var i=Math.floor(o/86400);i=s(i),n.day=i,o-=86400*i}else n.day="00";if(o>3600){var r=Math.floor(o/3600)%24;r=s(r),n.hour=r,o-=3600*r}else n.hour="00";var a=Math.floor(o/60)%60;a=s(a),n.minute=a,o-=60*a;var l=o%60;return l=s(l),n.second=l,n}function s(t){var e=t.toString();return e.length<2?e="0"+e:e}function l(t){console.log("The ID is "+t);var e;return e="sun",t>=200&&300>t?e="cloudLightning":t>=300&&400>t?e="cloudDrizzle":t>=500&&600>t?e="cloudRain":800==t?e="sun":801==t||802==t?e="cloudSun":803==t||804==t?e="cloud":905==t?e="wind":console.log("What's this weather?"),e}function u(){var t=new Date;return t}t.now=[],t.weatherID=[],t.icon={},t.future=[],t.futureDisplay={},t.weatherTime={},t.weatherTime.temp="templates/weatherWidget/nowWeather.html",t.futureLoop=null,t.nowLoop=n(function(){t.time=u()},1e3),t.nowDataUpdate=n(function(){i(l)},6e5),t.futureDataUpdate=n(function(){r()},6e5),i(l),r(),t.nowFutureToggle=function(){var e=$("#weatherTimeBtn");e.hasClass("now")?(e.removeClass("now").addClass("future").text("未來"),temp="futureWeather"):e.hasClass("future")&&(e.removeClass("future").addClass("now").text("現在"),temp="nowWeather"),t.weatherTime.temp="templates/weatherWidget/"+temp+".html"},t.showFutureWeather=function(e){if(null!=e){angular.isDefined(t.futureLoop)&&n.cancel(t.futureLoop);var o,i,r,s,c,p,h;o=moment(u()).unix(),i=e.dt,r=a(o,i),t.futureDisplay.diff=r,t.futureLoop=n(function(){o=moment(u()).unix(),i=e.dt,r=a(o,i),t.futureDisplay.diff=r},1e3),s=e.main.temp,t.futureDisplay.temp=s,c=e.weather[0].id,p=l(c),t.icon.whereFuture="templates/weatherIconSVG/"+p+".html",h=e.weather[0].description,t.futureDisplay.description=h}},t.$on("$destroy",function(){n.cancel(t.futureLoop),n.cancel(t.nowLoop),n.cancel(t.nowDataUpdate),n.cancel(t.futureDataUpdate)})}])}();