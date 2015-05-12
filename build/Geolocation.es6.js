'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Geolocation = (function () {
	function Geolocation() {
		_classCallCheck(this, Geolocation);

		this.watchID = null;
		this._currentRouteArray = [];
		this._geo = navigator.geolocation;
		this.successHandler = null;
	}

	_createClass(Geolocation, [{
		key: 'onError',
		value: function onError() {
			alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
		}
	}, {
		key: 'onSuccess',
		value: function onSuccess(position) {
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
	}, {
		key: 'getPosition',
		value: function getPosition(position) {
			console.log(position);
			return position;
		}
	}, {
		key: 'getCurrentPosition',
		value: function getCurrentPosition() {
			this._geo.getCurrentPosition(getPosition);
		}
	}, {
		key: 'startWatching',
		value: function startWatching() {
			var options = { timeout: 30000 };

			this.currentRouteArray = array;
			this.watchID = _geo.watchPosition(onSuccess, onError, options);
		}
	}, {
		key: 'stopWatching',
		value: function stopWatching() {
			this._geo.clearWatch(watchID);
		}
	}, {
		key: 'getCenterPoint',
		value: function getCenterPoint() {
			var maxLatitude = this._currentRouteArray[0].latitude,
			    minLatitude = this._currentRouteArray[0].latitude,
			    maxLongitude = this._currentRouteArray[0].longitude,
			    minLongitude = this._currentRouteArray[0].longitude,
			    centerLongitude = 0,
			    centerLatitude = 0;

			this._currentRouteArray.forEach(function (el) {
				maxLatitude = maxLatitude > el.latitude ? maxLatitude : el.latitude;
				maxLongitude = maxLongitude > el.longitude ? maxLongitude : el.longitude;
				minLatitude = minLatitude < el.latitude ? minLatitude : el.latitude;
				minLongitude = minLongitude < el.longitude ? minLongitude : el.longitude;
			});

			centerLatitude = (maxLatitude + minLatitude) / 2;
			centerLongitude = (maxLongitude + minLongitude) / 2;

			centerPoint = {
				'latitude': centerLatitude,
				'longitude': centerLongitude
			};

			return centerPoint;
		}
	}, {
		key: 'getLatLangArray',
		value: function getLatLangArray() {
			var arr = [];

			this.currentRouteArray.forEach(function (el) {
				arr.push([el.latitude, el.longitude]);
			});

			return arr;
		}
	}, {
		key: 'drawGMapWithRoute',
		value: function drawGMapWithRoute(settings) {
			if (settings) {
				var $element = settings.$element ? settings.$element : document.getElementById('map'),
				    routeArray = settings.routeArray ? settings.routeArray : currentRouteArray;
			} else {
				var settings = {};

				settings.$element = document.getElementById('map');
				settings.routeArray = _currentRouteArray;
			}

			var finalRouteArray = [],
			    centerPoint = this.getCenterPoint();
			mapOptions = {
				zoom: 14,
				center: new google.maps.LatLng(centerPoint.latitude, centerPoint.longitude)
			}, map = new google.maps.Map(settings.$element, mapOptions);

			settings.routeArray.forEach(function (el) {
				finalRouteArray.push(new google.maps.LatLng(el.latitude, el.longitude));

				var myLatlng = new google.maps.LatLng(el.latitude, el.longitude);
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
				strokeOpacity: 1,
				strokeWeight: 2
			});

			finalRoute.setMap(map);
		}
	}, {
		key: 'setRouteArray',
		value: function setRouteArray(cArray) {
			cArray.forEach(function (el) {
				this._currentRouteArray.push({ 'latitude': el[0], 'longitude': el[1] });
			});
		}
	}, {
		key: 'getRouteArray',
		value: function getRouteArray() {
			return this._currentRouteArray;
		}
	}]);

	return Geolocation;
})();