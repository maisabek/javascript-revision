$(document).ready(function(){
$("a").on("click",function(event){
    event.preventDefault();
//لما ادووس على ال الاية المفرووض يرووح للينك دى بتمنع ان يرووح للينك ويخفى الصورة لو ظهرة ولو ظهرة يخفيها
    // $("img").toggle(500);
    if(event.isDefaultPrevented()){//هل انا منعاة انة يرووح للينك
        $("div").text("link dont work");
    }
});

});