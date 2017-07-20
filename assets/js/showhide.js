$('#show').click(function() {
    $('#show').css('display', 'none');
    $('#content').show('blind');
    $('#hide').show();
});

$('#hide').click(function() {
    $('#hide').css('display', 'none');
    $('#content').hide('blind');
    $('#show').show();
});

/*jQuery(document).ready(function(){

	jQuery(".content-container").hide();

	jQuery("#collapse").click(function() {
		jQuery(".index-author").fadeOut();
		jQuery(".content-container").slideDown();
		jQuery("main h1").css("margin-top", 100);
		jQuery("#collapse").hide();
	});

});*/
	


