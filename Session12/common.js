function checkNull() {
	var name = document.getElementById('t_name').value;
	var mail = document.getElementById('t_mail').value;
	var phone = document.getElementById('t_phone').value;
	var dob = document.getElementById('t_dob').value;
	var tittle = document.getElementById('t_tittle').value;
	var content = document.getElementById('t_content').value;
	var s_male = document.getElementById('t_male').checked;
	var s_female = document.getElementById('t_female').checked;
	var s_other = document.getElementById('t_other').checked;
	var check = true;
	if (name == "") {
		document.getElementById('name').innerHTML = "Vui lòng nhập tên";
		document.getElementById('name').style.color = 'red';
		check = false;		
	}else document.getElementById('name').innerHTML ="";
	if (mail == "") {
		document.getElementById('mail').innerHTML = "Vui lòng nhập mail";
		document.getElementById('mail').style.color = 'red';		
		check = false;
	}else document.getElementById('mail').innerHTML ="";
	if (phone == "") {
		document.getElementById('phone').innerHTML = "Vui lòng nhập sđt";
		document.getElementById('phone').style.color = 'red';
		check = false;		
	}else document.getElementById('phone').innerHTML ="";
	if (dob == "") {
		document.getElementById('dob').innerHTML = "Vui lòng nhập ngày sinh";
		document.getElementById('dob').style.color = 'red';		
		check = false;
	}else document.getElementById('dob').innerHTML ="";
	if (tittle == "") {
		document.getElementById('tittle').innerHTML = "Vui lòng nhập tiêu đề";
		document.getElementById('tittle').style.color = 'red';		
		check = false;
	}else document.getElementById('tittle').innerHTML ="";
	if (content == "") {
		document.getElementById('content').innerHTML = "Vui lòng nhập nội dung";
		document.getElementById('content').style.color = 'red';		
		check = false;
	}else document.getElementById('content').innerHTML ="";
	if ((s_male == false) && (s_female == false) && (s_other == false)){
		document.getElementById('sex').innerHTML = "Vui lòng chọn giới tính";
		document.getElementById('sex').style.color = 'red';		
		check = false;
	}else document.getElementById('sex').innerHTML ="";
	if (check == true){
		document.getElementById('wrapper').style.display = 'none';
		document.write("Đăng kí thành công");
	}
		
}