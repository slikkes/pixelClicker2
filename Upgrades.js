let prices=[
	[200,500,750,1150,1500,2000],
	[150,400,600,900,1500],
	[120,300,500,800,1000]
]
//color
//speed
//value

let levels=[1,1,1];

let maxLevel=4*levels[0];
let speed=6/levels[1];
let basePoint=1*levels[2];

$(function(){
	$("#menuholder li").click(function(){
		let id=$(this).attr('id');
		console.log(id);
		id=id.substr("menubutton".length,1);
		$(".menus").css("display","none");
		$("#menu"+id).css("display","block");
		$("#menuholder li").css({"background-color":"#2e6b2e",
			"color":"#c2d6d6"})
				
		$("#menubutton"+id).css({"background-color":"#1aff53",
			"color":"#3d5c5c"})
	})
})

function canAfford(bValue){
	//score<=prices[bValue][levels[bValue]] ?  true :  false;
	if(score.point>=prices[bValue][levels[bValue]-1]){return true;}
	else{return false;}
}

$(function(){
	$(".bupgradeb").click(function(){
		let id=$(this).val();
		console.log(score);
		if(canAfford(id)){
			score.update(-prices[id][levels[id]-1]);
			levels[id]++;
			maxLevel=4*levels[0];
			speed=Math.floor(6/levels[1]);
			if(id==1){counter=0;}
			basePoint=1*levels[2];
			$("#price"+id).html("<b>"+prices[id][levels[id]]+"</b>");
			printLevel(id);
		}
		console.log(levels);
	})
})

function printLevel(id){
	$("#levels"+id).html("");
	let n=prices[id].length
	for (let i=n;i>0;i--){
		if(i>levels[id]){
			
		$("#levels"+id).append('<div style="margin-top:2px; height:10px; width:100%; background-color:white;"></div>');
		}else{
		$("#levels"+id).append('<div style="margin-top:2px; height:10px; width:100%; background-color:black;"></div>');

		}
	}
}

