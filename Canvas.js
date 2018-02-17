class Area{

	constructor(width,height){
		this.canvas=document.createElement("canvas");
		this.canvas.width=width;
		this.canvas.height=height;
		$("#garea").append(this.canvas);
		this.context=this.canvas.getContext("2d");
	}

	start(){
		

		this.context.fillStyle="#ffecb3";
		this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
		this.interval=setInterval(Update,speed);
	}

	changeSpeed(){
		clearInterval(this.interval);
		this.interval=setInterval(Update,speed);
	}

	update(){
		this.context.fillStyle="#ffecb3";
		this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
	}

	
}

	

