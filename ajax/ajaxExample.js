var btn=document.querySelector('button#users');
var usercont=document.querySelector('div.users-cont');
btn.addEventListener('click',getUsers,false);
function getUsers(){
    var req=new XMLHttpRequest();
    req.onreadystatechange = function(){
        if(req.readyState === 4){
            var usercontent='';
            var results = JSON.parse(req.response); 
            for(var i=0;i<results.results.length;i++){
              usercontent +='<div class="users.div">'+
              '<h1>user no'+(i+1)+'</h1>'+
              '<p>Name: <span>'+results.results[i].name.first+''+results.results[i].name.last+'</span></p>'+
              '<p>Gender: <span>'+results.results[i].gender+'</span></p>'+
              '<p>Address: <span>'+results.results[i].location.street+'</span></p>'+
              '</div>'
            }
            usercont.innerHTML=usercontent;
        }
    }
    req.open('GET','https://randomuser.me/api/?results=3');
    req.send();
}