$(document).ready(function(){

	$('button#submit').click(function(){

		if( $('input#userNumberA').val() == '' ){

			alert('you left a box blank');
			return false;
		}

	// $('button#submit').click(function(){

	// 	var intA = 8;
	// 	var strB = '8';

	// 	console.log( ( intA == strB ) );

	// 	console.log( '===================');

	// 	console.log( (intA === strB) );

	// }

	// });

	// $('button#submit').hover(function(){

	// 	$(this).hide();

	// });


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

			//console.log('=');
			$('span#comparisonDisplay').html('=');
		}

	});

});