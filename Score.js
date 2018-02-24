class Score{
	constructor(){
		this.point=10000;
	}
	update(x){
		this.point+=x;
		scoreChanges(x);
		$("#score").html(this.point);
		buttonGlow();
	}
}

function pointsFromPLevel(level){
	let multiplier=Math.floor(level/5)+1;
	
	let point=level*basePoint*multiplier;
	return point;}

let totalP=0;

function totalPUp(){
	totalP++;
	$('#totalps').html(totalP);
}

function buttonGlow(){

	for(let i=0;i<levels.length;i++){
		if(canAfford(i)){
			$("#bupgradeb"+i).css("background-color", "#ffad33")
		}else{
			$("#bupgradeb"+i).css("background-color", "#bfbfbf")
		}
	}
}

let sclife=0;

function scoreChanges(x){
	

	$("#scorechanges").css("padding-left","0px");
	if(x>0){$("#scorechanges").html("+"+x);}
	else{$("#scorechanges").html(x);}
	sclife=10;
}

function emptySc(){
	if($("#scorechanges").text()!=""){

		if(sclife==0){
			$("#scorechanges").html("");
			$("#scorechanges").css("padding-left","0px");

		}else{
			sclife--;
			$("#scorechanges").css("padding-left","+=1");
		}
	}
}