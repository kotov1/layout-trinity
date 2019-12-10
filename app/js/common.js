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
		$(this).parent().find(".tab").removeClass("tab--active").eq(index).addClass("tab--active");
		$(this).closest('.tabs-wrapper').find(".tab-item").hide();
		$(this).closest( '.tabs-wrapper').find(".tab-item:nth-child(" + (index+1) +")" ).fadeIn("normal");
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


   // развернуть ещё
   $('.readmore-btn').click(function () { 
	   $(this).closest('.readmore').find('.readmore-hidden').slideToggle(200);
	   $(this).toggleClass('readmore-btn--active');
   });



   $(".ui-select__trigger").on("click", function(event) {
		$('html').one('click',function() {
			$(".ui-select").removeClass("opened");
		});
		if( $(this).closest(".ui-select").hasClass('opened') ){
			$(this).closest(".ui-select").removeClass("opened");
		} else {
			$(".ui-select").removeClass("opened");
			$(this).closest(".ui-select").addClass("opened");
		}
		event.stopPropagation();
	});
	$(".ui-select__option").on("click", function() {
		$(this).closest(".ui-select").find("select").val($(this).data("value"));
		$(this).closest(".ui-select__options").find(".ui-select__option").removeClass("active");
		$(this).addClass("active");
		$(this).closest(".ui-select").removeClass("opened");
		$(this).closest(".ui-select").find(".ui-select__trigger").text($(this).text());
	});





});