class Pixel{
	constructor(position,index){
		this.pos=new Vector(position.x, position.y);
		//this.index=getIndexFromPosition(this.pos);
		this.index=index;
		this.level=1;
		this.state="fresh";
		this.hover=false;
	}
	update(){
		this.ctx=area.context;
		this.ctx.fillStyle=shadeColorPicker(this.level);		
		this.ctx.fillRect(this.pos.x,this.pos.y,size,size);

		this.state=setState(this.hover,this.index);

		this.ctx.fillStyle=colorPicker(this.state,this.level);
		this.ctx.fillRect(this.pos.x+2,this.pos.y+2,size-2,size-2);
	}
	levelup(){
		this.level++;
		
	}
}




function setState(hover,index){
	if(hover){
		$("#garea").css("cursor","pointer");
		return "hover";}
	else if(walker.index==index){return "fresh";}
	else{return "normal";}
}