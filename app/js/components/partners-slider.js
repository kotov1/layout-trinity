// Слайдер лого партнеров

$(function() {

	$('.partners-slider').slick({
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 1000,
		dots: true,
		prevArrow: '<button class="slick-arrow slick-prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.65 113.38"><g><path d="M61.61,51.6,12.05,2A7.17,7.17,0,0,0,2,2a7.17,7.17,0,0,0,0,10L46.68,56.69,2,101.33a7.17,7.17,0,0,0,0,10,7.17,7.17,0,0,0,10,0L61.61,61.61A7.17,7.17,0,0,0,61.61,51.6Z"/></g></svg></button>',
		nextArrow: '<button class="slick-arrow slick-next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.65 113.38"><g><path d="M61.61,51.6,12.05,2A7.17,7.17,0,0,0,2,2a7.17,7.17,0,0,0,0,10L46.68,56.69,2,101.33a7.17,7.17,0,0,0,0,10,7.17,7.17,0,0,0,10,0L61.61,61.61A7.17,7.17,0,0,0,61.61,51.6Z"/></g></svg></button>',
		appendDots: $('.partners-slider-dots'),
		appendArrows: $('.partners-slider-arrows'),
		responsive: [
			{
				breakpoint: 1199,
				settings: {
				arrows: false,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					speed: 500,
				}
			}
		]
	});

});