var map;
//center is set at 捷運大安站
var mapCenter = new google.maps.LatLng(25.033259, 121.543565);
//polyline coordinates for 大安區
var daAnDistrict = [
    [25.008161, 121.565985],
    [25.007189, 121.564783],
    [25.008141, 121.562466],
    [25.008550, 121.562337],
    [25.008919, 121.562058],
    [25.009034, 121.561766],
    [25.009890, 121.561123],
    [25.010123, 121.560200],
    [25.011426, 121.559342],
    [25.012068, 121.558290],
    [25.012165, 121.557453],
    [25.011912, 121.556359],
    [25.011173, 121.555179],
    [25.009190, 121.553569],
    [25.008859, 121.552540],
    [25.009637, 121.551445],
    [25.009773, 121.549128],
    [25.009226, 121.547805],
    [25.008467, 121.546732],
    [25.007806, 121.544629],
    [25.008273, 121.543170],
    [25.008175, 121.541239],
    [25.008506, 121.539265],
    [25.008467, 121.537870],
    [25.010976, 121.537162],
    [25.013037, 121.536089],
    [25.023342, 121.525210],
    [25.026103, 121.523129],
    [25.028048, 121.521691],
    [25.032344, 121.522506],
    [25.035436, 121.524330],
    [25.034075, 121.527248],
    [25.033744, 121.529566],
    [25.033628, 121.531197],
    [25.033589, 121.532634],
    [25.041637, 121.532849],
    [25.045467, 121.532870],
    [25.044923, 121.534694],
    [25.044767, 121.536647],
    [25.044592, 121.540166],
    [25.044903, 121.543857],
    [25.045137, 121.546110],
    [25.045117, 121.546775],
    [25.044437, 121.552998],
    [25.044437, 121.554092],
    [25.045156, 121.557826],
    [25.029341, 121.557428],
    [25.027844, 121.556526],
    [25.024325, 121.552600],
    [25.017383, 121.560003],
    [25.017344, 121.560045],
    [25.016411, 121.560453],
    [25.015983, 121.560754],
    [25.014972, 121.561848],
    [25.014486, 121.562256],
    [25.013786, 121.562620],
    [25.013339, 121.563307],
    [25.011686, 121.563479],
    [25.011103, 121.563779],
    [25.009936, 121.565346],
    [25.008161, 121.565985]
];
  
//courtLocation for 大安區
var courtLocation = [
    ['台北科技大學', 25.043204, 121.537544],
    ['仁愛國中', 25.036629, 121.550943],
    ['懷生國中', 25.040370, 121.540789],
    ['師大附中', 25.035833, 121.540549],
    ['延平中學', 25.036516, 121.538686],
    ['大安高工', 25.031991, 121.541209],
    ['仁愛國小', 25.035928, 121.551397],
    ['忠孝東路三段248巷', 25.039609, 121.541616],
    ['幸安國小', 25.036613, 121.535161],
    ['金華國中', 25.030611, 121.532197],
    ['新生國小', 25.029987, 121.532583],
    ['金華國小', 25.032583, 121.528198],
    ['師範大學', 25.026391, 121.525045],
    ['古亭國小籃球場', 25.021263, 121.529668],
    ['銘傳國小', 25.014081, 121.536246],
    ['台大醉月湖', 25.019211, 121.536075],
    ['台大醉月湖', 25.020206, 121.536455],
    ['新民小學', 25.022310, 121.531443],
    ['台灣科技大學', 25.014738, 121.542144],
    ['公館國小', 25.011994, 121.542940],
    ['芳和國中', 25.018299, 121.549634],
    ['大安國小', 25.019763, 121.549806],
    ['台北教育大學', 25.023420, 121.545166],
    ['臥龍街56巷32弄17號', 25.021344, 121.545660],
    ['喬治工商', 25.026682, 121.554532],
    ['東方工商', 25.032053, 121.551188],
    ['嘉興街363號', 25.023435, 121.552291],
    ['金甌女中', 25.034749, 121.524470],
    ['民族國中', 25.009980, 121.539141],
    ['龍安國小', 25.022897, 121.535665],
    ['龍門國中', 25.023896, 121.538345],
    ['國立台北教大實小', 25.024362, 121.541069],
    ['和平高中', 25.019422, 121.547461],
    ['臺灣大學', 25.018475, 121.546572],
    ['立人國中', 25.029546, 121.552003],
    ['大安國中', 25.030324, 121.546330],
    ['建安國小', 25.029043, 121.547022]
];

function mapInit() {
	var markers =[];
	var mapDiv = document.getElementById('myMap');
	var mapOption = {
		center: mapCenter,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(mapDiv, mapOption);

	//Declare an empty info window
	var infowindow = new google.maps.InfoWindow();
	//courtMarker stores the marker, i is the counter to loop through the location array
    var courtMarker, i;

    //convert the original basketball icon to 25x25 px image and center it with anchor.
    var basketballIcon = {
    	url: "../images/mapSource/basketball.ico",
        size: new google.maps.Size(25, 25),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12.5, 12.5),
        scaledSize: new google.maps.Size(25, 25)
    };
    //loop through courtLocation to create marker and info window for each location
    for (i = 0; i < courtLocation.length; i++) {  
      	courtMarker = new google.maps.Marker({
        position: new google.maps.LatLng(courtLocation[i][1], courtLocation[i][2]),
        map: map,
        animation: google.maps.Animation.BOUNCE,
		icon: basketballIcon
    	});

    	google.maps.event.addListener(courtMarker, 'click', function(courtMarker, i) {
        return function() {
          infowindow.setContent(courtLocation[i][0]);
          infowindow.open(map, courtMarker);
          map.setCenter({lat: courtLocation[i][1], lng: courtLocation[i][2]});
        	}
    	}
    	(courtMarker, i));
	}

	//create empty array to handle the values that's suitable for polyline's path property
	var daAnDistrictCoordinates = [];

	//push each latitude and longitude into the empty array
	for(var j = 0; j < daAnDistrict.length; j++){
		daAnDistrictCoordinates.push(new google.maps.LatLng(daAnDistrict[j][0], daAnDistrict[j][1]));
	};
	
	//draws the polyline using the coordinate
	var daAnDistrictPolyline = new google.maps.Polyline({
    path: daAnDistrictCoordinates,
    strokeColor: '#FF0000',
    strokeOpacity: 0.7,
    strokeWeight: 3
    });
	
	daAnDistrictPolyline.setMap(map);

	// place the search box on top of the map.(TOP_LEFT)
  	var input = document.getElementById('pac-input');
  	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  	//connects the search box to google map's search box to allow autocomplete
  	var searchBox = new google.maps.places.SearchBox(input);

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  	google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    
    //clear the markers on the map when new place is entered in searchBox
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(30, 30),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12.5, 12.5),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location,
        animation: google.maps.Animation.DROP
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
  //store the button in a variable for convenience
  var locateButton = document.getElementById('locateBtn');
  //using .addEventListener instead of google.maps.event.addListener because #locateBtn is outside of the map
  locateButton.addEventListener("click", getLocation);
  //put the button on the map with the position of bottom center
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(locateButton);
}
//declare an empty Marker, so we can clear the marker by accessing the setMap property
var userLocationMarker = new google.maps.Marker();
//callback this function when button clicked
var getLocation = function() {
  //clear the map of markers before adding new one
  userLocationMarker.setMap(null);
  userLocationMarker = null;
  //check if browser supports geolocation
  //.getCurrentPosition() takes two functions as parameter: one shows position, one show error
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      //create a new marker at the position of the user, important to not use var, so it can be cleared if we run getLocation again.
      userLocationMarker = new google.maps.Marker({
        map: map,
        position: pos,
        animation: google.maps.Animation.DROP
      });
      //set center of map to user's position and zoom to 14
      map.setCenter(pos);
      map.setZoom(18);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}
//callback function that handles the errors
function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }
  //when there's errorFlag, it displays the error message in a new infowindow
  var options = {
    map: map,
    position: mapCenter,
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}
window.onload = mapInit;
// $('#court').click(mapInit());
