// Check off specific todos by clicking
$('li').click(function(){
	$(this).toggleClass('completed');
});

// Clicks on X to delete Todo
$('span').click(function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
