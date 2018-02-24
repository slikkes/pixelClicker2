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

	let x=Math.floor(position.x/size);
	let y=Math.floor(position.y/size);
	let vert=area.canvas.width/size;
	let hor=area.canvas.height/size;
	let index=x+y*vert;
	
	//return [x,y];
	return index;
}




