require.config({
	baseUrl: '/assets/',

	paths: {
		// 'jquery': 'vendor/jquery/dist/jquery.min',
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
	},
})

require(['jquery'], function ($) {
	$(document).ready(function () {
		console.log('requirejs ready to use')
		$('nav a.icon').click(function() {
			$('nav').toggleClass('responsive');
		})
		var stickyTop = $('nav').offset().top;
		$(window).scroll( function() {
			if ($(window).scrollTop() >= stickyTop) {
				$('nav').addClass('sticky');
			} else {
				$('nav').removeClass('sticky');
			}
		})
	})
})
