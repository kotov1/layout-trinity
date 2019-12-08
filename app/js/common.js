$(function() {

	// Мобильное меню
	$(".menu-toggle").click(function() {
		$('body').addClass("menu-expanded");
	});
	$(".top-menu .btn-close").click(function() {
		$('body').removeClass("menu-expanded");
	});
	// аккордион в мобильном меню
	$('.mob-toggle').click(function (e) { 
		if( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).parent().find('.sublist').slideUp(200);
		} else {
			$(this).closest('.top-menu').find('.sublist').slideUp(200);
			$('.mob-toggle').removeClass('active');
			$(this).addClass('active');
			$(this).parent().find('.sublist').slideDown(200);
		}
	});

	
	// всплывающая полоса поиска в хедере
	$(".search__toggle").click(function() {
		$(this).closest('.search').toggleClass("search-expanded");
	});
	$(document).mouseup(function (e){
		var div = $(".header .search__form");
		if ( (!div.is(e.target) && div.has(e.target).length === 0) ) {
			$('.header .search').removeClass("search-expanded");
		}
	});


	// Вызов окна авторизации
	$('.js-open-login').magnificPopup({
		items: {
			src: '#authorization-form',
			type: 'inline'
		},
		callbacks: {
			open: function() {
				$('body').removeClass("menu-expanded");
			}
		}
	});


	// плесхолдеры в полях форм
	$('.input-block .input').on('change', function() {
		var input = $(this);
		if (input.val().length) {
			input.addClass('populated');
		} else {
			input.removeClass('populated');
		}
	});


	// Табы
	$(".tab").click(function() {
		var index = $(this).index();
		$(this).closest('.tabs-wrapper').find(".tab").removeClass("tab--active").eq(index).addClass("tab--active");
		$(this).closest('.tabs-wrapper').find(".tab-item").hide().eq(index).fadeIn("normal");
	});


	// JS accordion
	$('.accordion-btn').click(function() {

		var dropDown = $(this).parent().find('.accordion-content');

		$(this).closest('.accordion').find('.accordion-content').not(dropDown).slideUp(200);

		if ($(this).hasClass('active')) {
			 $(this).removeClass('active');
		} else {
			 $(this).closest('.accordion').find('.accordion-btn.active').removeClass('active');
			 $(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();
   });




});