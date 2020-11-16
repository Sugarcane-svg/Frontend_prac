$(document).ready(function(){
	$("#rollImage img").each(function(){
		var newURL=$(this).attr("id");
		var oldURL=$(this).attr("src");
		
		var roll = new Image();
		roll.src=newURL;
		
		$(this).mouseover(function(){
			$(this).attr("src", newURL);
		});
		
		$(this).mouseout(function(){
			$(this).attr("src", oldURL);
		});
	});
});