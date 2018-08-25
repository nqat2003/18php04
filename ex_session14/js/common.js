var i = 1;
$( function() {
	$( "#date_start" ).datepicker();
	$( "#date_end" ).datepicker();
});
$(function(){
	$('#menu').slicknav({
		label:'',
		easingOpen: "easeOutBounce"
	});
});
$('header').height($(window).height()+'px');
// ------------------------------------------------
function next(){
	i++;
	if (i > $('#slider > img').length) i = 1;
	$('#slider > img').animate({
		opacity: 0,
		left: "-=450"
	},500);
	$('#slider > img').animate({
		left: "+=450"
	},0);
	$('#slider > img').animate({
		opacity: 1,
		left: "0"	
	},500);
	setTimeout(function(){
		$('#slider > img').attr('src','images/' + i + '.jpg');
	},500);
};
function prev(){
	i--;
	if (i < 1) i = $('#slider > img').length ;
	$('#slider > img').animate({
		opacity: 0,
		left: "+=450"
	},500);
	$('#slider > img').animate({
		left: "-=450"
	},0);
	$('#slider > img').animate({
		opacity: 1,
		left: "0"	
	},500);
	setTimeout(function(){
		$('#slider > img').attr('src','images/' + i + '.jpg');
	},500);
};
$(document).ready(function(){
	var interval = setInterval(next,10000);
});
$('#next').click(next);
$('#prev').click(prev);
// ------------------------------------------------
$('input[type=button]').click(function(){
	var datestart = $('#date_start').val();
	var dateend = $('#date_end').val();
	var adult = $('#adult').val();
	var children = $('#children').val();
	var d = new Date();
	var thisDay = (d.getMonth()+1) + "/" + d.getDate()  + "/" + d.getFullYear();
	var check = true;
	if (Date.parse(datestart) < Date.parse(thisDay) 
		|| Date.parse(dateend) < Date.parse(thisDay)) {
		$('#error').text("Ngày đến/Ngày đi không được nhỏ hơn ngày hiện tại");
		check = false;
	}
	if (Date.parse(datestart) > Date.parse(dateend)){
		$('#error').text("Ngày đi không được nhỏ hơn ngày đến");
		check = false;
	}
	if (adult == "Người lớn" || children == "Trẻ em") {
		$('#error').text("Vui lòng chọn số người đi");
		check = false;
	}
	if (dateend == "") {
		$('#error').text("Vui lòng chọn ngày đi");
		check = false;
	}
	if (datestart == "") {
		$('#error').text("Vui lòng chọn ngày đến");
		check = false;
	}
	if (check == true){
		$('#error').text("Đang tìm phòng, vui lòng chờ...");
		setTimeout(function(){
			$('#error').text("Done, hết phòng");
		},1500);
	}
});
