$(function(){
    
    $("#remove").on('click',function(){
        $("div").detach(); //هيفصل عن المحتووى
    })

    var e=$("div");
    $("#add").on("click",function(){
        $("body").prepend(e);
    })
})