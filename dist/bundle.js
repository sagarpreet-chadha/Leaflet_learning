(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
MainModule = function MainModule() {

	var sky = require('./SkyTruthModule.js') ; // sky is the function , to execute function => IIFE
	this.SkyTruth = sky ;
	

}

// exports.MainModule = MainModule ;
},{"./SkyTruthModule.js":2}],2:[function(require,module,exports){
module.exports = function SkyTruthModule(op) {

	/* this.i = op.lat ; 
	return { 
		i: this.i
	} 
*/

	/*
	
	L.tileLayer('//a.tiles.mapbox.com/v3/jywarren.map-lmrwb2em/{z}/{x}/{y}.png').addTo(map);
	map.on('load', onMapLoad).setView([16 , 77], 2);

	var greenIcon = L.icon({
      iconUrl: 'http://www.clker.com/cliparts/T/G/b/7/r/A/red-dot.svg',
      iconSize:     [30, 20], // size of the icon
      iconAnchor:   [20 , 0], // point of the icon which will correspond to marker's location
      popupAnchor:  [-5, -5] // point from which the popup should open relative to the iconAnchor
    });

    function onMapLoad(e){} */
    var greenIcon = L.icon({
      iconUrl: 'http://www.clker.com/cliparts/T/G/b/7/r/A/red-dot.svg',
      iconSize:     [30, 20], // size of the icon
      iconAnchor:   [20 , 0], // point of the icon which will correspond to marker's location
      popupAnchor:  [-5, -5] // point from which the popup should open relative to the iconAnchor
    });


	var mapid = op.mapid ;
	var lat = op.lat ;  //string 
	var lon = op.lon ;  //string
	var n = op.n ;   //string

 var map = L.map(mapid).setView([parseInt(lat), parseInt(lon)], 2);

L.tileLayer('https://a.tiles.mapbox.com/v3/jywarren.map-lmrwb2em/{z}/{x}/{y}.png').on('load', onMapLoad).addTo(map);

L.marker([parseInt(lat), parseInt(lon)]).addTo(map)
    .bindPopup('My Location')
    .openPopup();


	function onMapLoad(e){
		var x = (parseInt(lat)+100).toString();
		var y = (parseInt(lon)-100).toString();
		var z = (parseInt(lat)-100).toString();
		var w = (parseInt(lon)+100).toString();
     	$.getJSON("https://alerts.skytruth.org/json?&d=30&channel=local&n=10&l=" + x + "," +y + "," + z + "," + w , function(data){
 			if (!!data.feed){
		 	    for (i = 0 ; i < data.feed.length ; i++) { 
		 		  var lt = data.feed[i].lat ;
		          var lng = data.feed[i].lng;
		          var title = data.feed[i].title ;
		          var url = data.feed[i].link ;
		         
		          if (!isNaN(parseInt(lat)) && !isNaN(parseInt(lng)) ){
		          	L.marker([lt , lng] , {icon: greenIcon}).addTo(map).bindPopup("<a href=" +  url + ">" + title + "</a>") ;
		          }
		 				
		 		}
			}
 		});
	}

	return {
		map_object: map 
	}

}


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFpbk1vZHVsZS5qcyIsInNyYy9Ta3lUcnV0aE1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIk1haW5Nb2R1bGUgPSBmdW5jdGlvbiBNYWluTW9kdWxlKCkge1xuXG5cdHZhciBza3kgPSByZXF1aXJlKCcuL1NreVRydXRoTW9kdWxlLmpzJykgOyAvLyBza3kgaXMgdGhlIGZ1bmN0aW9uICwgdG8gZXhlY3V0ZSBmdW5jdGlvbiA9PiBJSUZFXG5cdHRoaXMuU2t5VHJ1dGggPSBza3kgO1xuXHRcblxufVxuXG4vLyBleHBvcnRzLk1haW5Nb2R1bGUgPSBNYWluTW9kdWxlIDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNreVRydXRoTW9kdWxlKG9wKSB7XG5cblx0LyogdGhpcy5pID0gb3AubGF0IDsgXG5cdHJldHVybiB7IFxuXHRcdGk6IHRoaXMuaVxuXHR9IFxuKi9cblxuXHQvKlxuXHRcblx0TC50aWxlTGF5ZXIoJy8vYS50aWxlcy5tYXBib3guY29tL3YzL2p5d2FycmVuLm1hcC1sbXJ3YjJlbS97en0ve3h9L3t5fS5wbmcnKS5hZGRUbyhtYXApO1xuXHRtYXAub24oJ2xvYWQnLCBvbk1hcExvYWQpLnNldFZpZXcoWzE2ICwgNzddLCAyKTtcblxuXHR2YXIgZ3JlZW5JY29uID0gTC5pY29uKHtcbiAgICAgIGljb25Vcmw6ICdodHRwOi8vd3d3LmNsa2VyLmNvbS9jbGlwYXJ0cy9UL0cvYi83L3IvQS9yZWQtZG90LnN2ZycsXG4gICAgICBpY29uU2l6ZTogICAgIFszMCwgMjBdLCAvLyBzaXplIG9mIHRoZSBpY29uXG4gICAgICBpY29uQW5jaG9yOiAgIFsyMCAsIDBdLCAvLyBwb2ludCBvZiB0aGUgaWNvbiB3aGljaCB3aWxsIGNvcnJlc3BvbmQgdG8gbWFya2VyJ3MgbG9jYXRpb25cbiAgICAgIHBvcHVwQW5jaG9yOiAgWy01LCAtNV0gLy8gcG9pbnQgZnJvbSB3aGljaCB0aGUgcG9wdXAgc2hvdWxkIG9wZW4gcmVsYXRpdmUgdG8gdGhlIGljb25BbmNob3JcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9uTWFwTG9hZChlKXt9ICovXG4gICAgdmFyIGdyZWVuSWNvbiA9IEwuaWNvbih7XG4gICAgICBpY29uVXJsOiAnaHR0cDovL3d3dy5jbGtlci5jb20vY2xpcGFydHMvVC9HL2IvNy9yL0EvcmVkLWRvdC5zdmcnLFxuICAgICAgaWNvblNpemU6ICAgICBbMzAsIDIwXSwgLy8gc2l6ZSBvZiB0aGUgaWNvblxuICAgICAgaWNvbkFuY2hvcjogICBbMjAgLCAwXSwgLy8gcG9pbnQgb2YgdGhlIGljb24gd2hpY2ggd2lsbCBjb3JyZXNwb25kIHRvIG1hcmtlcidzIGxvY2F0aW9uXG4gICAgICBwb3B1cEFuY2hvcjogIFstNSwgLTVdIC8vIHBvaW50IGZyb20gd2hpY2ggdGhlIHBvcHVwIHNob3VsZCBvcGVuIHJlbGF0aXZlIHRvIHRoZSBpY29uQW5jaG9yXG4gICAgfSk7XG5cblxuXHR2YXIgbWFwaWQgPSBvcC5tYXBpZCA7XG5cdHZhciBsYXQgPSBvcC5sYXQgOyAgLy9zdHJpbmcgXG5cdHZhciBsb24gPSBvcC5sb24gOyAgLy9zdHJpbmdcblx0dmFyIG4gPSBvcC5uIDsgICAvL3N0cmluZ1xuXG4gdmFyIG1hcCA9IEwubWFwKG1hcGlkKS5zZXRWaWV3KFtwYXJzZUludChsYXQpLCBwYXJzZUludChsb24pXSwgMik7XG5cbkwudGlsZUxheWVyKCdodHRwczovL2EudGlsZXMubWFwYm94LmNvbS92My9qeXdhcnJlbi5tYXAtbG1yd2IyZW0ve3p9L3t4fS97eX0ucG5nJykub24oJ2xvYWQnLCBvbk1hcExvYWQpLmFkZFRvKG1hcCk7XG5cbkwubWFya2VyKFtwYXJzZUludChsYXQpLCBwYXJzZUludChsb24pXSkuYWRkVG8obWFwKVxuICAgIC5iaW5kUG9wdXAoJ015IExvY2F0aW9uJylcbiAgICAub3BlblBvcHVwKCk7XG5cblxuXHRmdW5jdGlvbiBvbk1hcExvYWQoZSl7XG5cdFx0dmFyIHggPSAocGFyc2VJbnQobGF0KSsxMDApLnRvU3RyaW5nKCk7XG5cdFx0dmFyIHkgPSAocGFyc2VJbnQobG9uKS0xMDApLnRvU3RyaW5nKCk7XG5cdFx0dmFyIHogPSAocGFyc2VJbnQobGF0KS0xMDApLnRvU3RyaW5nKCk7XG5cdFx0dmFyIHcgPSAocGFyc2VJbnQobG9uKSsxMDApLnRvU3RyaW5nKCk7XG4gICAgIFx0JC5nZXRKU09OKFwiaHR0cHM6Ly9hbGVydHMuc2t5dHJ1dGgub3JnL2pzb24/JmQ9MzAmY2hhbm5lbD1sb2NhbCZuPTEwJmw9XCIgKyB4ICsgXCIsXCIgK3kgKyBcIixcIiArIHogKyBcIixcIiArIHcgLCBmdW5jdGlvbihkYXRhKXtcbiBcdFx0XHRpZiAoISFkYXRhLmZlZWQpe1xuXHRcdCBcdCAgICBmb3IgKGkgPSAwIDsgaSA8IGRhdGEuZmVlZC5sZW5ndGggOyBpKyspIHsgXG5cdFx0IFx0XHQgIHZhciBsdCA9IGRhdGEuZmVlZFtpXS5sYXQgO1xuXHRcdCAgICAgICAgICB2YXIgbG5nID0gZGF0YS5mZWVkW2ldLmxuZztcblx0XHQgICAgICAgICAgdmFyIHRpdGxlID0gZGF0YS5mZWVkW2ldLnRpdGxlIDtcblx0XHQgICAgICAgICAgdmFyIHVybCA9IGRhdGEuZmVlZFtpXS5saW5rIDtcblx0XHQgICAgICAgICBcblx0XHQgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChsYXQpKSAmJiAhaXNOYU4ocGFyc2VJbnQobG5nKSkgKXtcblx0XHQgICAgICAgICAgXHRMLm1hcmtlcihbbHQgLCBsbmddICwge2ljb246IGdyZWVuSWNvbn0pLmFkZFRvKG1hcCkuYmluZFBvcHVwKFwiPGEgaHJlZj1cIiArICB1cmwgKyBcIj5cIiArIHRpdGxlICsgXCI8L2E+XCIpIDtcblx0XHQgICAgICAgICAgfVxuXHRcdCBcdFx0XHRcdFxuXHRcdCBcdFx0fVxuXHRcdFx0fVxuIFx0XHR9KTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bWFwX29iamVjdDogbWFwIFxuXHR9XG5cbn1cblxuIl19
