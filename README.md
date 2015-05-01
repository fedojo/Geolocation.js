# geolocation
JS Geolocation class with Google Maps route drawing. 


Example of code: http://dev.fedojo.com/geolocation.js/


## Included examples
source/index.html - you can start geolocation watch process stop it and draw map of your route

source/traceroute.html - you can copy your array of gps positions then click button and check you route on Google map

##Public methods
<table>
	<tr>
		<td>getCurrentPosition</td>
		<td>returns current position (lattigute,longitude)</td>
	</tr>
	<tr>
		<td>startWatching</td>
		<td>start watching position</td>
	</tr>
	<tr>
		<td>stopWatching</td>
		<td>stop watching position</td>
	</tr>
	<tr>
		<td>getCenterPoint</td>
		<td>returns center point of route (for drawing map)</td>
	</tr>
	<tr>
		<td>getLatLangArray</td>
		<td>returns Lattitude longitude array</td>
	</tr>
	<tr>
		<td>drawGMapWithRoute</td>
		<td>draws Google Map from setted route array or watched route array</td>
	</tr>
	<tr>
		<td>setRouteArray</td>
		<td>set route array [longitude, latitude]</td>
	</tr>
	<tr>
		<td>getRouteArray</td>
		<td>returns route array</td>
	</tr>
</table>


### Changelog

0.0.4 (1.5.2015)
- added source/traceroute.html to trace route on google maps from added array to textarea