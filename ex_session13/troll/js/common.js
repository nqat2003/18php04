$('#n').mouseover(function(){
	if ($('#n').val() =="NO"){
		$('#n').val("YES");
		$('#y').val("NO");
	}
});
$('#y').mouseover(function(){
	if ($('#y').val() =="NO"){
		$('#y').val("YES");
		$('#n').val("NO");
	}
});
$('#n').click(function(){
	$('#question').hide();
	$('#answer').show();
})
$('#y').click(function(){
	$('#question').hide();
	$('#answer').show();
})