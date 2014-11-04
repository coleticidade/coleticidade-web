// JavaScript Document

 // When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);     

            function init() {
				
				
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
				
                var mapOptions = {
                   zoom: 15,
					center: new google.maps.LatLng(-23.562487, -46.655057),
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					streetViewControl: false,
					zoomControl:false,
					scrollwheel: false,
                    styles: [ { "featureType": "landscape", "stylers": [ {"saturation": -100},{"lightness": 65},{"visibility": "on"} ]
					}, { "featureType": "poi", "stylers": [{"saturation": -100},
															{"lightness": 51},
															{"visibility": "simplified"}]
					},
					{
						"featureType": "road.highway",
						"stylers": [{"saturation": -100},
							{"visibility": "simplified"}]
					},
					{
						"featureType": "road.arterial",
						"stylers": [{"saturation": -100},
							{"lightness": 30},
							{"visibility": "on"}]
					},
					{
						"featureType": "road.local",
						"stylers": [{"saturation": -100},
									{"lightness": 40},
									{"visibility": "on"}]
					},
					{
						"featureType": "transit",
						"stylers": [{"saturation": -100},
									{"visibility": "simplified"}]
					},
					{
						"featureType": "administrative.province",
						"stylers": [{"visibility": "off"}]},
					{
						"featureType": "water",
						"elementType": "labels",
						"stylers": [{"visibility": "on"},
									{"lightness": -25},
									{"saturation": -100}]
									},
									{"featureType": "water",
									"elementType": "geometry",
									"stylers": [{"hue": "#ffff00"
									},{"lightness": -25},
									{"saturation": -97}]}]
									
			
			};
	
					
			  
			var mapElement = document.getElementById('map');

            var map = new google.maps.Map(mapElement, mapOptions);
			
			
			
			// Icones Customizados
			
			var groupColeticidade = 'assets/image/map-icons/group-icon.png';
			var gardenColeticidade = 'assets/image/map-icons/garden-icon.png';
			 
			 			
			 // variável que indica as coordenadas do marcador
			 
			 var bounds = new google.maps.LatLngBounds();
   			 var infowindow = new google.maps.InfoWindow();
	
			 var LocalizacoesColeticidade = [
			 	[-23.562487, -46.655057, '<div class="col-lg-3 img-width"> <img src="assets/image/popular-at-coleticidade/04.png">  </div>'+
'<div class="col-lg-9">  <h5 class="text-bold">01 PARK AT ALAMEDA LORENA <br>'+
'<span class="text-light">por Erin Bagwell </span> </h5>'+
'<p class="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut. </p>'+
'<a href="#" class="pull-right"> Quero saber mais </a></div>', groupColeticidade],

				[-23.560644, -46.658648, '<div class="col-lg-3 img-width"> <img src="assets/image/popular-at-coleticidade/02.png">  </div>'+
'<div class="col-lg-9">  <h5 class="text-bold">01 PARK AT ALAMEDA LORENA <br>'+
'<span class="text-light">por Erin Bagwell </span> </h5>'+
'<p class="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut. </p>'+
'<a href="#" class="pull-right"> Quero saber mais </a></div>', gardenColeticidade],

				[-23.561372, -46.649614, '<div class="col-lg-3 img-width"> <img src="assets/image/popular-at-coleticidade/01.png">  </div>'+
'<div class="col-lg-9">  <h5 class="text-bold">01 PARK AT ALAMEDA LORENA <br>'+
'<span class="text-light">por Erin Bagwell </span> </h5>'+
'<p class="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut. </p>'+
'<a href="#" class="pull-right"> Quero saber mais </a></div>', gardenColeticidade]
			 ];
			
			for (var i in LocalizacoesColeticidade) {
				var p = LocalizacoesColeticidade[i];
				var latlng =  new google.maps.LatLng(p[0], p[1]);
				bounds.extend(latlng);
				
				 var marker = new google.maps.Marker({
				  position: latlng,
				  map: map,
				  title:p[2],
				  icon: p[3] // define a nova imagem do marcador
			  });
			  
			 	google.maps.event.addListener(marker, 'click', function() {
             	infowindow.setContent(this.title);
             	infowindow.open(map, this);
        		});
			}
			
			map.fitBounds(bounds);
			
					
           
		
}


