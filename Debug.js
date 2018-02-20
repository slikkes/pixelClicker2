$(function(){$("#srange").click(function(){
	speed=parseInt($(this).val());
	area.changeSpeed();
	$("#srangeVal").html(speed);
	});
});

$(function(){$("#levelb").click(function(){
	maxLevel=parseInt($("#level").val());
	
	});
});

function goto(x){
	for(let i=0;i<x;i++){
		Update();
	}
}