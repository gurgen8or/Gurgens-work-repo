$(document).ready(function(){

	$('button#submit').click(function(){

		//console.log('Test')
		var valueA = parseInt($('input#userNumberA').val());

		var valueB = parseInt($('input#userNumberB').val());

		// console.log(valueA);

		// console.log(valueB);

		// console.log(typeof valueA);

		// console.log(typeof valueB);

		if (valueA > valueB) {

			$('span#comparisonDisplay').html('>');
			// console.log('>');
			//$().html();

		} else if(valueA < valueB){

			$('span#comparisonDisplay').html('<');
			//console.log('<');
			//$().html();
		} else {

			console.log('=');
			$('span#comparisonDisplay').html('=');
		}

	});

});