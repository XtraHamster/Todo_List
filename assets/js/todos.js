// Check off specific todos by clicking
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

// Clicks on X to delete Todo
$('ul').on('click', 'span', function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val('');
		$('ul').append('<li><span>X</span> ' + todoText + '</li>')
	}
}); 