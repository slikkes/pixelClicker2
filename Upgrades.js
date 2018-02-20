$(function(){
	$("#menuholder li").click(function(){
		let id=$(this).attr('id');
		console.log(id);
		id=id.substr("menubutton".length,1);
		$(".menus").css("display","none");
		$("#menu"+id).css("display","block");
		$("#menuholder li").css("background-color","#367d36")
				
		$("#menubutton"+id).css("background-color","#1aff53")
	})
})