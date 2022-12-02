$(document).ready(function(){
    $("form").submit(function(event){
        if($("input:first").val() === "cc" ){
            $("span").text("word correct").show();
             return;
        }
        $("span").text("word not correct").show();
       event.preventDefault()
    })
})