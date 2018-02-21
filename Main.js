let area;
let walkers=[];
let pixels=[];
let size=20;
let score;
let mouse=new Mouse();

let counter=0;


$('#garea').ready(function Start(){
	area= new Area(560,480);
	area.start();
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
	
})

function Update(){
	
	area.update();
	

	

	if(counter==speed){
		walkers.forEach(element=>element.walk());
		counter=0;}
	
	if (counter>speed){counter=0;}
	
	counter++;
	
	pixels.forEach(element=>element.update());

	mouse.index=getIndexFromPosition(mouse.pos);
	hover();

}




