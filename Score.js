class Score{
	constructor(){
		this.point=0;
	}
	update(x){
		this.point+=x;
		$("#score").html(this.point);
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