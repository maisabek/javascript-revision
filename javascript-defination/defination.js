/*

What is JavaScript?

JavaScript is a client-side and server-side (nodejs) scripting language inserted into HTML pages 
and is understood by web browsers. JavaScript is also an Object-based Programming language
مش لوحدهم يكفوا لكدة html ,css لان web page  على  actions , events باستخدمها بحيث اعمل من خلالها  
single thread programming ==> بتعمل حاجة واحدة فى وقت معين

______
Advantages of JavaScript ?

1. Speed

Since JavaScript is an ‘interpreted’ language, it reduces the time required by other programming
languages like Java for compilation. JavaScript is also a client-side script, speeding up the
execution of the program as it saves the time required to connect to the server.

2. Simplicity
JavaScript is easy to understand and learn. The structure is simple for the users as well as
the developers. It is also very feasible to implement, saving developers a lot of money for 
developing dynamic content for the web.

3. Popularity
Since all modern browsers support JavaScript, it is seen almost everywhere. All the famous 
companies use JavaScript as a tool including Google, Amazon, PayPal, etc.

4. Interoperability (التوفقية)
JavaScript works perfect with other programming languages and therefore numerous developers 
prefer it in developing many applications.We can embed it into any webpage or inside the script
of another programming language.

5. Versatility
JavaScript is now capable of front-end as well as back-end development. Back-end development uses 
NodeJS while many libraries help in front-end development like AngularJS, ReactJS, etc.

6. Less Overhead
JavaScript improves the performance of websites and web applications by reducing the code length. The codes contain less overhead with the use of various built-in functions for loops, DOM access, etc.

7. Server Load
As JavaScript operates on the client-side, data validation is possible on the browser itself
rather than sending it off to the server. In case of any discrepancy, the whole website needs 
not to be reloaded. The browser updates only the selected segment of the page.

8. Rich Interfaces
JavaScript provides various interfaces to developers for creating catchy webpages. Drag and drop
components or sliders may give a rich interface to the webpages. This leads to improved 
user-interactivity on the webpage.

9. Extended Functionality
Third-party add-ons like Greasemonkey (a Mozilla Firefox extension) allow the developers to add 
snippets of predefined code in their code to save time and money. These add-ons help the 
developers build JavaScript applications a lot faster and with much more ease than other 
programming languages.


______

Disadvantages of JavaScript ?

1. Client-side Security
Since the JavaScript code is viewable to the user, others may use it for malicious purposes.
These practices may include using the source code without authentication. Also, it is very easy
to place some code into the site that compromises the security of data over the website.

2-  Browser Support
The browser interprets JavaScript differently in different browsers. Thus, 
the code must be run on various platforms before publishing. The older browsers don’t 
support some new functions and we need to check them as well

3- Single Inheritance
JavaScript only supports single inheritance and not multiple inheritance. 
Some programs may require this object-oriented language characteristic

4- Lack of Debugging Facility
Though some HTML editors support debugging, it is not as efficient as other editors like
C/C++ editors. Also, as the browser doesn’t show any error, it is difficult for the developer 
to detect the problem

5. Sluggish Bitwise Function
JavaScript stores a number as a 64-bit floating-point number and operators operate on 32-bit
bitwise operands. Thus, JavaScript converts the number to 32-bits signed integers, operates on
them and converts them back to 64-bits JavaScript numbers. This continuous conversion takes more
time in conversion of number to an integer. This increases the time needed to run the script and 
reduces its speed.

6. Rendering Stopped
A single code error can stop the rendering of the entire JavaScript code on the website.
To the user, it looks as if JavaScript was not present. However, the browsers are extremely 
tolerant of these errors.
_______

Tips for Improving JavaScript Performance ?

1-  Avoid using global variables
Because the scripting engine needs to look through the scope when referencing global 
variables from within function or another scope, 
the variable will be destroyed when the local scope is lost. 
If variables in the global scope can not persist through the lifetime of the script,
the performance will be improved

2-Use web workers when you need to execute code that needs a lot of execution time
According to the Mozilla Developers Network (MDN) documentation: “Web Workers makes it possible
 to run a script operation in a background thread separate from the main execution thread 
 of a web application. 
The advantage of this is that laborious processing can be performed in a separate thread, 
allowing the main (usually the UI) thread to run without being blocked/slowed down.”

3-Avoid using too much memory
 هتحقق دة big o فهحتاج اشوف اى complex time , memory size اهتم بال 
فى شكل داتا crud operation وتخزين الداتا هتحتاج تختار اى استركشر معين يحقق هدفك زى 
مع الوقت يكون تكلفة صيانتة project scale بحيث تقدر توصل عشان لو ال design pattern  وهحتاج اى
اقل
You should always try to limit memory use to what is absolutely necessary, because is not 
possible to know how much memory is required by the device being used to run your app.
 Any time your code requests that the browser reserve new memory, the browser’s garbage 
 collector is executed, and JavaScript is stopped. If this happens frequently, the page 
 will work slowly

4-Minimize DOM access
Interaction of host browser with objects (DOM) that takes place outside the JavaScript native 
environment results in a significant amount of performance lag and unpredictability. 
This happens since browser has to refresh every time. To avoid this, you can simply
minimize the access of DOM. There are a few ways by which you achieve this. 
For example, you can store references to the browser objects or you can decrease 
the overall DOM traversal trips

5-Use tools to detect problems
Lighthouse ( is an open-source, automated tool for improving the quality of web pages.) 
is a good performance tool for web pages, it helps you to audit performance, 
accessibility, best practices, and SEO. Google PageSpeed is designed to help developers 
understand a website’s performance optimizations and areas for potential improvement. 
The components are built to identify faults in a website’s compliance with Google’s Web 
Performance Best Practices, as well as automate the adjustment process.

In Chrome you can also use, the More Tools option in the main menu to see the memory and 
the CPU used by each tab. For even more advanced analysis, you can use the developer tools
 Performance view in either Firefox or Chrome to analyze different metrics
 For example
The performance analysis of devtools allows you to simulate CPU consumption,
network, and other metrics while the page is being loaded, so you can identify 
and fix problems.

6-Avoid unwanted loops
Looping in JavaScript is not considered as a good thing since it puts extra strain on the 
browser. It’s important to note that you do less work in the loop. The lesser work you do 
in the loop the faster it will make your loop. Moreover, there are some simple tricks, 
one of which is of storing an array’s length in a different variable instead of reading
 the length at each iteration of the loop. 
This could go a long way to optimize your code and run things in a more efficient manner.

7-Boost performance by caching object
You can do this in two ways. The first is to use the HTTP protocol cache. 
And the second is to use JavaScript Cache API, which can be done with service worker 
installation. Generally, scripts are used for accessing certain objects. 
You can achieve significant improvement in performance by using a variable in 
references to that object or by simply storing the repeated access object inside the 
user-defined variable
______
SEO (Search Engine Optimization)
عشان اخلى الموقع بتاعى يتصدر محركات البحث
_____

types of api?
1- app cache
ولو دخلت عليةonline يعنى ادخل مرة علية وانا  offline browsing ان الابلكشن بيشتغل حتى لو  
بيشتغل offline تانى وانا
بتتحمل اسرع cached resourceفال speed وبتكون
server load وممكن نحتاج نتواصل مع السرفير فدا بيقلل ال  

To enable application cache, include the manifest attribute in the document's <html> tag:
<html manifest="demo.appcache"></html>
Every page with the manifest attribute specified will be cached when the user visits it.
 If the manifest attribute is not specified, the page will not be cached 
 (unless the page is specified directly in the manifest file)

The manifest file is a simple text file, which tells the browser what to cache 
(and what to never cache).
  
2- web workers
A web worker is a JavaScript that runs in the background, 
independently of other scripts, without affecting the performance of the page
You can continue to do whatever you want: clicking, selecting things, etc.,
while the web worker runs in the background.

background وبيخلى الاسكربت دة يشتغل فى  html اسكربت يعمل فى صفحة 
يعنى لو عملت اى حاجة فى الصفحة الاسكربت بيفضل شغال 


<script>
var w;
function startWorker() {
     var first=document.getElementById("myInp1")
        var second=document.getElementById("myInp2")
        var myWorker = new Worker('defination.js');

    first.onchange = function() {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}
function stopWorker() {
    w.terminate();
    w = undefined;
}
</script>

3- SSE (Server-Sent Events )
event automatically سرفير بيبعت 
A server-sent event is when a web page automatically gets updates from a server.

بالوقت جديد update هنا السرفير هيبعت كل 3 ثوانى  
var source = new EventSource("demo_sse.php");
source.onmessage = function(event) {
    document.getElementById("result").innerHTML += event.data + "<br>";
}

<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$time = date('r')
echo "data: The server time is: {$time}\n\n"
flush()
?>
_____
Is JavaScript an object oriented language or not ?

To be more precise, JavaScript is a prototype based object oriented language,
which means it doesn't have classes rather it define behaviors using 
constructor function and then reuse it using the prototype

ex:

function User(name) {
    this.name = name;
    this.welcome = function () {
      return `Welcome ${this.name}`;
    }
}
  
  let user1 = new User("Osama");
  console.log(user1)
  console.log(user1.welcome) // body function هيطبع ال   

  User.prototype.addTitle = function (){ //هيضيف الفنكشن جوة البروتوتايب
    return `Mr. ${this.name}`;
  }
  console.log(user1.addTitle()) // Mr . Osama

// Prototype  كل ما بعمل فنكشن جديدة فى ديفلت فنكشن بتتنشأ للفنكشن دى اللى هى ال
_______

difference between get and post and PUT  ?

GET :
You can use this method only to retrieve data from the address bar in the browser.
GET requests can be cached
GET requests remain in the browser history
GET requests can be bookmarked
GET requests should never be used when dealing with sensitive data
GET requests have length restrictions
GET requests are only used to request data (not modify

POST :  
Data passed using the POST method will not visible in query parameters in browser URL.
POST requests are never cached
POST requests do not remain in the browser history
POST requests cannot be bookmarked
POST requests have no restrictions on data length

PUT :
PUT is used to send data to a server to create/update a resource.

The difference between POST and PUT is that 
PUT requests are idempotent. That is, calling the same PUT request multiple times will
always produce the same result. In contrast,
calling a POST request repeatedly have side effects of creating 
the same resource multiple times.

DELETE :
DELETE method deletes the specified resource.

The OPTIONS method describes the communication options for the target resource.
 
________

What is OOPS Concept in JavaScript?

Many times, variables or arrays are not sufficient to simulate real-life situations.
JavaScript allows you to create objects that act like real-life objects.
A student or a home can be an object that has many unique characteristics of its own.
You can create properties and methods for your objects to make programming easier.
If your object is a student, it will have properties like the first name, last name, id, 
etc., and methods like calculating rank, change address, etc. If your object is a home,
it will have properties like a number of rooms, paint color, location, etc. 
The methods like to calculate area, change owner, etc.

How to Create an Object
You can create an object like this:

var objName = new Object();
objName.property1 = value1;
objName.property2 = value2;
objName.method1 = function(){
line of code	
}
OR
var objName= {
    property1:value1, 
    property2:value2,
     method1: function(){ lines of code} 
    }

________

what is difference between this and that in javascript?

this ==> is a variable that gets the context of the current function 
(which depends on how it was called).
javascript keyword
  موجودة جو الفنكشن او الميثود وظيفتها بتخلينى استحدم الفنكشن دى مع اوبجكيت مختلفة 
     functionality نقدر نستفيد من ال 
  الموجودة جو الاوبجكيت property الموجودة فى الفنكشن دى مع الاوبجكيت دة ونقدر نستعمل ال

that ==> It is just a variable to which a value has been assigned.

____________


eventObj .stopPropagation();
It will stop event propagation to the parent of the target element in Bubbling Phase only.

__________

What is Loop Though the Properties of an Object?
The for/in a loop 
but the object's name should be the same as an already existing object you need to loop through.

__________

Enumerate the differences between Java and JavaScript?

Java is a complete programming language.
Java is an object-oriented programming (OOPS) or structured programming languages like C++ or C, 

JavaScript is a coded program that can be introduced to HTML pages (HTML هو برنامج مشفر يمكن تقديمه لصفحات)
JavaScript is a client-side scripting language

_________

What is the use of isNaN function?

isNaN function returns true if the argument is not a number; otherwise, it is false.

_________

What is negative Infinity?

Negative Infinity is a number in JavaScript which can be derived by dividing negative number by zero

________


What are undeclared and undefined variables?

Undeclared variables are those that do not exist in a program and are not declared. 
If the program tries to read the value of an undeclared variable, then a runtime error is 
encountered.

Undefined variables are those that are declared in the program but have not been given any 
value. If the program tries to read the value of an undefined variable, an undefined value is 
returned.
_________

Write the code for adding new elements dynamically?

<script type="text/javascript"> 
    function addNode () { 
    var newP = document.createElement("p"); 
    var textNode = document.createTextNode(" This is a new text node"); 
    // add style
    newP.style.backgroundColor = 'yellow';
    newP.style.color = 'red';
    newP.appendChild(textNode);
    document.body.appendChild(newP)
  } 
  // create img
  function GFG_Fun(){
    var img = document.createElement('img');
    img.src ='https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    document.body.appendChild(img);
  }
  addNode()
  GFG_Fun()
</script>

_________

What are global variables? How are these variable declared?

Global variables are available throughout the length of the code so that it has no scope. 
The var keyword is used to declare a local variable or object. 

ex:

function myFun(){
  var x=5 // local variable
}

automatic global ==> If the var keyword is omitted, a global variable is declared
global ل local اللى قبل الاكس كدة حول من var لو شيلت كلمة 

ex:

function myFun(){
   x=5 // global variable
}
myFun()
alert(x)

__________

What is the working of timers in JavaScript?

setTimeout, setInterval , and clearInterval.
__________

What is a prompt box?

A prompt box is a box that allows the user to enter input by providing a text box.
A label and box will be provided to enter the text or number

__________

What is the difference between ViewState and SessionState ?

'ViewState'
بتخزن معلومات اقدر اعملها اكسس فى نفس البايج
It can be used to store information that you wish to access from same web page
 is specific to a page in a session.
 View state can only be visible from a single page and not multiple pages.
 Maintained at page level only.
 View state will retain values in the event of a postback operation occurring.
 View state is used to allow the persistence of page-instance-specific data

 ViewState is a Server Side class object which though stores the data on Client Side 
 but it is in Encrypted Form (Hashed format) and hence cannot be read by Plain JavaScript
 the ViewState variable is accessed inside JavaScript code with the help of Server Side 
 Code Blocks

 ex:
 الفنكشن دى مبنية فى الباك
 protected void Page_Load(object sender, EventArgs e){
    ViewState["Message"] = "Hello Mudassar";
 }

<head runat="server">
 <script type="text/javascript">
        var message = '<%=ViewState["Message"].ToString() %>';
        alert(message);
  </script>
</head>

___

SessionState 
   بتخزن معلومات اقدر اعملها اكسس فى اكتر من البايج
 It can be used to store information that you wish to access on different web pages.
 SessionState is the data of a user session and is maintained on the server side.
 This data available until user closes the browser or session time-outs

is specific to user-specific data that can be accessed across all web application pages
(خاصة بالبيانات الخاصة بالمستخدم والتي يمكن الوصول إليها عبر جميع صفحات تطبيق الويب)
 Maintained at session level.
 Session state value availability is in all pages available in a user session.
 Information in session state stored in the server
 In session state, user data remains in the server.  The availability of the data is 
 guaranteed until either the user closes the session or the browser is closed.
 Session state is used for the persistence of user-specific data on the server’s end.

__________

How you can submit a form using JavaScript?

To submit a form using JavaScript use
document.form[0].submit()

_____________

Does JavaScript support automatic type conversion?
Yes

____________
type conversion ==>
is the process of converting data of one type to another.
For example: converting String data to Number.

There are two types of type conversion in JavaScript.

1- Implicit Conversion - automatic type conversion
2- Explicit Conversion - manual type conversion

1- Implicit Conversion - automatic type conversion
JavaScript automatically converts one data type to another (to the right type).

Example 1: Implicit Conversion to String
// numeric string used with + gives string type
let result;
result = '3' + 2; 
console.log(result) // "32"
result = '3' + true; 
console.log(result); // "3true"

Example 2: Implicit Conversion to Number
// numeric string used with - , / , * results number type
let result;
result = '4' - '2'; 
console.log(result); // 2
result = '4' - 2;
console.log(result); // 2
result = '4' * 2;
console.log(result); // 8
result = '4' / 2;
console.log(result); // 2

Example 3: Non-numeric String Results to NaN
// non-numeric string used with - , / , * results to NaN
let result;
result = 'hello' - 'world';
console.log(result); // NaN
result = '4' - 'hello';
console.log(result); // NaN

Example 4: Implicit Boolean Conversion to Number
// if boolean is used, true is 1, false is 0
let result;
result = '4' - true;
console.log(result); // 3
result = 4 + false;
console.log(result); // 4

Example 5: null Conversion to Number
// null is 0 when used with number
let result;
result = 4 + null;
console.log(result);  // 4
result = 4 - null;
console.log(result);  // 4

Example 6: undefined used with number, boolean or null
// Arithmetic operation of undefined with number, boolean or null gives NaN
let result;
result = 4 + undefined;
console.log(result);  // NaN
result = 4 - undefined;
console.log(result);  // NaN
result = true + undefined;
console.log(result);  // NaN
result = null + undefined;
console.log(result);  // NaN


2- Explicit Conversion - manual type conversion
explicit type conversions are done using built-in methods.

To convert numeric strings and boolean values to numbers, you can use Number().
For example
let result;
// string to number
result = Number('324')
console.log(result); // 324
result = Number('324e-1')  
console.log(result); // 32.4
// boolean to number
result = Number(true);
console.log(result); // 1
result = Number(false);
console.log(result); // 0

empty strings and null values return 0. For example
let result;
result = Number(null);
console.log(result);  // 0
let result = Number(' ')
console.log(result);  // 0

If a string is an invalid number, the result will be NaN. For example,
let result;
result = Number('hello');
console.log(result); // NaN
result = Number(undefined);
console.log(result); // NaN
result = Number(NaN);
console.log(result); // NaN

You can also generate numbers from strings using parseInt(), parseFloat(), 
unary operator + and Math.floor(). For example,
let result;
result = parseInt('20.01');
console.log(result); // 20
result = parseFloat('20.01');
console.log(result); // 20.01
result = +'20.01';
console.log(result); // 20.01
result = Math.floor('20.01');
console.log(result); // 20

Convert to String Explicitly
To convert other data types to strings, you can use either String() or toString(). For example
//number to string
let result;
result = String(324);
console.log(result);  // "324"
result = String(2 + 4);
console.log(result); // "6"
//other data types to string
result = String(null);
console.log(result); // "null"
// using toString()
result = (324).toString();
console.log(result); // "324"
result = true.toString();
console.log(result); // "true"

Note: String() takes null and undefined and converts them to string. However,
toString() gives error when null are passed.

Convert to Boolean Explicitly
you can use Boolean().
undefined, null, 0, NaN, '' converts to false. For example,
let result;
result = Boolean('');
console.log(result); // false
result = Boolean(0);
console.log(result); // false
result = Boolean(undefined);
console.log(result); // false
result = Boolean(null);
console.log(result); // false
result = Boolean(NaN);
console.log(result); // false

All other values give true. For example
result = Boolean(324);
console.log(result); // true
result = Boolean('hello');
console.log(result); // true
result = Boolean(' ');
console.log(result); // true

Convert Date to Number
// program to convert date to number
// create date
const d1 = new Date();
console.log(d1); // Mon Nov 09 2020 10:52:32 GMT+0545 (Nepal Time)
// converting to number
const result = d1.getTime();
console.log(result); // 1604898452084

// program to display the date
// get local machine date time
const date = new Date()
// get the date as a string
const n = date.toDateString()
// get the time as a string
const time = date.toLocaleTimeString()
// display date
console.log('Date: ' + n)
// display time
console.log('Time: ' + time)
________
How can the style/class of an element be changed?
It can be done in the following way:
document.getElementById("myText").style.fontSize = "20";
or
document.getElementById ("myText").className = "anyclass";

__________

How can you convert the string of any base to an integer in JavaScript?

The parseInt() function
takes the string to be converted as its first parameter.
The second parameter is the base of the given string.
parseInt ("4F", 16)

______________

What is called Variable typing in Javascript?

Variable typing is used to assign a number to a variable. 
The same variable can be assigned to a string.

Example
i = 10;
i = "string;"
_____________

How to detect the operating system on the client machine?
The navigator. 
appVersion string 

alert('Your browser version is' + navigator.appVersion);
output
Your browser version is
5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124
Safari/537.36

___________

What do you mean by NULL in Javascript?

The NULL value is used to represent no value or no object.
It implies no object or null string, no valid boolean value, no number, and no array object

_____________

What is the function of the delete operator?

The delete keyword is used to delete the property as well as its value.
var student= {age:20, batch:"ABC"}
Delete student.age
___________

What is an undefined value in JavaScript?

Undefined value means the

Variable used in the code doesn't exist
Variable is not assigned to any value
Property does not exist
_________

What are all the types of Pop up boxes available in JavaScript?

Alert
Confirm 
Prompt

_________

What is the use of Void (0)?

Void(0) is used to prevent the page from refreshing, 
and parameter "zero" is passed while calling.
Void(0) is used to call another method without refreshing the page
do nothing - don't reload, don't navigate, do not run any code.

<a href="javascript:void(0)">Link</a> // doesn't navigate to a new page
0 is an argument passed to void that does nothing, and returns nothing.

<a id='link' href="javascript:void(document.querySelector('#link').style.color = 'green')">
Link</a>  //the link element run some code but it maintains the same page.

With void, it tells the browser not to return anything (or return undefined).

void 2 == '2';   // (void 2) == '2', returns false
void 2 == 2; // false
void (2 == '2'); // void (2 == '2'), returns undefined

________

How can a page be forced to load another page in JavaScript?
<script language="JavaScript" type="text/javascript">
location.href="https://eduladder.com/viewquestions/19522/How-can-a-page-be-forced-to-load-another-page-in-JavaScript"
</script>
_________

What is the difference between an alert box and a confirmation box?

An alert box displays only one button, which is the OK button.
But a Confirmation box displays two buttons, namely OK and cancel.

_________

What are escape characters?

Escape characters (Backslash) is used when working with special characters like single quotes, 
double quotes, apostrophes, and ampersands.
Place backslash before the characters to make it display

document.write("I m a \"good\" boy.")

________
What is unescape() and escape() functions?

The escape() 
function is responsible for coding a string to transfer the information from one 
computer to the other across a network.

For Example:
<script>document.write(escape("Hello? How are you!"))</script>
Output: Hello%3F%20How%20are%20you%21

The unescape()
function is very important as it decodes the coded string.It works in the following way. 

For example:
<script>document.write(unescape("Hello%3F%20How%20are%20you%21"))</script>
Output: Hello? How are you

________
Does JavaScript has concept level scope?

No. JavaScript does not have concept-level scope. 
The variable declared inside the function has scope inside the function

______

What is lexical scope or Closure?
Lexical scope is the ability for a function scope to access variables from the parent scope.
We call the child function to be lexically bound by that of the parent function.

لو معرفة فنكشن داخل فنكشن  مسموح انى انادى على المتغير اللى برة جو الفنكشن التانية

ex1 : 
var work=function(){
  var x=5
  var fun1=function(){
   alert(x)
  }

  fun1()
}
work() // عشان دى تشتغل لازم انادى على الفنكشن اللى جوها جو الفنكشن دى

ex2:

function func1(){
  var x=3
  function func2(){
    alert(x) // مسموح ان انادى على المتغير دة هنا
    function func3(){
      alert(x) // مسموح ان انادى على المتغير دة هنا
      var y=7 // دة برة الفنكشن دى y مش مسموح ان انادى على المتغير 
    }
  }
}
_______

How closures work in JavaScript?
  
The closure is a locally declared variable related to a function that stays in memory 
when it has returned.

function greeter(name, age) {
    var message = name + " says howdy!! He is " + age + " years old";
    return function greet() {
        console.log(message)
    }
}
// Generate the closure
var JamesGreeter = greeter("James", 23)
// Use the closure
JamesGreeter()

_________

What are the disadvantages of using innerHTML in JavaScript?

1- The innerHTML does not provide validation, and therefore we can potentially insert valid 
and broken HTML in the document and break it

2- If you use innerHTML in JavaScript
the disadvantage is Content is replaced everywhere
We cannot use it like "appending to innerHTML
Even if you use +=like "innerHTML = innerHTML + 'html'" still the old content is replaced
by html
The entire innerHTML content is re-parsed and builds into elements. Therefore, it's much slower

_______

Why you should not use innerHTML in JavaScript?

innerHTML content is refreshed every time and thus is slower. 
There is no scope for validation in innerHTML. Therefore, 
it is easier to insert rogue code in the document and make the web page unstable

__________

What are the two basic groups of data types in JavaScript?

They are as—Primitive
Reference types

Primitive types are number and Boolean data types. 
Reference types are more complex types like strings and dates

___________

How can generic objects be created?

Generic objects can be created as:
var I = new object()
________

Which keywords are used to handle exceptions?

Try… Catch 
finally is used to handle exceptions in the JavaScript

Try{
    Code
}
Catch(exp){
    Code to throw an exception.
}
Finally{
    Code runs either it finishes successfully or after catch
}
__________

What are the different types of errors in JavaScript?

There are three types of errors:
1- Load time errors

وال syntax errors الاخطاء اللى بتظهر عند تحميل صفحة الويب زى ال 

Errors that come up when loading a web page, like improper syntax errors, 
are known as Load time errors and generate the errors dynamically

<script language="JavaScript" type="text/javascript">
 window.onerror = function () {
    alert(''An error has occurred. Please resolve'');
    }
  </script>


2- Runtime errors
A runtime error is an error that occurs during the running of the program,
 also known as the exceptions. In the example that is given below the syntax is correct, 
 but at runtime, it is trying to call a method that does not exist
 <script type="text/javascript">
 // An runtime error here 
      window.printme();
  </script>
Notice that there is no printme function defined. This program will raise an error at 
runtime as the function which is not present is called, although the syntax is correct
As in runtime error, there are exceptions and this exception is correct 
by the help of the try and catch method

3- Logical Errors 
These are the errors that occur due to the bad logic performed on a function with a different 
operation
they occur when you make a mistake in the logic that drives your script and 
you do not get the result you expected
_______

What is the use of the blur function?
Blur function is used to remove the focus from the specified object.

_______

What is the difference between JavaScript and Jscript and ECMAScript?

Both of them can used on Client Side and  performance is fast enough.

JavaScript: 
JavaScript (the Netscape/Mozilla implementation of the ECMA specification)
It is a scripting language whose trademark is Oracle Corporation.
It’s code only run in web browser
It cannot access web browser objects

JavaScript is popular language because it is executed in any browser
It does not support active content creation
One need to handle multiple browser compatibility by writing code
JavaScript is a language based on ECMAScript

JScript: 
It is also a scripting language but owned by Microsoft.
It’s code run in microsoft browser
It can access objects of microsoft browser such as ActiveXObject constructor

is Microsoft's implementation of the ECMAScript specification
 JScript is not popular language because it limited to internet explorer
 It can create active online content for WWW
It’s only support Microsoft Internet Explorer.

ECMAScript:
ECMAScript is a Standard for scripting languages such as JavaScript, JScrip

JScript and JavaScript are different names for the same language.
They have different names to avoid trademark issues.
_______

difference between jQuery and JavaScript ?

jQuery
الجافا اسكربت كانت عميقة وبتحتاج تكتب كود كبير عشان تعمل 
jQuery حاجة بسيطة بيها فظهرت ال  
عشان تحل المشكلة دى وتقدر
تكتب جافا اسكربت بشكل اسهل وسطور كود اقل

web,mobile,desktop الجافا سكربت دلوقتى اتطورت كتير وبقت موجودة فكل مكان عال 
jQuery وبقا سهل كتابتها والتعامل معاها بالاضافة لوجود الفريم وركس فمبقاش فى حاجة لل 

is a fast and concise JavaScript library created by John Resig in 2006
minimizes the code and is easier to use.
jQuery is automatically optimized to work with a lot of browsers
jQuery simplifies HTML document traversing, event handling, animating, 
and Ajax interactions for Rapid Web Development.

_______
How are object properties assigned?
obj["class"] = 12;
or
obj.class = 12

________
sloppy mode = non strict mode
دا الوضع الديفلت
_________

What is the 'Strict Mode in JavaScript, and how can it be enabled?

1- Under the strict Mode, JavaScript shows errors for a piece of code which did not show an 
error before
عشان يخلى الاداء بتاع الجافا اسكربت منطقى اكتر 
مش هيطلع ايرور sloppy mode يعنى لو انا عرفت متغير من غير ما اديلة داتا تايب فى ال  
هيطلع ايرور strict mode  انما فى ال 

طب فى حالة انى معرفة فنكشن وادتها متغيران بنفس الاسم 
function sum(x,x){
  console.log(x)
}
sum(4,5)
 5 هيطبع sloppy mode هنا فى ال 
 هيطلع ايرور بالشكل دة strict mode اما فى ال  
"Duplicate parameter name not allowed in this context"

new لو نسيت كلمة constructor function فى حالة ال 
function F(){
  this.x=5  // this ==> global هنا بتشاور على الوندو فبيروح ينشأ المتغير اكس فى ال 
}
let c =F()
console.log(c.x)
هنا هيعتبر انى بنادى على الفنكشن مش باخد اوبجكيت منها 
ففى السطر اللى بعدة هيطلع ايرور 
 x لانة مش اوبجكيت عشان ينادى على ال 
هيطلع ايرور عند الاكس انة مش متعرف strict Mode لو حطات ال 
new فلازم يحط كلمة 

let s ="hello"
s.length=10
console.log(s.length)
فى الوضع العادى هتطبع 5 اما 
10 مينفعش اعدل عليهاواخليها ب  read only دى s.length هيطلع ايرور لان strict mode  فى وضع ال 

2- Strict Mode also solves some mistakes that hamper the JavaScript engines from working 
efficiently  يحل بعض الأخطاء التي تعيق عمل محركات جافا اسكربت  بكفاءة

_________

What is the way to get the status of a CheckBox?
 alert(document.getElementById('checkbox1').checked); 
If the CheckBox is checked, this alert will return TRUE

_________

What is a window.onload and onDocumentReady?

“window.onload” 
images , objects زى ال resources يحمل الدوم وكل ال browser بينفذ الكود لما ال
1- will execute code when browser has loaded the DOM tree and 
all other resources like images, objects, etc.

2- is not cross-browser compatible
window.onload= function(){ //بعد ما تعمل لوود للصفحة نفذ الكوود دة
document.getElementById("test").innerHTML="ooofff";
}

onDocumentReady 
  images , objects زى ال resources يحمل الدوم بدون ما ينتظر ال browser بينفذ الكود لما ال
1- executes when the DOM tree is built, 
without waiting for other resources to load. 
This allows executing the code against the DOM faster with onDocumentReady.
2- jQuery’s document.ready() will work nicely on all browsers.

_______

How can a value be appended to an array?
arr[arr.length] = value

_________

What is event bubbling?
 بتوعة parent وعملت ايفنت على اتشيلد كأنى عملتة على ال element جو element لما يبقى عندى 
JavaScript allows DOM elements to be nested inside each other. 
In such a case, if the handler of the child is clicked, 
the handler of the parent will also work as if it were clicked too

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
 يعنى كأنى عملت كلك على الديف والفورم form وعلى ال div هينفذ على P لما اضغط على ال 

_________

 What are the important properties of an anonymous function in JavaScript?
  فنكشن ملهاش اسم
 A function that is declared without any named identifier 
 In general, an anonymous function is inaccessible after its declaration

 var anon = function() {
    alert('I am anonymous');
  };
anon();

______________

What boolean operators can be used in JavaScript?
'And' Operator (&&), 
'Or' Operator (||), 
 the 'Not' Operator (!) 

_________

 How can a particular frame be targeted, from a hyperlink, in JavaScript?
 This can be done by including the name of the required frame in the hyperlink using 
 the 'target' attribute
 <a href="/newpage.htm" target="newframe">>New Page</a>

_________

Write the point of difference between a web garden and a web farm?

Both web-garden and web-farm are web hosting systems. The only difference is that 

web-garden 
اللى بترن processes بتحتوى على سرفير واحد ايا كان عدد ال 
 less amount of physical space وبتتطلب 
is a setup that includes many processors in a single server.
Web Garden consists of a single server on which any number of processes can be run
This provides logical scalability to web applications
Web Garden requires less amount of physical space
It needs a Machine.Configfile to group together multiple web servers
A Web Garden is achieved by enabling multiple worker processes for single application pool.
It provides better application availability compare to Web Farm

web-farm 
بتحتوى على اكتر من سرفير بتقدر ترن على اكتر من سرفير 
cases فى بعض ال performance وبتساعد ان احسن ال 
Web Garden مقارنة بال high availability وبتوفر 
is a larger setup that uses more than one server
Web Farm has the ability to runs across multiple servers.
This provides physical scalability to web applications
Web Farm helps to improve performance in some cases
A Web Farm uses a load balancer to group together multiple web servers.
But the Web Farm is achieved by using load balancer with virtual IP
But Web Farm provides high availability compare to Web Garden

____________

How are object properties assigned?

 in the same way as a value is assigned to a variable.
For example, 
a form object's action value is assigned as 'submit' in the following manner - Document.
form.action="submit"

_________

What is the method for reading and writing a file in JavaScript?

There are two ways to do it:
1-  Using JavaScript extensions (runs from JavaScript Editor),example

    file = fopen(getScriptPath(), 0)  // to open a file 
    str = fread(file,flength(file);  //  fread() is used for reading the file content.
    fwrite(file, str)  // fwrite() is used to write the contents to the file.
 
    Example:
    file = fopen("c:\MyFile.txt", 3);// opens the file for writing
    fwrite(file, str);// str is the content that is to be written into the file

2- Using a web page and ActiveX objects (Internet Explorer only)
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var s = fso.OpenTextFile("C:\\example.txt", 1, true);

________

How are DOM utilized in JavaScript?
(dom = programming interface for html,xml)
DOM (Document Object Model) 
is responsible for how various objects in a document interact with each other. 
DOM is required for developing web pages, which includes objects like paragraphs, 
links, etc. These objects can be operated to include 
actions like add or delete.
DOM is also required to add extra capabilities to a web page. On top of that,
the use of API gives an advantage over other existing models.
_____

What is DOM in JavaScript?
JavaScript can access all the elements in a web page using the Document Object Model (DOM).
The web browser creates a DOM of the webpage when the page is loaded
    
______

Bom => Browser object model
// بتتعامل مع البروزير والاكشن بيتعامل مع البروزير ملوش علاقة بالصفحة

_______

How are event handlers utilized in JavaScript?

Events 
are the actions that result from activities, such as clicking a link or
filling a form by the user
commom HTML events: (onchange,onclick,onmouseover,onmouseout,onkeydown,onload)

An event handler
is required to manage the proper execution of all these events. 
Event handlers are an extra attribute of the object. 
This attribute includes the event's name and the action taken if the event takes place

_______

What is the role of deferred scripts in JavaScript?
document لل parse ينفذ الاسكربت بعد ما يعمل head جو ال scripts لما يعمل 
head يعنى كأن حط الاسكربت دة فى الاخر مش فى ال 

The defer is a Boolean value, 
used to indicate that script is executed after the document has been parsed. 
It works only with external scripts (i.e., works only when we are 
specifying the src attribute in <script> tag). 
It declares that the script will not create any content. 
So, the browser can continue the parsing of the rest of the page. 
The <script> with the defer attribute does not block the page

The defer attribute is not allowed in older browsers, 
so for older browsers we have to use the alternative of the defer attribute. 
The alternative solution is that we must have to specify
the <script> section just before the </body> tag of HTML file. It can be done as follows:

<!DOCTYPE html>  
<html>  
<head>  
<script src = "myscript.js" defer></script>  
  
</head>  
<body>  
<div>  
<h1> javaTpoint.com </h1>  
<h3> This is an example of defer attribute.  </h3>  
</div>  
</body>  
</html>

_______

What are the various functional components in JavaScript?

The different functional components in JavaScript are-

1- First-class functions: 
Functions in JavaScript are utilized as first-class objects.
This usually means that these functions can be passed as arguments to other functions, 
returned as values from other functions,
assigned to variables, or can also be stored in data structures.

const Arithmetics = {
    add:(a, b) => {
        return `${a} + ${b} = ${a+b}`;
    },
    subtract:(a, b) => {
        return `${a} - ${b} = ${a-b}`
    }
}
console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7));

2- Nested functions (Higher-Order Function): 
The functions, which are defined inside other functions, are called Nested functions. 
They are called 'every time the main function is invoked

const greet =  function(name){
    return function(m){
   
        console.log(`Hi!! ${name}, ${m}`);
    }
}
const greet_message = greet('ABC');
greet_message("Welcome To GeeksForGeeks")

_________



What are the decodeURI() and encodeURI()?

EncodeURl() 
is used to convert URL into their hex coding. 

DecodeURI() 
is used to convert the encoded URL back to normal.

<script>
   var uri="my test.asp?name=ståle&car=saab";
   document.write(encodeURI(uri)+ "<br>");
   document.write(decodeURI(uri));
</script>

Output 
my%20test.asp?name=st%C3%A5le&car=saab
mytest.asp?name=ståle&car=saab

_________

What does the following statement declare?

var myArray = [[[]]]
It declares a three-dimensional array

________

How are JavaScript and ECMA Script related?

ECMA Script is like rules and guidelines, 
while Javascript is a scripting language used for web development
ECMAScript is a Standard for scripting languages such as JavaScript, JScript, etc.

_______

What is namespacing in JavaScript, and how is it used?

Namespacing is used for grouping the desired functions, variables, etc.,
under a unique name.It is a name that has been attached to the desired functions, 
objects, and properties. This improves modularity in the coding and enables code reuse

var <namespace> = {} // To initialise an empty namespace
<namespace>.<identifier>  // To access variables in the namespace

<script>
var car = {
    startEngine: function () {
        console.log("Car started")             
    }        
}
var bike = {
    startEngine: function () {
        console.log("Bike started")
    }
}
car.startEngine();
bike.startEngine();
</script>

_____

What are the important JavaScript Array Method explain with example?

JavaScript Array Methods
The Array object has many properties and methods which help developers to handle arrays 
easily and efficiently. 
You can get the value of a property by specifying arrayname.property 
and the output of a method by specifying arrayname.method()

length property
prototype property
reverse method
sort method
pop method
shift method
push method

_____

What is JavaScript Unit Testing ?

a web page  بستخدمها عشان اعمل بيها تيست على كود لل testing method عبارة عن 
 functionalities work fine عشان يتأكد ان كل ال 
separate module عشان تتنفذ  several tests بتحتوى على suite كل test suite بتكون منظمة فى 


JavaScript Unit Testing is a testing method in which JavaScript tests code written for 
a web page or web application module. 

It is combined with HTML as an inline event handler and executed in the browser 
to test if all functionalities work fine. 

These unit tests are then organized in the test suite.
Every suite contains several tests designed to be executed for a separate module.
Most importantly,they don't conflict with any other module and run with fewer dependencies
on each other (some critical situations may cause dependencies).

npm install --save-dev jest

 // subtraction_spec.js
var expect = require('chai').expect

describe('subtraction', function () {
  var subtraction = require('../WHEREVER')  
  it('only works with numbers', function () {
   expect(subtraction("A","B").to.throw("subtraction only works with numbers!");
  })
})

//subtraction.js
function subtraction (number1, number2) {
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    throw Error('subtraction only works with numbers!')
  }
  return number1 - number2
}


Finally, run yarn test or npm run test
_______

what are the challenges in JavaScript Unit Testing?

Here are important challenges of JavaScript Unit Testing:

1- Many other languages support unit testing in browsers, in the stable as well as
in runtime environment, but JavaScript can not

2- You can understand some system actions with other languages, but this is not the case 
with JavaScript

3- Some JavaScript are written for a web application that may have multiple dependencies.

4- JavaScript is good to use in combination with HTML and CSS rather than on the web

// DOM صعوبات في عرض الصفحة ومعالجة 
5- Difficulties with page rendering and DOM manipulation 

 example.js أحيانًا تجد رسالة خطأ على شاشتك بخصوص تعذر تحميل 
 آخر يتعلق بالتحكم في الإصدار JavaScript أو أي خطأ
 .Unit Testing JavaScript تأتي هذه الثغرات الأمنية ضمن  
6- Sometimes you find an error message on your screen regarding 'Unable to load example.js'
or any other JavaScript error regarding version control.
These vulnerabilities come under Unit Testing JavaScript
_____

Solutions of JavaScript Unit Testing:
To avoid such issues, what you can do is;

1- Do not use global variables.
2- Do not manipulate predefined objects.
3- Design core functionalities based on the library.
4- Try to create small pieces of functionalities with lesser dependencies.

______

The predefined core objects
can be used in either client-side or server-side scripts 
are Array , Boolean , Date , Function , Math , Number , RegExp , and String 

_______

Why is embedded JavaScript used?
user events بتجيب على  HTML ان ال 

Client-side JavaScript statements embedded in an HTML page can respond to user events such as 
mouse-clicks, form input, and page navigation
For example, you can write a JavaScript function to verify that users enter valid information
into a form requesting a telephone number or zipcode

_______

global functions:

directly return their results to the caller.
eval()  - uneval() - isFinite() - isNaN() - parseFloat()
parseInt() - encodeURI() - encodeURIComponent()

________

What is the core of JavaScript?

Core JavaScript 
is the basic of the JavaScript language supports both the client and server side
client-side JavaScript has core JavaScript elements. For functioning, it also has properties
and methods ,which helps developers
Server-side JavaScript, as the name suggests runs on server-side

________

What are some important JavaScript Unit Testing Frameworks?

1- Unit.js:
It is known as an open-source assertion library running on browser and Node.js.
It is extremely compatible with other JavaScript Unit Testing frameworks like 
Mocha, Karma, Jasmine, QUnit, Protractor, etc. 
Provides the full documented API of assertion list.

2- QUnit: 
It is used for both client-side and server-side JavaScript Unit Testing.
This Free JavaScript testing framework is used for jQuery projects.
It follows Common JS unit testing Specification for unit testing in JavaScript. 
It supports the Node Long-term Support Schedule.

3- Jasmine:
Jasmine is the behavior-driven development framework to unit test JavaScript. 
It is used for testing both synchronous and asynchronous JavaScript codes.
It does not require DOM and comes with an easy syntax that can be written for any test.

4- Karma:
Karma is an open-source productive testing environment.
Easy workflow control running on the command line. 
Offers the freedom to write the tests with Jasmine, Mocha, and QUnit.
You can run the test on real devices with easy debugging.

5- Mocha:
Mocha runs on Node.js and in the browser. Mocha performs asynchronous testing more simply.
Provides accuracy and flexibility in reporting. 
Provides tremendous support of rich features such as test-specific timeouts, JavaScript APIs.

6- Jest
Facebook uses jest so far to test all the JavaScript code.
It provides the 'zero-configuration testing experience. 
Supports independent and non-interrupting running tests without any conflict. 
Do not require any other setup configuration and libraries.

7- AVA
AVA is a simple JavaScript Unit Testing Framework.Tests are being run in parallel and serially. 
Parallel tests run without interrupting each other. 
This testing framework supports asynchronous testing as well. 
AVA uses subprocesses to run the unit test JavaScript.

_________

What is QuickSort Algorithm in JavaScript?
 n^2 هى BigO ال 
1- First, select an element that is to be called the pivot element. 
 ممكن نختار عنصر من النص او من الاول او من اخر الاراى pivot بختار اى عنصر فى الاراى وبسمية 

2- Start the left pointer at the first element of the array.
3- Start the right pointer at the last element of the array.
4- Compare the element pointing with the left pointer,
 and if it is less than the pivot element, 
 then move the left pointer to the right (add 1 to the left index).
  Continue this until the left side element is greater than or equal to the pivot element.
 على اليسار pivot بحيث تبقى العناصر اللى اقل من ال pivot وبعد كدة بقارن كل عناصر الاراى بال  
 على اليمين pivot واللى اعلى من ال 
  دة باول عنصر فى الشمال لو لاقة اكبر ولاقى اخر عنصر من اليمين اصغر منة  pivot ازاى بيقارن ال  
  بيقوم مبدل جايب الكبير فى الاخر والصغير فى الاول وهكذا

     5 3 7 6 2 9
     pivot ==> 6 
     lift pointer = 5
     right pointer = 9
     since 5 < 6 shift left pointer
     since 3 < 6 shift left pointer
     and 7 > 6 ,so stop
     right ادام بقى اكبر اقف واروح ل 
     since 9 > 6 shift right pointer
     since 2 < 6 stop 
     swap them both 2 and 7
     5 3 2 6 7 9
     move ponters 
     since 6=6
     move pointers further and stop as left crosses right

________

What are Screen objects?

Screen objects are used to holds information of browser screen. 
The navigator object is the window property, so it can be accessed by:window.screen  Or screen

The properties of screen objects are  
document.writeln("<br/>screen.width: "+screen.width) //Gives the total width of the client's screen, including the taskbar
document.writeln("<br/>screen.height: "+screen.height) //Gives the total height of the client's screen, including the taskbar  
document.writeln("<br/>screen.availWidth: "+screen.availWidth); Gives the width of the client's screen 
document.writeln("<br/>screen.availHeight: "+screen.availHeight) //Gives the height of the client's screen 
document.writeln("<br/>screen.colorDepth: "+screen.colorDepth) //Gives the bit depth of images on the client's screen
document.writeln("<br/>screen.pixelDepth: "+screen.pixelDepth); 
______

How to use DOM and Events?
  Using DOM, JavaScript can perform multiple tasks. It can create new elements and attributes, 
  change the existing elements and attributes and even remove existing elements and attributes. 
  JavaScript can also react to existing events and create new events in the page.

     getElementById, innerHTML Example
     getElementById: To access elements and attributes whose id is set.
     innerHTML: To access the content of an element

     <script type="text/javascript">
        var text = document.getElementById("one").innerHTML;
        alert("The first heading is " + text);
     </script>

     you can add an event handler to a particular element like this
      document.getElementById(id).onclick=function(){
            lines of code to be executed
      }

      OR
      document.getElementById(id).addEventListener("click", functionname)

    ______

    What is External JavaScript?
    save the JavaScript code in a new file with the extension .js. Then, 
    add a line of code in all your web pages to point to your .js file like this:
    <script type="text/javascript," src="/currentdetails.js,">

    _____

    When to Use Internal and External JavaScript Code?

    Suppose you have only a few lines of code that is specific to a particular webpage.
    In that case, 
    it is better to keep your JavaScript code internal within your HTML document.

    On the other hand, 
    if your JavaScript code is used in many web pages, 
    you should consider keeping your code in a separate file. If you wish to make some changes
    to your code, you have to change only one file, making code maintenance easy.
    If your code is too long, it is better to keep it in a separate file.
    This helps in easy debugging.

   _____

Explain Popup Message using event with example

Display a simple message "Welcome!!!" on your demo webpage and when
the user hovers over the message, 
a popup should be displayed with a message "Welcome to my WebPage!!!".

   <script type="text/javascript">
    function trigger(){
    document.getElementById("hover").addEventListener("mouseover", popup);
    function popup(){
    alert("Welcome to my WebPage!!!");
    }
    }
    </script>

______

Give an example of JavaScript Multiplication Table?
    <script type="text/javascript">
     var rows = prompt("How many rows for your multiplication table?");
     var cols = prompt("How many columns for your multiplication table?");
     if(rows == "" || rows == null)
            rows = 10;
     if(cols== "" || cols== null)
            cols = 10;
     createTable(rows, cols);
    function createTable(rows, cols){
      var j=1
      var output = 
      "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
      for(i=1;i<=rows;i++){
        output = output + "<tr>";
        while(j<=cols){
            output = output + "<td>" + i*j + "</td>";
             j = j+1;
           }
            output = output + "</tr>";
            j = 1;
    }
    output = output +
     "</table>";
    document.write(output);
    }
  </script>

*/






































































































































	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 


