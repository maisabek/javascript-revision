$(function(){

    $("button").on('click',function(){
    $('div').clone(true).appendTo("body")//هيعمل نسخة للديف بكل الخصائص باى ايفنت علية
    $('div').clone(false).appendTo("body")//هيعمل نسخة للديف بس من غير اى ايفنت علية
    })

})