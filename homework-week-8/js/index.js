$(document).ready(function(){

	/* Password Field Display Toggle */

	$('input#togglePasswordDisplay').change(function(){

		console.log('you changed the input');

		// if( $('input#togglePasswordDisplay').is(':checked') == true ){
		// if( $(this).is(':checked') == true ){

		if( $(this).is(':checked') ){

			$('input#password').attr('type', 'text');

		}else{

			$('input#password').attr('type', 'password');

		}

	});

	/* End Password Field Display Toggle */

	/* Form Submission */

	$('form#contactForm').submit(function(e){

		var errors = 0;

		$('input.required').each(function(){

			if( $(this).val() == '' ){

				errors = errors + 1;
				$(this).addClass('error');

			}else{

				$(this).removeClass('error');

			}

		});

		$('textarea.required').each(function(){

			if( $(this).val() == '' ){

				errors = errors + 1;
				$(this).addClass('error');

			}else{

				$(this).removeClass('error');

			}

		});

		$('input#userLegal.required').each(function(){

			if( $(this).prop('checked') == false ){

				errors = errors + 1;
				$(this).addClass('error');

			}else{

				$(this).removeClass('error');

			}

		});

		if( errors > 0 ){

			alert('hey you left: ' + errors + ' fields blank');
			e.preventDefault();

		}

	});

	/* End Form Submission */



});