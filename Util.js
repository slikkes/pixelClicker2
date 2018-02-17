class Vector{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
}

function getPositionFromIndex(index){


	return position;
}

function getIndexFromPosition(position){
	//margin:10 10

	let x=Math.floor(position.x/20);
	let y=Math.floor(position.y/20);
	let vert=area.canvas.width/size;
	let hor=area.canvas.height/size;
	let index=x+y*vert;
	
	//return [x,y];
	return index;
}



function pointsFromPLevel(level){
	let multiplier=Math.floor(level/5)+1;
	
	let point=basePoint*multiplier;
	return point;}
