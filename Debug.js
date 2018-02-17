$(function(){$("#srange").click(function(){
	speed=parseInt($(this).val());
	area.changeSpeed();
	$("#srangeVal").html(speed);
	});
});