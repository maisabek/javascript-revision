var myDiv=document.getElementById('content')
function getUsers(){
    var req=new XMLHttpRequest()
    req.onreadystatechange=function(){
        if(req.readyState===4){
            var con=''
            var results=JSON.parse(req.response)
            for(var i=0;i<results.results.length;i++){
            con+='<p> name : '+results.results[i].name.first+'</p>'
            }
            myDiv.innerHTML=con
        }
    }
    req.open("GET","https://randomuser.me/api/?results=3")
    req.send()
}
