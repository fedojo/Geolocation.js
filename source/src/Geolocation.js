var Geolocation = (function(){
	var watchID = null,
	_currentRouteArray = [],
	_geo = navigator.geolocation;

	function Geolocation() {}

	function onError(error) {
		alert('code: '    + error.code    + '\n' +
			'message: ' + error.message + '\n');
	}

	function onSuccess(position) {
		var p = position,
		pc = p.coords;

		curObj = {
			'latitude': pc.latitude, 
			'longitude': pc.longitude, 
			'timestamp': p.timeStamp
		};

		_currentRouteArray.push(curObj);
		// console.log(_currentRouteArray);

		return curObj;
	}

	function getPosition(position) {
		console.log(position);
		return position;
	}

	Geolocation.prototype = {
		successHandler: null,

		getCurrentPosition: function(tester) {
			_geo.getCurrentPosition(getPosition);
		},

		startWatching: function(array) {
			var options = { timeout: 30000 };

			currentRouteArray = array;
			watchID = _geo.watchPosition( onSuccess, onError, options);
		},

		stopWatching: function() {
			_geo.clearWatch(watchID);
		},

		getCenterPoint: function() {
			var maxLatitude = _currentRouteArray[0].latitude,
			minLatitude = _currentRouteArray[0].latitude,
			maxLongitude = _currentRouteArray[0].longitude,
			minLongitude = _currentRouteArray[0].longitude,
			centerLongitude = 0,
			centerLatitude = 0;

			_currentRouteArray.forEach(function(el) {
				maxLatitude = maxLatitude > el.latitude ? maxLatitude : el.latitude;
				maxLongitude = maxLongitude > el.longitude ? maxLongitude : el.longitude;
				minLatitude = minLatitude < el.latitude ? minLatitude : el.latitude;
				minLongitude = minLongitude < el.longitude ? minLongitude : el.longitude;
			});

			centerLatitude = (maxLatitude+minLatitude)/2;
			centerLongitude = (maxLongitude+minLongitude)/2;
			
			centerPoint = {
				'latitude': centerLatitude,
				'longitude' : centerLongitude
			}

			return centerPoint;
		},

		getLatLangArray: function() {
			var arr = [];

			currentRouteArray.forEach(function(el) {
				arr.push([el.latitude, el.longitude]);
			});

			return arr;
		},

		drawGMapWithRoute: function(settings) {
			// GMap.drawMap(settings);

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

			settings.routeArray.forEach(function(el) {
				finalRouteArray.push(new google.maps.LatLng(el.latitude,el.longitude));

				var myLatlng = new google.maps.LatLng(el.latitude,el.longitude);
				var marker = new google.maps.Marker({
					position: myLatlng,
					map: map,
					title: 'Hello World!'
				});
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

		setRouteArray: function(cArray) {
			cArray.forEach(function(el) {
				_currentRouteArray.push({'latitude': el[0], 'longitude': el[1]});
			});
		},

		getRouteArray: function() {
			return _currentRouteArray;
		}
	}

	return Geolocation;
})();