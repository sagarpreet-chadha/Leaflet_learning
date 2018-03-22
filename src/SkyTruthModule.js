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

