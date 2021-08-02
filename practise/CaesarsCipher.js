// هيدخل استرنج وهيمسك حرف حرف وكل حرف يذود علية 13 حرف ويطلع الحرف رقم 13
function CaesarsCipher(str){
    s=""
    s2=""
for(var i=0;i<str.length;i++){
s=str[i].charCodeAt()
if(s >= 65 && s <=90){
s=String.fromCharCode(s+13)
s2+=s
}else if(s >=78 && s <=90){
    s=String.fromCharCode(s-13)
    s2+=s
}else{
    s2+=s[i]
}
}
return s2
}
console.log(CaesarsCipher("AB")) //NO