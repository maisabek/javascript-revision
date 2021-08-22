//onreadystatechange
//فى مرحلة بتم فى السرفير انا مش بشوفها 
var req=new XMLHttpRequest();
req.onreadystatechange = function(){
if(req.readyState === req.DONE && req.status === 200){
    console.log(req.responseText);
}

};
req.open("GET","https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState");
req.send();