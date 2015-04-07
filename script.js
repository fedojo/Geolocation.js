
var $doc = document,
$elStaticPos = $doc.getElementById("content_static"),
$elDynamicPos = $doc.getElementById("content_dynamic"),
$elArrays = $doc.getElementById("arrays"),
$map = $doc.getElementById("map");



function showPosition(position) {
	$elStaticPos.innerHTML = "Latitude: " + position.coords.latitude + 
	"<br>Longitude: " + position.coords.longitude; 
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		$el.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function addPosiitionToTA(position) {
	$elArrays.innerHTML += "["+position.coords.latitude+","+position.coords.longitude+"],";
}

function startWatching() {
	navigator.geolocation.watchPosition(function(position) {
		addPosiitionToTA(position)
	});
}

function traceRoute() {

}

var ca = [[50.85066748238166,20.632764880700638],[50.85066748238166,20.632764880700638],[50.85065110220962,20.632752158806902],[50.85065060824957,20.6327525812091],[50.8505973934249,20.632683748007754],[50.85069910719321,20.63277371599424],[50.850594543527336,20.632675975250706],[50.85699839533462,20.631815856842813],[50.87639836919518,20.62991008832233],[50.88368964070561,20.628430217831923],[50.88366897247581,20.628466893563704],[50.88365785927583,20.62848659355338],[50.88365230385357,20.6284969499363],[50.88364833195478,20.62851283286978],[50.88374850323087,20.628324958990373],[50.883755333420275,20.62833996758465],[50.883632063426376,20.628416788470304]];


(function() {
	var geo = new Geolocation()
		$doc = document,
		$getLocation = $doc.getElementById("getLocation"),
		$startWatching = $doc.getElementById("startWatching"),
		$stopWatching = $doc.getElementById("stopWatching"),
		$drawMap = $doc.getElementById("drawMap"),
		$ta = $doc.getElementById("textArea");
	
	// geo.setRouteArray(ca);
	// geo.drawGMapWithRoute();

	$startWatching.addEventListener('click', function(e) {
		console.log("Start watching");
		
		geo.startWatching(function() {
			console.log('tick');
		});
	});

	$stopWatching.addEventListener('click', function(e) {
		console.log("Stop watching");
		
		geo.stopWatching();
		geo.drawGMapWithRoute();
	});

	$drawMap.addEventListener('click', function(e) {
		console.log("Draw map");

		console.log(typeof($ta.value));

		var array = $ta.value;
		// console.log(typeof(Array($ta.value)));


		geo.setRouteArray(array);
		console.log(geo.getRouteArray());
		// geo.drawGMapWithRoute();
	})

})();



// [[50.88365707993823,20.628427115290037],[50.884282762111106,20.62888039672735],[50.88443344138541,20.628990042007505],[50.88357467217223,20.628577911538446],[50.883361122320984,20.62801396941821],[50.88335491637986,20.627997349951993],[50.88335982196806,20.62801209423647],[50.88336160875854,20.628017563474646],[50.88374774403215,20.628091497296047],[50.88380825957655,20.628247031815704],[50.883726458915696,20.62837511713341],[50.88313107695605,20.6298154804059],[50.886515832089444,20.632545031875015],[50.88651603604472,20.632546900937506],[50.88651826052542,20.63256013924637],[50.88657076452459,20.632598901813253],[50.8865939407075,20.63210111192792],[50.88659757678822,20.63204449552179],[50.88660533038551,20.632000790112162],[50.8865697077292,20.63192241401834],[50.883176280232966,20.628602486122983],[50.883684636587994,20.628404498735918],[50.88368474356525,20.628404037962113],[50.88369827951815,20.628384363646028]]




