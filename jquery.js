
// checkoff todo
$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

//deleting a todo
$("ul").on("click","span", function(event){
	
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

});

//creating new todo
$("input[type='text']").keypress(function(event){
if(event.which===13){
	var todotext = $(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>" + " " + todotext + "</li>");
}

});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();

});