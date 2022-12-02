$(document).ready(function(){

$("textarea").on("click",function(){
$(this).select(); //اوول لما اضغط يقووم محددة
})

$("textarea").select(function(){
$(this).after("text copied");
})

});