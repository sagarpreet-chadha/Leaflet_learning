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

	var mapid = op.mapid ;
	var lat = op.lat ;  //string 
	var lon = op.lon ;  //string
	var n = op.n ;   //string

 var map = L.map(mapid).setView([17,77], 2);

L.tileLayer('https://a.tiles.mapbox.com/v3/jywarren.map-lmrwb2em/{z}/{x}/{y}.png').addTo(map);

L.marker([17, 77]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
}


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFpbk1vZHVsZS5qcyIsInNyYy9Ta3lUcnV0aE1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiTWFpbk1vZHVsZSA9IGZ1bmN0aW9uIE1haW5Nb2R1bGUoKSB7XG5cblx0dmFyIHNreSA9IHJlcXVpcmUoJy4vU2t5VHJ1dGhNb2R1bGUuanMnKSA7IC8vIHNreSBpcyB0aGUgZnVuY3Rpb24gLCB0byBleGVjdXRlIGZ1bmN0aW9uID0+IElJRkVcblx0dGhpcy5Ta3lUcnV0aCA9IHNreSA7XG5cdFxuXG59XG5cbi8vIGV4cG9ydHMuTWFpbk1vZHVsZSA9IE1haW5Nb2R1bGUgOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gU2t5VHJ1dGhNb2R1bGUob3ApIHtcblxuXHQvKiB0aGlzLmkgPSBvcC5sYXQgOyBcblx0cmV0dXJuIHsgXG5cdFx0aTogdGhpcy5pXG5cdH0gXG4qL1xuXG5cdC8qXG5cdFxuXHRMLnRpbGVMYXllcignLy9hLnRpbGVzLm1hcGJveC5jb20vdjMvanl3YXJyZW4ubWFwLWxtcndiMmVtL3t6fS97eH0ve3l9LnBuZycpLmFkZFRvKG1hcCk7XG5cdG1hcC5vbignbG9hZCcsIG9uTWFwTG9hZCkuc2V0VmlldyhbMTYgLCA3N10sIDIpO1xuXG5cdHZhciBncmVlbkljb24gPSBMLmljb24oe1xuICAgICAgaWNvblVybDogJ2h0dHA6Ly93d3cuY2xrZXIuY29tL2NsaXBhcnRzL1QvRy9iLzcvci9BL3JlZC1kb3Quc3ZnJyxcbiAgICAgIGljb25TaXplOiAgICAgWzMwLCAyMF0sIC8vIHNpemUgb2YgdGhlIGljb25cbiAgICAgIGljb25BbmNob3I6ICAgWzIwICwgMF0sIC8vIHBvaW50IG9mIHRoZSBpY29uIHdoaWNoIHdpbGwgY29ycmVzcG9uZCB0byBtYXJrZXIncyBsb2NhdGlvblxuICAgICAgcG9wdXBBbmNob3I6ICBbLTUsIC01XSAvLyBwb2ludCBmcm9tIHdoaWNoIHRoZSBwb3B1cCBzaG91bGQgb3BlbiByZWxhdGl2ZSB0byB0aGUgaWNvbkFuY2hvclxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25NYXBMb2FkKGUpe30gKi9cblxuXHR2YXIgbWFwaWQgPSBvcC5tYXBpZCA7XG5cdHZhciBsYXQgPSBvcC5sYXQgOyAgLy9zdHJpbmcgXG5cdHZhciBsb24gPSBvcC5sb24gOyAgLy9zdHJpbmdcblx0dmFyIG4gPSBvcC5uIDsgICAvL3N0cmluZ1xuXG4gdmFyIG1hcCA9IEwubWFwKG1hcGlkKS5zZXRWaWV3KFsxNyw3N10sIDIpO1xuXG5MLnRpbGVMYXllcignaHR0cHM6Ly9hLnRpbGVzLm1hcGJveC5jb20vdjMvanl3YXJyZW4ubWFwLWxtcndiMmVtL3t6fS97eH0ve3l9LnBuZycpLmFkZFRvKG1hcCk7XG5cbkwubWFya2VyKFsxNywgNzddKS5hZGRUbyhtYXApXG4gICAgLmJpbmRQb3B1cCgnQSBwcmV0dHkgQ1NTMyBwb3B1cC48YnI+IEVhc2lseSBjdXN0b21pemFibGUuJylcbiAgICAub3BlblBvcHVwKCk7XG59XG5cbiJdfQ==
