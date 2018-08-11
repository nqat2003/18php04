function checkNull() {
	var name = document.getElementById('t_name').textContent;
	var mail = document.getElementById('t_mail').textContent;
	var phone = document.getElementById('t_phone').textContent;
	var dob = document.getElementById('t_dob').textContent;
	var tittle = document.getElementById('t_tittle').textContent;
	var content = document.getElementById('t_content').textContent;
	var s_male = document.getElementById('t_male').checked;
	var s_female = document.getElementById('t_female').checked;
	var s_other = document.getElementById('t_other').checked;

	if (name == "" && mail == "" && phone == "" && dob == "" 
		&& tittle == "" && content == "" && s_male == false &&
		 s_female == false && s_other == false) {
		if (name == "") {
			document.getElementById('name').innerHTML = "Vui lòng nhập tên";
			document.getElementById('name').style.color = 'red';		
		}
		if (mail == "") {
			document.getElementById('mail').innerHTML = "Vui lòng nhập mail";
			document.getElementById('mail').style.color = 'red';		
		}
		if (phone == "") {
			document.getElementById('phone').innerHTML = "Vui lòng nhập sđt";
			document.getElementById('phone').style.color = 'red';		
		}
		if (dob == "") {
			document.getElementById('dob').innerHTML = "Vui lòng nhập ngày sinh";
			document.getElementById('dob').style.color = 'red';		
		}
		if (tittle == "") {
			document.getElementById('tittle').innerHTML = "Vui lòng nhập tiêu đề";
			document.getElementById('tittle').style.color = 'red';		
		}
		if (content == "") {
			document.getElementById('content').innerHTML = "Vui lòng nhập nội dung";
			document.getElementById('content').style.color = 'red';		
		}
		if ((s_male == false) && (s_female == false) && (s_other == false)){
			document.getElementById('sex').innerHTML = "Vui lòng chọn giới tính";
			document.getElementById('sex').style.color = 'red';		
		}				
	}else{
		document.getElementById('wrapper').style.display='none';
		document.write("Đăng kí thành công");
	}
	// console.log(s_male);
	console.log((s_male == false) && (s_female == false) && (s_other == false));
	console.log(name);
	console.log(document.getElementsByName('name').value);
}