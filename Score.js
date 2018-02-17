class Score{
	constructor(){
		this.point=0;
	}
	update(x){
		this.point+=x;
		$("#score").html(this.point);
	}
}