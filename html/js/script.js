// JavaScript Document
$(document).ready(function () {
	$('.navbar-toggler').on('click', function () {
		$('.navbar-toggler').toggleClass('active');
	});
	$('.navbar-toggler').on('click', function () {
		if ($(this).hasClass('active')) {
			$('html').css('overflow', 'hidden');
		}
		else {
			$('html').css('overflow', '');
		}
	});

	$(".regular").slick({
		dots: true,
		arrows: false,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});
});
var modal = $("#exampleModal");
var btn = $("#btn");
var close = $(".btn-close");
var video = $("#video");
var autoplay = $("#autoplay");
$(document).ready(function () {
	btn.on('click', function (e) {
		modal.show();
		document.getElementById('autoplay').play();
		$('#exampleModal').on("mousewheel touchmove",function (e) {
				e.preventDefault();
			});
	});
	close.on('click', function () {
		$("video").attr("src","");
		$("video").attr("src","./images/business.mp4");
	});
});
