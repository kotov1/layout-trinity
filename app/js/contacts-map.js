var cords = {
	"moscow": [55.793531, 37.392369],
	"spb": [59.93428, 30.335099],
	"eburg": [56.838926, 60.605703],
};

function createMap(lat, lng){
	var opts = {
		center: {
			lat: lat,
			lng: lng,
		},
		zoom: 14,
		styles: [
				{
				"featureType":"landscape",
				"elementType":"all",
				"stylers":[{"color":"#f4f4f3"}]
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [{color: '#dddddd'}]
			  },
			  {
				featureType: 'poi',
				elementType: 'labels.text.fill',
				"stylers":[{"visibility":"off"}]
			  },
			  {
				featureType: 'poi',
				elementType: 'labels.text.stroke',
				"stylers":[{"visibility": 'off'}]
			  },
			  {
				featureType: 'poi',
				elementType: 'labels.icon',
				"stylers":[{"visibility":"simplified"}]
			  },
			{
				"featureType":"landscape",
				"elementType":"labels.text",
				"stylers": [{"visibility":"simplified"}]
			},
			{
				"featureType":"road.highway",
				"elementType":"geometry.fill",
				"stylers":[
				{"color": "#fff5c3"},
			]},
			{
				"featureType":"road.highway",
				"elementType":"geometry.stroke",
				"stylers":[
				{"color": "#f8da8c"},
			]},
			{
				"featureType":"transit",
				"elementType":"all",
				"stylers":[{"visibility":"simplified"}]
			},
			{
				"featureType":"transit",
				"elementType":"labels.text",
				"stylers":[{"visibility":"simplified"}]
			},
			{
				"featureType":"transit",
				"elementType":"labels.text.fill",
				stylers: [{color: '#838a93'}]
			},
			{
				"featureType":"transit",
				elementType: 'labels.icon',
				stylers: [{"saturation":-80}]
			},
			{"featureType":"water",
			"elementType":"all",
			"stylers":[{"color":"#acdeff"}]
		}],
		maxZoom: 20,
		minZoom: 0,
		mapTypeId: 'roadmap',
	};

	
	opts.clickableIcons = true;
	opts.disableDoubleClickZoom = false;
	opts.draggable = true;
	opts.keyboardShortcuts = true;
	opts.scrollwheel = true;
	

	
	var setControlOptions = function(key, enabled, position, style, mapTypeIds){
		opts[key + 'Control'] = enabled;
		opts[key + 'ControlOptions'] = {
			position: google.maps.ControlPosition[position],
			style: google.maps.MapTypeControlStyle[style],
			mapTypeIds: mapTypeIds
		};
	};
	
		
	setControlOptions('fullscreen',false,'DEFAULT','',null);
	
		
	setControlOptions('mapType',false,'DEFAULT','DEFAULT',["roadmap","satellite","terrain"]);
	
		
	setControlOptions('rotate',false,'DEFAULT','',null);
	
		
	setControlOptions('scale',false,'','',null);
	
		
	setControlOptions('streetView',false,'DEFAULT','',null);
	
		
	setControlOptions('zoom',false,'DEFAULT','',null);
	

	var map = new google.maps.Map(document.getElementById('contacts-map'), opts);

	
	(function(){
		var markerOptions = {
			map: map,
			position: {
				lat: lat,
				lng: lng,
			}
		};
		
		markerOptions.icon = {
			url: '../img/contacts-map-marker.png',
			scaledSize: new google.maps.Size(
				59,
				65),
			size: new google.maps.Size(
				59,
				65),
			anchor: new google.maps.Point(
				29,
				65)
		};
		markerOptions.options = {
			optimized: true,
		};
		
		var marker = new google.maps.Marker(markerOptions);


	})();
	

}