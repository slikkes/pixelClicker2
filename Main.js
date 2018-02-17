let area;
let walker;
let pixels=[];
let size=20;
let score;
let mouse=new Mouse();
let speed=80;
let maxLevel=4;
let basePoint=5;


$('#garea').ready(function Start(){
	area= new Area(560,480);
	area.start();
	mouse.start();
	walker=new Walker(280,240);
	score= new Score();
	//createDebugTools();
})

function Update(){
	area.update();
	walker.walk();
	pixels.forEach(element=>element.update());


}




