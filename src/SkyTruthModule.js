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

