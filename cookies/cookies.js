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

You can create cookies using document.cookie property like this
document.cookie = "cookiename=cookievalue"

You can even add an expiry date to your Cookie to remove the particular Cookie from the 
computer on the specified date. The expiry date should be set in the UTC/GMT format.
If you do not set the expiry date, the cookie will be removed when the user closes the browser.
document.cookie ="cookiename=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC"

You can also set the domain and path to specify which domain and to which directories in the 
specific domain the Cookie belongs to. By default, 
a cookie belongs to the page that sets the Cookie.
document.cookie ="cookiename=cookievalue; expires= Thu, 21 Aug 2014 20:00:00 UTC; path=/

//create a cookie with a domain to the current page and a path to the entire domain.
JavaScript get Cookie
You can access the Cookie like this, which will return all the cookies saved for 
the current domain.

var x =  document.cookie


JavaScript Delete Cookie To delete a cookie, you just need to set the cookie's value to 
empty and set the value of expires to a passed date.

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
   

