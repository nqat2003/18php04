var i = 0;
var dem = 0;
var aNum = new Array(); //Array for save number of picture
var aId = new Array(); //Array for save Id of img tag
function pic(number,id){
	//Assign value of two pictures has been clicked
	aNum[i] = number;
	aId[i] = id;
	/*Make sure just have maximum two 
	pictures showed at one momment */
	console.log("Begin " + i);
	if (i <= 1) {
		//show picture has been clicked
		$("#" + id).attr('src',"imgs/" + number + ".png");
		i++;
		console.log("After if <=1 " + i);
	}else{
		// compare two pictures are being show
		if (aNum[0] == aNum[1] && aId[0] != aId[1]){
			i=0;
		}else{
			//hide pictures
			$("#" + aId[0]).attr('src',"");
			$("#" + aId[1]).attr('src',"");
			/* show and assign value of new picture has 
			been clicked after two pictures before*/
			$("#" + id).attr('src',"imgs/" + number + ".png");
			aNum[0] = number;
			aId[0] = id;
			i = 1;
			console.log("After else - if - else num[0] = num[1] " + i);
		}
	}
	// if (i == 2) { i = 0; }
}
//Check for success
$('.pic').click(function(){
	for (var i = 1;i <= 16; i++){
		if ($("#" + i).attr('src') != "") {
			dem++;
		}else dem = 0;
	}
	if (dem >= 16) {
		var timeOut = setTimeout(function(){
			alert("SUCCESS");
		},500);
		
	}
});
