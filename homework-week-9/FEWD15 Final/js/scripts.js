$(document).ready(function(){

	// $('img').click(function(){



	// }

	$('div#posts').masonry({
  		// options
  		itemSelector: 'section.post',
  		
	});

	$('.hamburger').on('click', function() {

		$('.menu').toggleClass('open');

	});

});