# Leaflet_learning Library

Please refer to this repository : https://github.com/publiclab/leaflet-environmental-layers for more exciting layers !
The repository in above link was created by me during my Google Summer of Code internship . 

## Shows Near-By Events using SkyTruth API .

### DEMO : 
https://sagarpreet-chadha.github.io/Leaflet_learning/

Refer this for demo of Leaflet-Environmental-Layers library demo : https://publiclab.github.io/leaflet-environmental-layers/example/index.html#14/41.8720/-87.6378

### USE : 

1.)  Use following cdn links in main html file .

     <script src="../node_modules/leaflet/dist/leaflet.js"></script> 
  
     <link href="../node_modules/leaflet/dist/leaflet.css" rel="stylesheet">
  
     <script src="../node_modules/jquery/dist/jquery.min.js"></script>
  
     <script src="../dist/bundle.js"></script>
  
2.)  

     var PLmap = new MainModule() ;

		  var op = {
			lat: '17' ,
			lon: '77' , 
			n: '10' ,
			mapid: 'map1'
		} ; 

      PLmap.SkyTruth(op) ; 
      
 3.) Output : 
 
 ![image](https://sagarpreet-chadha.github.io/leaflet-learning.png "Testing")
 
 
   * Update => Published on npm : https://www.npmjs.com/package/leaflet-learning .
