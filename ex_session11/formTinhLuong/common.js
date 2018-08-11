function doSalary(){
	var basicS= parseInt(document.getElementById('coban').value);
	var coeS= parseInt(document.getElementById('heso').value);
	var allowaS= parseInt(document.getElementById('phucap').value);
	var salary = getSalary(basicS,coeS,allowaS);
	printSalary(salary);
}
function getSalary(basicS,coeS,allowaS) {
	if (coeS>5) return basicS*coeS;
	else return basicS*coeS+allowaS;
}
function printSalary(salary){
	document.getElementById('result').innerHTML="Lương của bạn là: " + salary;
	if (salary>30000000){
		document.getElementById('cmt').innerHTML="Bạn quá giàu";
		document.getElementById('cmt').style.color='blue';	
	}else if(salary<5000000){
		document.getElementById('cmt').innerHTML="Bạn cần cố gắng hơn";
		document.getElementById('cmt').style.color='red';
		}else{
			document.getElementById('cmt').innerHTML="";
		} 
}