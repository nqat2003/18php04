var formula="";
function getFormula(text){
	// var a=Number(document.getElementById('result').textContent);
	formula+=text;
	document.getElementById('calculation').innerHTML=formula;
}
function showResult(){
	document.getElementById('calculation').innerHTML=formula+"=";
	document.getElementById('result').innerHTML=eval(formula);
	formula="";
}
function resetFormula(){
	formula = "";
	document.getElementById('calculation').innerHTML=formula;
	document.getElementById('result').innerHTML=formula;
}


