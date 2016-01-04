function $el(element) {
	return document.querySelectorAll(element);
}

function fadeIn (x) {
	var element = document.getElementById(x);
	element.style.opacity = 0;
	setTimeout(function () {
		element.style.opacity = 1;
	}, 100);
}

function fadeOut () {
	var wrap = document.getElementById('wrap');
	wrap.style.opacity = 0;
}

function redirect (x) {
	var wrap = document.getElementById('wrap');
	wrap.style.opacity = 0;
	setTimeout(function () {
		window.location.href = x;
	}, 500);
}

function getfocus (x) {
	var	element = document.getElementById(x);
}

function scroll (x) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $(x).offset().top
	}, 1000);
}

$(window).load(function () {
	var w = $('.skill').css('width');
	$('.skill').height(w);
	$('.skillTitle').css('line-height', w);
})

$(window).resize(function () {
	var w = $('.skill').css('width');
	$('.skill').height(w);
	$('.skillTitle').css('line-height', w);
})

function accordion (x) {
	$('.accordtext').each( function (i) {
		if (i == x) {
			$('.d'+i).slideDown();
			$('.t'+i).css('color', '#417df5');
		} else{
			$('.d'+i).slideUp();
			$('.t'+i).css('color', '#333');
		};
	})
}

document.addEventListener("DOMContentLoaded", function () {
	$('.t0').click();
})