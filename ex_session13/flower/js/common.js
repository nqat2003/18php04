$('#start').click(function(){
    $('#boy').animate({right:'50px'},1500);
    $('#girl').animate({left:'50px'},1500);
    $('#flower_click').removeAttr("disabled");
});
$('#flower_click').click(function(){
	$('#flower').show();
});
