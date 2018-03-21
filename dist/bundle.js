(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
MainModule = function MainModule() {

	var sky = require('./SkyTruthModule.js') ; // sky is the function , to execute function => IIFE
	this.SkyTruth = sky ;
	

}

// exports.MainModule = MainModule ;
},{"./SkyTruthModule.js":2}],2:[function(require,module,exports){
module.exports = function SkyTruthModule(op) {

	 this.i = op.lat ; 
	return { 
		i: this.i
	} 
}


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWFpbk1vZHVsZS5qcyIsInNyYy9Ta3lUcnV0aE1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIk1haW5Nb2R1bGUgPSBmdW5jdGlvbiBNYWluTW9kdWxlKCkge1xuXG5cdHZhciBza3kgPSByZXF1aXJlKCcuL1NreVRydXRoTW9kdWxlLmpzJykgOyAvLyBza3kgaXMgdGhlIGZ1bmN0aW9uICwgdG8gZXhlY3V0ZSBmdW5jdGlvbiA9PiBJSUZFXG5cdHRoaXMuU2t5VHJ1dGggPSBza3kgO1xuXHRcblxufVxuXG4vLyBleHBvcnRzLk1haW5Nb2R1bGUgPSBNYWluTW9kdWxlIDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFNreVRydXRoTW9kdWxlKG9wKSB7XG5cblx0IHRoaXMuaSA9IG9wLmxhdCA7IFxuXHRyZXR1cm4geyBcblx0XHRpOiB0aGlzLmlcblx0fSBcbn1cblxuIl19
