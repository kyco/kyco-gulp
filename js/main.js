$(document).ready(function() {
	window.setTimeout(function() {
		$('body').append('<h2 class="jsDots">.</h2>');
		window.setTimeout(function() {
			$('.jsDots').append('.');
			window.setTimeout(function() {
				$('.jsDots').append('.');
				window.setTimeout(function() {
					$('body').append("<h2>Hey there, I'm just here to show that jquery also works.</h2>");
				}, 500);
			}, 500);
		}, 500);
	}, 0);
});
