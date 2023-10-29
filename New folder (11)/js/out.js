$(document).ready(function(){

	$(".tour .row >div last-of-type img ").eq(0).hover(function(){
   $(this).css("zIndex", "4");
	},function(){
		  $(this).css("zIndex", "1");
	});
});