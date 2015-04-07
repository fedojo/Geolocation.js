
function initialize() {

	var mapOptions = {
		zoom: 18,
		center: new google.maps.LatLng(route[0][0],route[0][1]),
	};

	var map = new google.maps.Map(document.getElementById("map"),
		mapOptions);

	var flightPlanCoordinates = [
   // set of (lat,long) values
   // new google.maps.LatLng(route[0]),
   // new google.maps.LatLng(13.035312,77.56885567),
   // new google.maps.LatLng(13.03541774,77.56790266),
   // new google.maps.LatLng(13.0347358,77.56854116),
   // new google.maps.LatLng(13.0350667,77.56892307),
   // new google.maps.LatLng(13.03534067,77.56951356),
   // new google.maps.LatLng(13.03557602,77.56923249),
   // new google.maps.LatLng(13.03559478,77.56825478),
   // new google.maps.LatLng(13.03558727,77.5672599),
   // new google.maps.LatLng(13.03542425,77.5681003),
   // new google.maps.LatLng(13.03530649,77.5689072)
   ];

   route.forEach(function(el) {
      console.log(el);
      flightPlanCoordinates.push(new google.maps.LatLng(el[0],el[1]));
      

   });
   console.log(route[0][0]);


   var flightPath = new google.maps.Polyline({
   	path: flightPlanCoordinates,
   	geodesic: true,
   	strokeColor: '#FF0000',
   	strokeOpacity: 1.0,
   	strokeWeight: 2
   });

   flightPath.setMap(map);




}
google.maps.event.addDomListener(window, 'load', initialize);