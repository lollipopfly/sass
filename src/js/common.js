$(document).ready(function() {

/**
***************************************************************
* =PAGE LOAD
***************************************************************
**/

	// Находим ширину экрана
	// var screenWidth = $(document).width() + scrollWidth();

	// SLICK CAROUSEL
	// $('.slider').slick({
	// 	dots: true,
	// });


/**
***************************************************************
* =USABILLITY
***************************************************************
**/

// Burger button
$('.burger').on('click', function() {
	$this = $(this);
	$this.toggleClass('active');
	$('nav').slideToggle(500);
});

/**
***************************************************************
* =FUNCTIONS
***************************************************************
**/

// Функция определения плосы прокрутки
// function scrollWidth() {
// 	var div = $('<div>').css({
// 	    position: "absolute",
// 	    top: "0px",
// 	    left: "0px",
// 	    width: "100px",
// 	    height: "100px",
// 	    visibility: "hidden",
// 	    overflow: "scroll"
// 	});

// 	$('body').eq(0).append(div);

// 	var width = div.get(0).offsetWidth - div.get(0).clientWidth;

// 	div.remove();

// 	return width;
// }

});