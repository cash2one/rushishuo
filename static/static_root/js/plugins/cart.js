	//Color Switcher
//Copyright 2015 8Guild.com

$(document).ready(function(e) {

	var toggle = $('.color-switcher .toggle');
	var colorTile = $('.color a');
	toggle.click(function(){
		$(this).parent().toggleClass('open');
	});

	colorTile.click(function(e){
		colorTile.removeClass('current');
		$(this).addClass('current');

		var color = $(this).attr('data-color');

		var colorHash = ($(this).css('background-color'));

		$('head link.color-scheme').attr('href', 'css/colors/' + color + '.css');

		var polygon = $(this).attr('data-color');

		$('.myStat').empty().removeData().attr('data-fgcolor', colorHash).circliful();

		$('[data-switcher]').attr('style', 'background-image: url(img/color-polygons/' + color + '.jpg)');

		e.preventDefault();
	});

});