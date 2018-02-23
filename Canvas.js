class Area{

	constructor(width,height,color){
		this.canvas=document.createElement("canvas");
		this.canvas.width=width;
		this.canvas.height=height;
		$("#garea").append(this.canvas);
		this.context=this.canvas.getContext("2d");
		this.color=color;
	}

	start(){
		

		this.context.fillStyle=this.color;
		this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
	}

	changeSpeed(){
		clearInterval(this.interval);
		this.interval=setInterval(Update,speed);
	}

	update(){
		this.context.fillStyle=this.color;
		this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
	}
	clear(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	
}

	

