// слайдеры на главной странице, не использующиеся на внутренних
$(function() {
	
	
	// слайдер на первом экране главной страницы
	$('.hero-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		fade: true,
		prevArrow: '<button class="slick-arrow slick-prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.65 113.38"><g><path d="M61.61,51.6,12.05,2A7.17,7.17,0,0,0,2,2a7.17,7.17,0,0,0,0,10L46.68,56.69,2,101.33a7.17,7.17,0,0,0,0,10,7.17,7.17,0,0,0,10,0L61.61,61.61A7.17,7.17,0,0,0,61.61,51.6Z"/></g></svg></button>',
		nextArrow: '<button class="slick-arrow slick-next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.65 113.38"><g><path d="M61.61,51.6,12.05,2A7.17,7.17,0,0,0,2,2a7.17,7.17,0,0,0,0,10L46.68,56.69,2,101.33a7.17,7.17,0,0,0,0,10,7.17,7.17,0,0,0,10,0L61.61,61.61A7.17,7.17,0,0,0,61.61,51.6Z"/></g></svg></button>',
		appendArrows: $('.hero-slider-arrows'),
		responsive: [
			{
			  breakpoint: 1199,
			  settings: {
				arrows: false,
				dots: true,
			  }
			}
		]
	});


	$('.blocks-events-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		fade: true,
		prevArrow: '<button class="slick-arrow slick-prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.65 113.38"><g><path d="M61.61,51.6,12.05,2A7.17,7.17,0,0,0,2,2a7.17,7.17,0,0,0,0,10L46.68,56.69,2,101.33a7.17,7.17,0,0,0,0,10,7.17,7.17,0,0,0,10,0L61.61,61.61A7.17,7.17,0,0,0,61.61,51.6Z"/></g></svg></button>',
		nextArrow: '<button class="slick-arrow slick-next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.65 113.38"><g><path d="M61.61,51.6,12.05,2A7.17,7.17,0,0,0,2,2a7.17,7.17,0,0,0,0,10L46.68,56.69,2,101.33a7.17,7.17,0,0,0,0,10,7.17,7.17,0,0,0,10,0L61.61,61.61A7.17,7.17,0,0,0,61.61,51.6Z"/></g></svg></button>',
		appendArrows: $('.blocks-events-arrows')
	});


	$('.products-slider').slick({
		slidesToShow: 4,
		speed: 800,
		prevArrow: '<button class="slick-arrow slick-prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.65 113.38"><g><path d="M61.61,51.6,12.05,2A7.17,7.17,0,0,0,2,2a7.17,7.17,0,0,0,0,10L46.68,56.69,2,101.33a7.17,7.17,0,0,0,0,10,7.17,7.17,0,0,0,10,0L61.61,61.61A7.17,7.17,0,0,0,61.61,51.6Z"/></g></svg></button>',
		nextArrow: '<button class="slick-arrow slick-next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.65 113.38"><g><path d="M61.61,51.6,12.05,2A7.17,7.17,0,0,0,2,2a7.17,7.17,0,0,0,0,10L46.68,56.69,2,101.33a7.17,7.17,0,0,0,0,10,7.17,7.17,0,0,0,10,0L61.61,61.61A7.17,7.17,0,0,0,61.61,51.6Z"/></g></svg></button>',
		appendArrows: $('.products-slider-arrows'),
		responsive: [
			{
				breakpoint: 1199,
				settings: {
				  slidesToShow: 3,
				  centerMode: true,
				  arrows: false,
				  dots: true,
				  speed: 500,
				}
			},
			{
				breakpoint: 991,
				settings: {
				  slidesToShow: 2,
				  centerMode: true,
				  arrows: false,
				  dots: true,
				  speed: 500,
				}
			},
			{
				breakpoint: 575,
				settings: {
				  slidesToShow: 1,
				  arrows: false,
				  dots: true,
				  speed: 500,
				}
			}
		]
	});





	$('.config-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		fade: true,
		dots: true,
		prevArrow: '<button class="slick-arrow slick-prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.65 113.38"><g><path d="M61.61,51.6,12.05,2A7.17,7.17,0,0,0,2,2a7.17,7.17,0,0,0,0,10L46.68,56.69,2,101.33a7.17,7.17,0,0,0,0,10,7.17,7.17,0,0,0,10,0L61.61,61.61A7.17,7.17,0,0,0,61.61,51.6Z"/></g></svg></button>',
		nextArrow: '<button class="slick-arrow slick-next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.65 113.38"><g><path d="M61.61,51.6,12.05,2A7.17,7.17,0,0,0,2,2a7.17,7.17,0,0,0,0,10L46.68,56.69,2,101.33a7.17,7.17,0,0,0,0,10,7.17,7.17,0,0,0,10,0L61.61,61.61A7.17,7.17,0,0,0,61.61,51.6Z"/></g></svg></button>',
		appendDots: $('.config-slider-dots'),
		appendArrows: $('.config-slider-arrows'),
		responsive: [
			{
				breakpoint: 1199,
				settings: {
				  arrows: false,
				}
			}
		]
	});





	
});