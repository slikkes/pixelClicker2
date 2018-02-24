let area;
let walkers=[];
let pixels=[];
let size=40;
let score;
let mouse=new Mouse();
let interval;
let counter=0;
let particleLayer;+1000
let particles=[];

$('#garea').ready(function Start(){
	area= new Area(560,480,"#454f54");
	particleLayer=new Area(560,480,"rgba(0,0,0,0)")
	//particleLayer=new Area(560,480,"#ccccb3");
	
	mouse.start();
	walkers[0]=new Walker(280,240);
	score= new Score();
	$('#menubutton2').css({"background-color":"#1aff53",
			"color":"#3d5c5c"});
	$('#menu2').css('display','block');
	for (let i=0;i<3;i++){
		printLevel(i);
	}
	//createDebugTools();
	
	interval=setInterval(Update,70);
})

function Update(){
	
	particleLayer.clear();
	area.update();

	for(let i=particles.length-1;i>-1;i--){
		particles[i].update();
		if(particles[i].life>5){particles.splice(i,1);}
	}

	if(counter==speed){
		walkers.forEach(element=>element.walk());
		counter=0;}
	
	if (counter>speed){counter=0;}
	
	counter++;
	
	pixels.forEach(element=>element.update());

	mouse.index=getIndexFromPosition(mouse.pos);
	hover();

	emptySc();

}




