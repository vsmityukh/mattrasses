$(function() {

	$('.rev_slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<i class="fas fa-arrow-left"></i>',
		nextArrow: '<i class="fas fa-arrow-right"></i>',
		adaptiveHeight: true,
		responsive: [
			{
			  breakpoint: 1025,
			  settings: {
					arrows: true,
					slidesToShow: 2
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
					arrows: true,
					slidesToShow: 1
			  }
			}
		]
	});

	$('.products').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<i class="fas fa-arrow-left"></i>',
		nextArrow: '<i class="fas fa-arrow-right"></i>',
		adaptiveHeight: true,
	});




});

//распологаем стрелочки на слайдере
function stendArrows(sliderClass){
	var ulW = $(sliderClass).find('.slick-dots').width();
	var halfW = ulW / 2 + 45;

	var containerW = $('.container').width();

	var countMargin = containerW / 2 - halfW;

	$(sliderClass).find('.fa-arrow-left')
		.css('left', countMargin);
	$(sliderClass).find('.fa-arrow-right')
		.css('right',countMargin);
}


$(document).ready(function(){
	stendArrows('.rev_slider');

	stendArrows('.products');


	$('.steps_row--header').on('click', function(){
		if(!$(this).hasClass('active')){
			$('.steps_wrapper .steps_row--header.active').removeClass('active');
			$('.steps_wrapper .steps_row--info.active').removeClass('active');
		}
		
		$(this).toggleClass('active').next().toggleClass('active');

	})


	$("header .logo_row").on("click","a.feedback", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
})