
// var $doc = document,
// $elStaticPos = $doc.getElementById("content_static"),
// $elDynamicPos = $doc.getElementById("content_dynamic"),
// $elArrays = $doc.getElementById("arrays"),
// $map = $doc.getElementById("map");



// function showPosition(position) {
// 	$elStaticPos.innerHTML = "Latitude: " + position.coords.latitude + 
// 	"<br>Longitude: " + position.coords.longitude; 
// }

// function getLocation() {
// 	if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition(showPosition);
// 	} else {
// 		$el.innerHTML = "Geolocation is not supported by this browser.";
// 	}
// }

// function addPosiitionToTA(position) {
// 	$elArrays.innerHTML += "["+position.coords.latitude+","+position.coords.longitude+"],";
// }

// function startWatching() {
// 	navigator.geolocation.watchPosition(function(position) {
// 		addPosiitionToTA(position)
// 	});
// }

// function traceRoute() {

// }

// var ca = [[50.85066748238166,20.632764880700638],[50.85066748238166,20.632764880700638],[50.85065110220962,20.632752158806902],[50.85065060824957,20.6327525812091],[50.8505973934249,20.632683748007754],[50.85069910719321,20.63277371599424],[50.850594543527336,20.632675975250706],[50.85699839533462,20.631815856842813],[50.87639836919518,20.62991008832233],[50.88368964070561,20.628430217831923],[50.88366897247581,20.628466893563704],[50.88365785927583,20.62848659355338],[50.88365230385357,20.6284969499363],[50.88364833195478,20.62851283286978],[50.88374850323087,20.628324958990373],[50.883755333420275,20.62833996758465],[50.883632063426376,20.628416788470304]];


(function() {
	var geo = new Geolocation()
		$doc = document,
		$getLocation = $doc.getElementById("getLocation"),
		$startWatching = $doc.getElementById("startWatching"),
		$stopWatching = $doc.getElementById("stopWatching"),
		$drawMap = $doc.getElementById("drawMap"),
		$ta = $doc.getElementById("textArea");

	$getLocation.addEventListener('click', function() {
		geo.getCurrentPosition();
	});

	$startWatching.addEventListener('click', function(e) {
		console.log("Start watching");
		
		geo.startWatching(function() {
			console.log('tick');
		});
	});

	$stopWatching.addEventListener('click', function(e) {
		console.log("Stop watching");
		
		$ta.value = JSON.parse(geo.getRouteArray());
		console.log(geo.getRouteArray());
		geo.stopWatching();
		geo.drawGMapWithRoute();
	});
})();


