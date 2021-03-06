class Mouse{
	constructor(){
		this.pos=new Vector(0,0);
		this.index;
	}
	start(){
		let self=this;
		particleLayer.canvas.addEventListener("mousemove",function(e){
			self.pos.x=e.clientX;
			self.pos.y=e.clientY;
			correctMousePos();
			self.index=getIndexFromPosition(self.pos);
		})
		particleLayer.canvas.addEventListener("click", function( e) {
			click();
		});
	}
}

function click(){
	
	pixels.forEach(function(elem, i){
		if(elem.index==mouse.index){
			particles.push( new Particle(elem.pos.x,elem.pos.y,elem.level));
			score.update(pointsFromPLevel(elem.level));
			pixels.splice(i,1);
			totalPUp();
		}
	})
}

function correctMousePos(){
	let rect = area.canvas.getBoundingClientRect();
	mouse.pos.x-=rect.left;
	mouse.pos.y-=rect.top;
}

function hover(){
	isany=false;
	pixels.forEach(function(elem, i){
		if(elem.index==mouse.index){
			elem.hover=true;
			elem.update();
			isany=true;
			printInfo(i);
		}else{
			elem.hover=false;
		}
	})
	if(!isany){
		$("#garea").css("cursor","default");
		printInfo(-1);

	}
}

function printInfo(index){
	if(index>-1){
		$('#plevel').html(pixels[index].level);
		$('#pvalue').html(pointsFromPLevel(pixels[index].level));/*
		$('#plevel').html(index);
		$('#pvalue').html(pixels[index].pos.x+" "+pixels[index].pos.y);*/

	}
	else{
		$('#plevel').html("");
		$('#pvalue').html("");
	}

}