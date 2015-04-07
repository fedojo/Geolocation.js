var GMap = {
	drawMap: function(settings) {
		if (settings) {
			var 
			$element = settings.$element ? settings.$element : document.getElementById('map'),
			routeArray = settings.routeArray ? settings.routeArray : currentRouteArray;
		} else {
			var settings = {};

			settings.$element = document.getElementById("map");
			settings.routeArray = _currentRouteArray;
		}

		var
		finalRouteArray = [],
		centerPoint = this.getCenterPoint();
		mapOptions = {
			zoom: 14,
			center: new google.maps.LatLng(centerPoint.latitude, centerPoint.longitude)
		},
		map = new google.maps.Map(settings.$element, mapOptions);


	},

	drawRoute: function(object) {
		settings.routeArray.forEach(function(el) {
			finalRouteArray.push(new google.maps.LatLng(el.latitude,el.longitude));

			var myLatlng = new google.maps.LatLng(el.latitude,el.longitude);
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title: 'Hello World!'
			});
				// console.log(currentRouteArray);
			});

		var finalRoute = new google.maps.Polyline({
			path: finalRouteArray,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
		});

		finalRoute.setMap(map);
	},

	drawPins: function() {}
}