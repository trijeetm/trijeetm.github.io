var quizr = [	
	"slider/quizr/1.jpg",
	"slider/quizr/2.jpg",
	"slider/quizr/3.jpg",
	"slider/quizr/4.jpg",
	"slider/quizr/5.jpg",
	"slider/quizr/6.jpg"
];

var ep = [	
	"slider/ep/1.jpg",
	"slider/ep/2.jpg"
	// "slider/ep/3.jpg",
	// "slider/ep/4.jpg",
	// "slider/ep/5.jpg",
	// "slider/ep/6.jpg",
	// "slider/ep/7.jpg",
	// "slider/ep/8.jpg",
	// "slider/ep/9.jpg",
	// "slider/ep/10.jpg"
];

var imgset;
var current;
var nextInterval = 0;

function slider (gallery) {
	clearInterval(nextInterval);
	if (gallery == 'quizr') {
		imgset = quizr;
		$('.sliderRedirect').attr('href', 'http://quizr.me/');
	}
	else if (gallery == 'ep') {
		imgset = ep;
		$('.sliderRedirect').attr('href', 'http://www.eagerpanda.com/');
	};
	current = 0;
	$('.ciNo').html(current + 1);
	$('.tiNo').html(imgset.length);
	$(".top").attr("src", imgset[0]);
	nextInterval = setInterval( function () {
		$('.next').click();	
	}, 3000);
}

$('.next').click( function () {
	current = (current+1)%imgset.length;
	$('.ciNo').html(current + 1);
	$(".bottom").attr("src", imgset[current]);
	// $('.top').fadeOut(400);
	$(".top").css("opacity", "0");	
	setTimeout( function () {
		$(".top").attr("src", imgset[current]);
		$(".top").css("opacity", "1");
	}, 1000);
	// $(".bottom").attr("src", "");
	event.preventDefault();
	clearInterval(nextInterval);
	nextInterval = setInterval( function () {
		$('.next').click();	
	}, 3000);
})

$('.prev').click( function () {
	current--;
	if (current < 0) {
		current = imgset.length - 1;
	};
	$('.ciNo').html(current + 1);
	$(".bottom").attr("src", imgset[current]);
	// $('.top').fadeOut(400);
	$(".top").css("opacity", "0");	
	setTimeout( function () {
		$(".top").attr("src", imgset[current]);
		$(".top").css("opacity", "1");
	}, 1000);
	// $(".bottom").attr("src", "");
	event.preventDefault();
	clearInterval(nextInterval);
	nextInterval = setInterval( function () {
		$('.next').click();	
	}, 3000);
})