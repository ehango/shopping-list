$(function() {

	
	// add input to list
	$('form').on('submit', function(e) {

		e.preventDefault();
		var $textInput = $('input:text');
		var newText = $textInput.val();
		$('ul').prepend('<li class="new">' + newText + '</li>');
		$textInput.val('');
	});

	// cross out complete items
	$('ul').on('click', 'li', function() {
		$(this).toggleClass('complete');
	});

	//clear entire list
	function clearAll() {
		$('li').remove();
	}

	$('.clear').on('click', clearAll);

	

	
});