(function() {

			document.getElementById('drawMap').addEventListener('click', function() {
				var g = new Geolocation();


			var txt = document.getElementById("coords").value,
				oneDimArr = txt.split(/[\n\r]{1,2}/m),
				twoDimArr = [];

			oneDimArr.forEach(function(el) {

				var el = el.split(',');
				el[0] = Number(el[0]);
				el[1] = Number(el[1]);

				twoDimArr.push(el);
			});

			console.log(twoDimArr);

			
			g.setRouteArray(twoDimArr);
			g.drawGMapWithRoute();
			})
			// window.onload = function() {
				
			// }
			
			// console.log("Działa");
		})();