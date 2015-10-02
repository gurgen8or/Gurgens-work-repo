$(document).ready(function(){

	$('form#citySelector').submit(function(event){

		event.preventDefault();

		var userInput          = $('input#city-type').val();
		var userInputLowercase = userInput.toLowerCase();

		$('body').removeClass('nyc sf la austin sydney');

		if( userInputLowercase == "new york city" || userInputLowercase == "nyc" || userInputLowercase == "new york" ){

			$('body').addClass('nyc');

		}else if( userInputLowercase == "san francisco" || userInputLowercase == "san fran" || userInputLowercase == "bay area" || userInputLowercase == "sf" ){

			$('body').addClass('sf');

		}

		else if( userInputLowercase == "austin" || userInputLowercase == "atx" ){

			$('body').addClass('austin');
		}

		else if( userInputLowercase == "la" || userInputLowercase == "los angeles" || userInputLowercase == "lax" ){

			$('body').addClass('la');
		}

		else if( userInputLowercase == "sydney" || userInputLowercase == "syd" ){

			$('body').addClass('sydney');
		}

	});

});