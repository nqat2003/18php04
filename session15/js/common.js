$( function() {
	$( "#date" ).datepicker();
});
$('input[type=button]').click(function(){
	var d = new Date($('input[type=text]').val());
	var date = d.getDate();
	var weekday; 
	var year = d.getFullYear();
	switch (d.getDay()){
		case 0: weekday = "Thứ chủ nhật"; break;
		case 1: weekday = "Thứ hai"; break;
		case 2: weekday = "Thứ ba";break;
		case 3: weekday = "Thứ tư"; break;
		case 4: weekday = "Thứ năm"; break;
		case 5: weekday = "Thứ sáu";break;
		case 6: weekday = "Thứ bảy";break;
	}
	if (year%400 == 0 || (year%4==0 && year%100!=0)){
		$('#result').text("Bạn sinh ngày " 
		+ date + " và hôm đó là " + weekday + ", năm " + year +
		" là năm nhuận");
	}else
	$('#result').text("Bạn sinh ngày " 
		+ date + " và hôm đó là " + weekday + ", năm " + year +
		" không phải là năm nhuận");
})