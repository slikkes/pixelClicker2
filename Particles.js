class Particle{
	constructor(x,y,level){
		this.pos=new Vector(x,y);
		this.life=1;
		this.state="particle";
		this.color="rgb("+colorPicker(this.state,level);+")";
		this.type=typeChooser();

	}
	update(){

		this.ctx=particleLayer.context;

		let self=this;

		switch (this.type){
			case 0:
				quadro(self,this.pos,this.color,this.life);
				break;
			case 1:
				horizontal(self,this.pos,this.color,this.life);
				break;
			case 2:
				vertical(self,this.pos,this.color,this.life);
				break;
			case 3:
				horizontalS(self,this.pos,this.color,this.life);
				break;
			case 4:
				verticalS(self,this.pos,this.color,this.life);
				break;

		}
		this.life++;
	
	}
}

function typeChooser(){

	let type=Math.floor(Math.random()*5);
	return type;
}

function horizontal(self,pos, color,life){

	step=5*life;
	topy=pos.y-step;
	bottomy=pos.y+step+size/2;
	self.ctx.fillStyle=color;
	self.ctx.fillRect(pos.x,topy,size,size/2);
	self.ctx.fillRect(pos.x,bottomy,size,size/2);
}


function horizontalS(self,pos, color,life){

	step=5*life;
	topy=pos.y;
	bottomy=pos.y+size/2;
	topx=pos.x+step;
	bottomx=pos.x-step;
	self.ctx.fillStyle=color;
	self.ctx.fillRect(topx,topy,size,size/2);
	self.ctx.fillRect(bottomx,bottomy,size,size/2);
}

function vertical(self,pos, color,life){

	step=5*life;
	rightx=pos.x+step+size/2;
	leftx=pos.x-step;
	self.ctx.fillStyle=color;
	self.ctx.fillRect(rightx,pos.y,size/2,size);
	self.ctx.fillRect(leftx,pos.y,size/2,size);
}


function verticalS(self,pos, color,life){

	step=5*life;
	rightx=pos.x+size/2;
	leftx=pos.x;
	righty=pos.y+step;
	lefty=pos.y-step;	
	self.ctx.fillStyle=color;
	self.ctx.fillRect(rightx,righty,size/2,size);
	self.ctx.fillRect(leftx,lefty,size/2,size);
}

function quadro(self,pos, color,life){

	step=5*life;

	topleftx=pos.x-step;
	toplefty=pos.y-step;

	toprightx=size/2+pos.x+step;
	toprighty=pos.y-step;

	bottomleftx=pos.x-step;
	bottomlefty=size/2+pos.y+step;

	bottomrightx=size/2+pos.x+step;
	bottomrighty=size/2+pos.y+step;

	self.ctx.fillStyle=color;
	self.ctx.fillRect(toprightx,toprighty,size/2,size/2);
	self.ctx.fillRect(topleftx,toplefty,size/2,size/2);
	self.ctx.fillRect(bottomleftx,bottomlefty,size/2,size/2);
	self.ctx.fillRect(bottomrightx,bottomrighty,size/2,size/2);
}