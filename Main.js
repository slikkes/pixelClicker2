let area;
let walkers=[];
let pixels=[];
let size=20;
let score;
let mouse=new Mouse();
let speed=200;
let maxLevel=4;
let basePoint=1;
let test=6;
let counter=0;

$('#garea').ready(function Start(){
	area= new Area(560,480);
	area.start();
	mouse.start();
	walkers[0]=new Walker(280,240);
	score= new Score();
	$('#menubutton4').css('background-color','#1aff53');
	$('#menu4').css('display','block');

	//createDebugTools();
	
})

function Update(){
	area.update();
	//walker.walk();
	if(counter==test){
	walkers.forEach(element=>element.walk());
	counter=0;		
	}else{counter++;}
	pixels.forEach(element=>element.update());
	mouse.index=getIndexFromPosition(mouse.pos);
	hover();

}




