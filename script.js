$('#formaction').submit(function  () {
formArray = [];
formArray.push($('#name').val(),
	$('#email').val(),
	$('#select').val())
 return router(formArray);
});

function router(formvalues){
	$('#formaction').hide();
	$.each(formvalues, function(i, v){
		$('.formClass').append( " - " + v);
	})
}
