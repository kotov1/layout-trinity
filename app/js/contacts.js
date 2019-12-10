// Страница контакты

$(function() {


	$(document).ready(function () {
		createMap( cords.moscow[0], cords.moscow[1] );
	});

	$(".contacts-header .tab").click(function() {
		var index = $(this).index();
		switch (index) {
			case 0:             
				createMap( cords.moscow[0], cords.moscow[1] );
			 	break;
			case 1:             
				createMap( cords.spb[0], cords.spb[1] );
			 	break;
			case 2:             
				createMap( cords.eburg[0], cords.eburg[1] );
			 	break;
		   }
		   
	});



});