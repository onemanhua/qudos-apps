$(document).ready(function () {
	"use strict";

	/*==============================
	Menu
	==============================*/
	$('.header__menu').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('header__menu--active');
		$('.header__nav').toggleClass('header__nav--active');
	});

});
