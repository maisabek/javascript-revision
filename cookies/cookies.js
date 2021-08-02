/*
What are JavaScript Cookies?
( هي ملفات الاختبار الصغيرة المخزنة على الكمبيوتر 
  ويتم إنشاؤها عندما يزور المستخدم مواقع الويب لتخزين المعلومات التي يحتاجونها)
وهى عبارة عن كى وفاليو المعلومات  client server معلومات بيتم تداولهم بين الويب بروزر وال 
وبنستخدمها عشان نحتفظ بالستات بتاعة اليوزر يعنى بيحتفظ بالبيانات local storage دى بتتخزن فى ال 
بتاعتة ما بين كل الصفحات عشان مش كل شوية يدخل البيانات بتاعتة

Cookies are the small test files stored in a computer
and they get created when the user visits the websites to store information that they need.
Examples could be User Name details and shopping cart information from previous visits

*/
function createCookie(cookieName,cookieValue,daysToExpire){
  var date = new Date();
  date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
  document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}

function accessCookie(cookieName){
  var name = cookieName + "=";
  var allCookieArray = document.cookie.split(';');
  for(var i=0; i<allCookieArray.length; i++){
    var temp = allCookieArray[i].trim();
    if (temp.indexOf(name)==0)
      return temp.substring(name.length,temp.length);
  }
      return ""
}

function checkCookie(){
  var user = accessCookie("testCookie");
    if (user!="")
      alert("Welcome Back " + user + "!!!");
    else{
      user = prompt("Please enter your name");
      num = prompt("How many days you want to store your name on your computer?");
      if (user!="" && user!=null){
      createCookie("testCookie", user, num);
      }
    }
}
   

