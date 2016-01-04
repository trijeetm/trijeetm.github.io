$(document).foundation();

// $(document).scroll(function() {
// 	var elems = $('.fadeUp');
// 	elems.each(function(index, el) {
// 		var elemPos = $(el).offset().top + ($(el).outerHeight()* 2 / 4);
//         var bottomOfWindow = $(window).scrollTop() + $(window).height();
//         console.log("bottomOfWindow " + bottomOfWindow);
//         console.log(elemPos);
// 		if (elemPos < bottomOfWindow) {
// 			// console.log("fading in elem" + index);
// 			setTimeout(function() {
// 				$(el).addClass('animated');
// 				$(el).addClass('fadeInUp');
// 			}, 100);
//         }
// 		// setTimeout(function() {
// 		// 	$(el).addClass('animated');
// 		// 	$(el).addClass('fadeInUp');
// 		// }, 1000 * index);
// 	});
// });

$(document).ready(function() {
	var elems = $('.fadeUp');
	elems.each(function(index, el) {
		// $(el).addClass('animated');
		// $(el).addClass('fadeInUp');
		setTimeout(function() {
			$(el).addClass('animated');
			$(el).addClass('fadeInUp');
		}, 400 * index);
	});
});

$('#close-project').click(function(event) {
	event.preventDefault();
	$('.container').fadeOut('500');
	setTimeout(function() {
		$(location).attr('href', 'index.html#portfolio');
	}, 500);
});
