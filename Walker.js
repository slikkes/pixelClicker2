class Walker{
	constructor(startx,starty){
		this.pos=new Vector(startx,starty);
		this.index=getIndexFromPosition(this.pos);
	}
	walk(){

		nextStep(this.pos);
		this.index=getIndexFromPosition(this.pos);
		if(!checkIfPixelExists(this.index)){pixels.push(new Pixel(this.pos,this.index));}
	}
}



function nextStep(pos){
	let dir=Math.floor(Math.random()*4);
	switch(dir){
		case 0:
		if(checkBorders(pos.x-size,pos.y)){pos.x-=size;}		
		break;
		case 1:
		if(checkBorders(pos.x,pos.y-size)){pos.y-=size;}
		break;
		case 2:
		if(checkBorders(pos.x+size,pos.y)){pos.x+=size;}
		break;
		case 3:
		if(checkBorders(pos.x,pos.y+size)){pos.y+=size;}
		break;
	}
}

function checkBorders(x,y){
	if(x<size||y<size||x>area.canvas.width-size*2||y>area.canvas.height-size*2) {return false;}
	else {return true;}
}

function checkIfPixelExists(index){
	let exist=false;
	let number=0;
	pixels.forEach(function(element, i){
		if(element.index==index){
			exist=true;
			number=i;
		}
	});
	if(exist){
		pixels[number].levelup();
		return true;
	}	else{
		return false;
	}
}