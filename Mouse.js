class Mouse{
	constructor(){
		this.pos=new Vector(0,0);
	}
	start(){
		let self=this;
		window.addEventListener("mousemove",function(e){
			self.pos.x=e.clientX;
			self.pos.y=e.clientY;
			correctMousePos();
		})
		window.addEventListener("click", function( e) {
			click();
		});
		this.interval=setInterval(function(){
			self.index=getIndexFromPosition(self.pos);
			hover();
		},40);
	}
}

function click(){
	
	pixels.forEach(function(elem, i){
		if(elem.index==mouse.index){
			score.update(pointsFromPLevel(elem.level));
			pixels.splice(i,1);
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
		}else{
			elem.hover=false;
		}
	})
	if(!isany){$("#garea").css("cursor","default");}
}