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

}


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFpbk1vZHVsZS5qcyIsInNyYy9Ta3lUcnV0aE1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJNYWluTW9kdWxlID0gZnVuY3Rpb24gTWFpbk1vZHVsZSgpIHtcblxuXHR2YXIgc2t5ID0gcmVxdWlyZSgnLi9Ta3lUcnV0aE1vZHVsZS5qcycpIDsgLy8gc2t5IGlzIHRoZSBmdW5jdGlvbiAsIHRvIGV4ZWN1dGUgZnVuY3Rpb24gPT4gSUlGRVxuXHR0aGlzLlNreVRydXRoID0gc2t5IDtcblx0XG5cbn1cblxuLy8gZXhwb3J0cy5NYWluTW9kdWxlID0gTWFpbk1vZHVsZSA7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBTa3lUcnV0aE1vZHVsZShvcCkge1xuXG5cdC8qIHRoaXMuaSA9IG9wLmxhdCA7IFxuXHRyZXR1cm4geyBcblx0XHRpOiB0aGlzLmlcblx0fSBcbiovXG5cblx0Lypcblx0XG5cdEwudGlsZUxheWVyKCcvL2EudGlsZXMubWFwYm94LmNvbS92My9qeXdhcnJlbi5tYXAtbG1yd2IyZW0ve3p9L3t4fS97eX0ucG5nJykuYWRkVG8obWFwKTtcblx0bWFwLm9uKCdsb2FkJywgb25NYXBMb2FkKS5zZXRWaWV3KFsxNiAsIDc3XSwgMik7XG5cblx0dmFyIGdyZWVuSWNvbiA9IEwuaWNvbih7XG4gICAgICBpY29uVXJsOiAnaHR0cDovL3d3dy5jbGtlci5jb20vY2xpcGFydHMvVC9HL2IvNy9yL0EvcmVkLWRvdC5zdmcnLFxuICAgICAgaWNvblNpemU6ICAgICBbMzAsIDIwXSwgLy8gc2l6ZSBvZiB0aGUgaWNvblxuICAgICAgaWNvbkFuY2hvcjogICBbMjAgLCAwXSwgLy8gcG9pbnQgb2YgdGhlIGljb24gd2hpY2ggd2lsbCBjb3JyZXNwb25kIHRvIG1hcmtlcidzIGxvY2F0aW9uXG4gICAgICBwb3B1cEFuY2hvcjogIFstNSwgLTVdIC8vIHBvaW50IGZyb20gd2hpY2ggdGhlIHBvcHVwIHNob3VsZCBvcGVuIHJlbGF0aXZlIHRvIHRoZSBpY29uQW5jaG9yXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBvbk1hcExvYWQoZSl7fSAqL1xuICAgIHZhciBncmVlbkljb24gPSBMLmljb24oe1xuICAgICAgaWNvblVybDogJ2h0dHA6Ly93d3cuY2xrZXIuY29tL2NsaXBhcnRzL1QvRy9iLzcvci9BL3JlZC1kb3Quc3ZnJyxcbiAgICAgIGljb25TaXplOiAgICAgWzMwLCAyMF0sIC8vIHNpemUgb2YgdGhlIGljb25cbiAgICAgIGljb25BbmNob3I6ICAgWzIwICwgMF0sIC8vIHBvaW50IG9mIHRoZSBpY29uIHdoaWNoIHdpbGwgY29ycmVzcG9uZCB0byBtYXJrZXIncyBsb2NhdGlvblxuICAgICAgcG9wdXBBbmNob3I6ICBbLTUsIC01XSAvLyBwb2ludCBmcm9tIHdoaWNoIHRoZSBwb3B1cCBzaG91bGQgb3BlbiByZWxhdGl2ZSB0byB0aGUgaWNvbkFuY2hvclxuICAgIH0pO1xuXG5cblx0dmFyIG1hcGlkID0gb3AubWFwaWQgO1xuXHR2YXIgbGF0ID0gb3AubGF0IDsgIC8vc3RyaW5nIFxuXHR2YXIgbG9uID0gb3AubG9uIDsgIC8vc3RyaW5nXG5cdHZhciBuID0gb3AubiA7ICAgLy9zdHJpbmdcblxuIHZhciBtYXAgPSBMLm1hcChtYXBpZCkuc2V0VmlldyhbcGFyc2VJbnQobGF0KSwgcGFyc2VJbnQobG9uKV0sIDIpO1xuXG5MLnRpbGVMYXllcignaHR0cHM6Ly9hLnRpbGVzLm1hcGJveC5jb20vdjMvanl3YXJyZW4ubWFwLWxtcndiMmVtL3t6fS97eH0ve3l9LnBuZycpLm9uKCdsb2FkJywgb25NYXBMb2FkKS5hZGRUbyhtYXApO1xuXG5MLm1hcmtlcihbcGFyc2VJbnQobGF0KSwgcGFyc2VJbnQobG9uKV0pLmFkZFRvKG1hcClcbiAgICAuYmluZFBvcHVwKCdNeSBMb2NhdGlvbicpXG4gICAgLm9wZW5Qb3B1cCgpO1xuXG5cblx0ZnVuY3Rpb24gb25NYXBMb2FkKGUpe1xuXHRcdHZhciB4ID0gKHBhcnNlSW50KGxhdCkrMTAwKS50b1N0cmluZygpO1xuXHRcdHZhciB5ID0gKHBhcnNlSW50KGxvbiktMTAwKS50b1N0cmluZygpO1xuXHRcdHZhciB6ID0gKHBhcnNlSW50KGxhdCktMTAwKS50b1N0cmluZygpO1xuXHRcdHZhciB3ID0gKHBhcnNlSW50KGxvbikrMTAwKS50b1N0cmluZygpO1xuICAgICBcdCQuZ2V0SlNPTihcImh0dHBzOi8vYWxlcnRzLnNreXRydXRoLm9yZy9qc29uPyZkPTMwJmNoYW5uZWw9bG9jYWwmbj0xMCZsPVwiICsgeCArIFwiLFwiICt5ICsgXCIsXCIgKyB6ICsgXCIsXCIgKyB3ICwgZnVuY3Rpb24oZGF0YSl7XG4gXHRcdFx0aWYgKCEhZGF0YS5mZWVkKXtcblx0XHQgXHQgICAgZm9yIChpID0gMCA7IGkgPCBkYXRhLmZlZWQubGVuZ3RoIDsgaSsrKSB7IFxuXHRcdCBcdFx0ICB2YXIgbHQgPSBkYXRhLmZlZWRbaV0ubGF0IDtcblx0XHQgICAgICAgICAgdmFyIGxuZyA9IGRhdGEuZmVlZFtpXS5sbmc7XG5cdFx0ICAgICAgICAgIHZhciB0aXRsZSA9IGRhdGEuZmVlZFtpXS50aXRsZSA7XG5cdFx0ICAgICAgICAgIHZhciB1cmwgPSBkYXRhLmZlZWRbaV0ubGluayA7XG5cdFx0ICAgICAgICAgXG5cdFx0ICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQobGF0KSkgJiYgIWlzTmFOKHBhcnNlSW50KGxuZykpICl7XG5cdFx0ICAgICAgICAgIFx0TC5tYXJrZXIoW2x0ICwgbG5nXSAsIHtpY29uOiBncmVlbkljb259KS5hZGRUbyhtYXApLmJpbmRQb3B1cChcIjxhIGhyZWY9XCIgKyAgdXJsICsgXCI+XCIgKyB0aXRsZSArIFwiPC9hPlwiKSA7XG5cdFx0ICAgICAgICAgIH1cblx0XHQgXHRcdFx0XHRcblx0XHQgXHRcdH1cblx0XHRcdH1cbiBcdFx0fSk7XG5cdH1cblxufVxuXG4iXX0=
