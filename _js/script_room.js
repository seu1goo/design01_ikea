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

		$('.series').each(function () {
			var swiper = new Swiper('.swiper-container', {
				autoplay: {
					delay: 6000,
				},
				pagination: {
					el: '.swiper-pagination',
				},
				loop: true
			});
		});
		//series
	});
})(jQuery);
