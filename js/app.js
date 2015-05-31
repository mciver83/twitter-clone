$(document).ready(function(){

	//jQuery("abbr.timeago").timeago();

	

	console.log($('#char-count'));
	$('#tweet-controls').hide();
	$('.tweet-actions').hide();
	$('.stats, .reply').hide();

	

	$('#tweet-content').find('.tweet-compose').on('keyup', function(){
		var length = $(this).val().length;
		 $('#char-count')[0].textContent = 140 - length;
		 if ($('#char-count')[0].textContent <= 10) {
		 	$('#char-count').css('color', 'red');
		 } else {
		 	$('#char-count').css('color', '#999');
		 }

		 if ($('#char-count')[0].textContent < 0) {
		 	$('#tweet-submit').prop('disabled', true);
		 } else ($('#tweet-submit').prop('disabled', false))

	});

	$('#tweet-submit').on('click', function(e){
		e.preventDefault;
		var tweet = $('#tweet-content').find('.tweet-compose').val();
		var newTweet = $('.tweet').first().clone();
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var d = new Date();
		var hours = d.getHours();
		var month = months[d.getMonth()];
		var year = d.getFullYear().toString().substr(2,2);
		var ampm = function() {
			if (hours >= 12) {
				return 'PM';
			}
			return 'AM';
		};
		console.log(newTweet);
		newTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
		newTweet.find('.fullname')[0].textContent = 'Mark';
		newTweet.find('.username')[0].textContent = '@mark' + ' ' + jQuery.timeago(new Date());
		newTweet.find('.tweet-text')[0].textContent = tweet;
		newTweet.find('.time')[0].textContent = hours - 12 + ':' + d.getMinutes() + ' ' + ampm() + ' - ' + d.getDate() + ' ' + month + ' ' + year;
		$('#stream').prepend(newTweet);

	});
	
	$(document).on('mouseover','.tweet', function(){
		$(this).find('.tweet-actions').show();
	});

	$(document).on('mouseout','.tweet', function(){
		$(this).find('.tweet-actions').hide();
	});

	$(document).on('click', '.tweet', function(){
		$(this).find('.stats, .reply').fadeToggle(500);
	});

	$('.reply').find('.tweet-compose').on('focus', function(){
		$(this).css('height', '5em')
		$(this).show();
	});
	

	$('#tweet-content').find('.tweet-compose').on('focus', function(){
		$(this).css('height', '5em')
		$('#tweet-controls').show();
	});

	
});