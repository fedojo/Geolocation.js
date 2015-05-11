class Geolocation {
	constructor() {}

	
	onError() {
		alert('code: '    + error.code    + '\n' +
			'message: ' + error.message + '\n');
	}

	onSuccess(position) {
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

	getPosition(position) {
		console.log(position);
		return position;
	}

	getCurrentPosition() {

	}

	startWatching() {}
}