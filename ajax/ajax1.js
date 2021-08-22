/*

1) What is AJAX ?
AJAX stands for Asynchronous JavaScript and XML. It is a group of related technologies used to 
display data asynchronously.In other words, it sends and retrieves data without reloading the
web page

_______

2) What are the advantages of AJAX ?
Quick Response
Bandwidth utilization
The user is not blocked until data is retrieved from the server
It allows us to send only important data to the server
It makes the application interactive and faster

________

3) What are the disadvantages of AJAX ?
Dependent on JavaScript
Security issues
Debugging is difficult

________

4) What are the real web applications of AJAX currently running in the market?
Twitter - Facebook - Gmail - Javatpoint - Youtube

_______

5) What are the security issues with AJAX?
AJAX source code is readable
Attackers can insert the script into the system

________

6) What is the difference between synchronous and asynchronous requests?
Synchronous request ==> blocks the user until a response is retrieved whereas 
asynchronous request ==> doesn't block the user.

________

7) What are the technologies used by AJAX?
HTML/XHTML and CSS - These technologies are used for displaying content and style.
DOM - It is used for dynamic display and interaction with data.
XML - It is used for carrying data to and from server
XMLHttpRequest - It is used for asynchronous communication between client and server.
JavaScript - It is used mainly for client-side validation

________

8) What is the purpose of XMLHttpRequest ?
It sends data in the background to the server.
It requests data from the server.
It receives data from the server.
It updates data without reloading the page

_______

9) What are the properties of XMLHttpRequest ?

The important properties of the XMLHttpRequest object are given below.

onReadyStateChange - It is called whenever readystate attribute changes.
readyState - It represents the state of the request.
responseText - It returns response as text.
responseXML - It returns response as XML.
status - It returns the status number of a request.
statusText - It returns the details of status.

______

10) What are the important methods of XMLHttpRequest?
abort() - It is used to cancel the current request
getAllResponseHeaders() - It returns the header details.
getResponseHeader() - It returns the specific header details.
open() - It is used to open the request.
send() - It is used to send the request.
setRequestHeader() - It adds request header

______

11) What are the types of open() method used for XMLHttpRequest?
open(method, URL) - It opens the request specifying get or post method and URL.
open(method, URL, async) - It is same as above but specifies asynchronous or not.
open(method, URL, async, username, password) - It is same as above but specifies the username and password.

______

12) What are the types of send() method used for XMLHttpRequest?
send() - It sends get request
send (string) - It sends post request.

______

13) What is the role of the callback function in AJAX?
The callback function passes a function as a parameter to another function.
 If we have to perform various AJAX tasks on a website, then we can create one function 
 for executing XMLHttpRequest and a callback function to execute each AJAX task.

______

14) What is JSON in AJAX?
JSON stands for JavaScript Object Notation. In AJAX, 
it is used to exchange data between a browser and a server. 
It is easy to understand, and data exchange is faster than XML. 
It supports array,object, string, number, and values.

request.onreadystatechange  = function(){    
      if (request.readyState == 4  )    
      {    
        var jsonObj = JSON.parse(request.responseText);//JSON.parse() returns JSON object    
        document.getElementById("date").innerHTML =  jsonObj.date;    
        document.getElementById("time").innerHTML = jsonObj.time;    
      }    
}  

_____

15) What are the tools for debugging AJAX applications?
There are several tools for debugging AJAX applications.

Firebug for Mozilla Firefox
Fiddler for IE (Internet Explorer)
JavaScript HTML Debugger
MyEclipse AJAX Tools
Script Debugger

______

16) What are the types of post back in AJAX?
There are two types of post back in AJAX.

Synchronous Postback - It blocks the client until the operation completes.
Asynchronous Postback - It doesn?t block the client.

______

17) What are the different ready states of a request in AJAX?

There are 5 ready states of a request in AJAX.
0 means UNOPENED (create request)
1 means OPENED   (open request)
2 means HEADERS_RECEIVED (send request)
3 means LOADING (processing request)
4 means DONE    ( done operation complate )

______

18) What are the common AJAX frameworks?
Dojo Toolkit
YUI
Google Web Toolkit (GWT)
Spry
MooTools
Prototype

______

19) How can you test the AJAX code ?
JUnit is the open source unit testing framework for client-side JavaScript. 
It is required to create test cases The unit test case is a code which ensures 
that the program logic works as expected

_____


20) What is the difference between JavaScript and AJAX ?

JavaScript is an object-based scripting language.
AJAX is a group of inter-related technologies like JavaScript, XML, HTML, CSS etc

JavaScript requests the server and waits for the response.
AJAX sends a request to the server and doesn't wait for the response.

JavaScript consumes more bandwidth as it reloads the page.
AJAX doesn't reload the page so consumes less bandwidth.

*/

//عشان اعمل كريات لل اجكس ركوست
var fRequest=new XMLHttpRequest()
console.log(fRequest.readyState)
//المراحل اللى بيمر بيها الريكوست بعد ما كريتة ودى تسمى بالستات
//fRequest.open("GET",المكان اللى هيجيب منة الداتا,true or false)
//true=asyncrounous   false=syncrounous
//asyncrounous معناها ان الحااجة اللى بعدها هتشتغل لو دة مشتغلش
//syncrounous بينفذ بالترتيب  يعنى مينفعش اللى بعدها تتنفذ الا لما يتنفذ هو
fRequest.open("GET","ajax1.html")
fRequest.send(); //بعت الريكوست
console.log(fRequest.readyState)

//post
fRequest.open("POST","ajax1.html");
//لما بستخدم البوست لازم اكتب دى
fRequest.setRequestHeader("content-type","application/x-www-form-urlencoded")









