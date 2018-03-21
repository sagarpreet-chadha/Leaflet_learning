MainModule = function MainModule() {

	var sky = require('./SkyTruthModule.js') ; // sky is the function , to execute function => IIFE
	this.x = sky().i ;

}

// exports.MainModule = MainModule ;