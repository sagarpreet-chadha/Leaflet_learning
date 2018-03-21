# Leaflet_learning Library

## Shows Near-By Events using SkyTruth API .

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
      
 3.) 
 
 ![image](https://sagarpreet-chadha.github.io/leaflet-learning.png "Testing")
