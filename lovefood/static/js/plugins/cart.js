$(document).ready(function(e) {

	var toggle = $('.side-cart .toggle');
	toggle.click(function(){
		$(this).parent().toggleClass('open');
	});
});