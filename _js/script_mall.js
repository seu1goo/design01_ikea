(function ($) {
	$(function () {
		$('.menuBar').on('click', function () {
			$('.menuBar').stop().fadeOut(300);
			$('.menuClose').stop().fadeIn(300);
			$('nav').stop().fadeIn();
		});

		$('.menuClose').on('click', function () {
			$('.menuClose').stop().fadeOut(300);
			$('.menuBar').stop().fadeIn(300);
			$('nav').stop().fadeOut();
		});
		//header

		if ($(window).width() > 640) {
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 4,
				spaceBetween: 10,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar',
				},
			});
		} else {
			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 2,
				spaceBetween: 10,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'progressbar',
				},
			});
		};
		//product
	});

})(jQuery);
