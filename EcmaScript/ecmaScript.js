/*
List the comparisons between ES5 and ES6

ES5 ==> 
1- ES5 supports primitive data types that are string, boolean, number, null, and undefined
2- we could only define the variables by using the var keyword
3- there is a non-presence of some features, so it has a lower performance than ES6.
4- A wide range of communities supports it
5- ES5 is time-consuming than ES6
6- both function and return keywords are used to define a function
7-there is a use of for loop to iterate over elements.

ES6 ==>
1- there are some additions to JavaScript data types. It introduced a new primitive data type 
'symbol' for supporting unique values
2- there are two new ways to define variables that are let and const
3- Because of new features and the shorthand storage implementation ES6 has a higher performance 
than ES5.
4- It also has a lot of community support, but it is lesser than ES5.
5- Due to destructuring and speed operators, object manipulation can be processed more smoothly
in ES6.
6- An arrow function is a new feature introduced in ES6 by which we don't require the function 
keyword to define the function.
7-ES6 introduced the concept of for...of loop to perform an iteration over the values of the
iterable objects.

______

Define ECMAScript.
It is the specification that is defined in the ECMA-262 standard to create a general-purpose
scripting language
this edition includes several new features that are modules, iterators, class, arrow functions, 
for...of loop,promises, and many more. Brendan Eich developed it.
_______
What are the new features introduced in ES6?

Let and const keywords.
Default Parameters.
Arrow functions.
Template Literals.
Object Literals.
Rest and spread operators.
Destructuring assignment.
Modules, Classes, Generators, and iterators.
Promises, and many more.
______
Define Modules in JavaScript
Modules are the piece of JavaScript code written in a file. By using Modules, 
it is easy to maintain the code, debug the code, and reuse the code. Each module is
a piece of code that gets executed once it is loaded.
______

What do you understand by the term Hoisting in JavaScript?
top of the scope اى تعريف بياخدة ل 
move all the declarations at the top of the scope before the execution of code
اللى engine فى حالة ان ندات على فنكشن قبل ما اعرفها الكود هيشتغل عادى فاللى بيحصل ان ال 
top فى الجافا اسكربت بياخد التعريف بتاع الفنكشن دة ويحطة فى ال 
regular function ودى فى حالة ال 
 اللى هى بالشكل دة expression function اما فى حالة ال 
var test=function(){
}
test()
بس ال regular function لل hosting  لو ندات على الفنكشن دى قبل ما اعرفها هيطلع ايرور فال 
hosting ليها arrow function ولا ال hosting ملهاش expression function 
top طب بالنسبة للمتغير بياخد التعريف بس بتاع المتغير يحطة فى ال 
القيمة بتاعتة لا 
ex:
console.log(x)
var x =5
لانة بينقل التعريف بس القيمة لا undefined هيطلع 

بيحط  فى الاول الفنكشن وبعد كدة متغير hosting طب لو معرفة فنكشن ومتغير ال 
ex:
alert(use)
var use=2
function use(){
  console.log("use")
}
لما يجى ينفذ المتغير والفنكشن بنفس الاسم طب هينفذ مين الاول هينفذ الفنكشن
بتعها body الفنكشن كلها بال alert هيحط فى ال 
بيتم للفنكشن الاول وبعد كدة المتغير  hosting ودا لان ال 
It is a JavaScript's default behavior,splitting variable declaration and initialization,
 and move all the declarations at the top of the scope before the execution of code. 
 It can be applied to functions as well as on variables.
 It allows the JavaScript to use the component before its declaration. 
It does not apply to scripts that run in strict mode.

________

Define Babel ??
فى الجافا اسكربت ويحولة لفرجن اقدم فى الجافا اسكربت  latest version بياخد الكود المكتوب  
 es5 ل es6 مثال انة يحول من 
والهدف من دة انة يخلى الكود مناسب مع البروزر القديم
عشان اعمل دة 
واروح على المسار بتاع المشروع واكتب cmd بفتح ال 
npm init --yes
depandancies المسئولة عن ال package.json عشان اعمل 
وبعد كدة اكتب
npm install --save-dev @babel/core @babel/cli @babel/preset-env
babel.js المسئولة عن ال depandancies عشان ينزل ال 

Creating a config file named .babelrc
وبعد كدة انشأ فايل واحط فية دة 
{
  "presets": [
      "@babel/env", // عشان يشمل جميع الفرجن ويحولها
  ]
}
package.json وبعد كدة بدخل جو ال 
scripts واحط جو ال
scripts:{ 
"start":"babel اسم الفولدر اللى فيه ملفات الجافا اسكربت -d اسم الفولدر اللى هيحول فية"
         "babl main -d dest"
}

npm start <== cmd عشان ارن اكتب فى ال 

Babel is a JavaScript compiler. It is mainly used for converting the 
ES6 plus code into the backward-compatible version of JavaScript in current and older browsers 
or environments
Here are the main things Babel can do for you:

1- Transform syntax
2- Polyfill features that are missing in your target environment 
(through a third-party polyfill such as core-js)
3- Source code transformations (codemods)
_____

Define Webpack ?
It is an open-source JavaScript module bundler that takes modules with dependencies.
 It allows us to run an environment that hosts Babel
_____

this ==> javascript keyword
  موجودة جو الفنكشن او الميثود وظيفتها بتخلينى استحدم الفنكشن دى مع اوبجكيت مختلفة 
  functionality نقدر نستفيد من ال 
  الموجودة جو الاوبجكيت property الموجودة فى الفنكشن دى مع الاوبجكيت دة ونقدر نستعمل ال
________

؟؟ regular function مع ال this ال 
بتمثل الاوبجكيت اللى بينادى الفنكشن this ال
منة this يعنى المكان اللى بتتنادى فية بتاخد قيمة ال 
has it's own this

let test=function(){
	document.getElementById('show').innerHTML=this
}

window.onload=test
document.getElementById('button').addEventListener('click',test) //HTMLButtonElement

_________

؟؟ arrow function مع ال this ال 
this معندهاش ال 
من المحتوى اللى هى فية  value بتاخد ال this ال 

*/

let testArrowFn=() => {
	document.getElementById('show').innerHTML=this
}

window.onload=testArrowFn

document.getElementById('button').addEventListener('click',testArrowFn) //Window

//___________________

function person(){
	this.age=2
	setInterval(function fff (){
		 this.age++
//NaN من المكان اللى بتتنادى فية يعنى زيزس اللى هنا غير زيزس اللى فوق thisعشان بتاخد قيمة ال  
	 console.log(this.age) //NaN
	},3000)
}
let user=new person()
//عشان يحل المشكلة دى
function person(){
	let that=this
	this.age=0
	setInterval(function(){
     that.age++
	//  console.log(that.age) // 1 2 3 .....
	},3000)
}
let user2=new person()
//with arrow function
function person(){
	this.age=0
	setInterval(()=>{
     this.age++
	//  console.log(this.age) // 1 2 3 .....
	},3000)
}
let user3=new person()

//______________________

function counter(){
	return this.count++
}

const obj={
	count:0,
	counter:counter
}
obj.counter()
console.log(obj.count)  // 1

//___________________________

function counter(){
	let count=0;
	console.log(this)
}
counter()  // window object

//______________________________
function counter(){
	// debugger
	console.log(this.count)
}
const obj2={
	count:1,
	counter:counter
}
const anotherFunc=obj2.counter
console.log("anotherFunc",anotherFunc)
anotherFunc()  // undefined

//_______________________________

function counter(){
	console.log(this.count)
}
const obj3 = {
	count:1,
	counter:counter
}
function callTwice(func){
	func()
	func()
}
callTwice(obj3.counter)  //undefined undefined

/* 
diffrence between & , && ?

The single ampersand operator (&) 
evaluates both sides of the operator before arriving at its answer


The double ampersand operator (&& – also known as the conditional-AND operator)
 evaluates the RHS only if the LHS is true
RHS ومش هتعمل اتشك على ال false هتطلع false ب  LHS يعنى لو لاقيت 
RHS يبقى لازم تعمل اتشك على ال true  ب  LHS و لو لاقيت 

________

0 || -1 || 10; // output : -1

The first operand 0 is falsy, so the evaluation continues. The second argument -1 
is already truthy, so the evaluation stops, and the result is -1

________

Explicit binding [ call() , apply() , bind() ]
استعمال ميثود من الداتا

؟؟ call , apply , bind الفرق بين ال 

1- bind 
موجودة عندنا argument هى اول this وبتكون قيمة invocation بتعمل فنكشن جديدة ممكن بعد كدة يعملها 

2- call,apply
موجود عندنا argument هى اول this للفنكشن دى علطول وبتكون قيمة invocation بيعملوا 

________

What is the difference between .call() and .apply()?

argument  بيكون على شكل اراى بستفاد منة لو مش عارفة الفنكشن هتاخد كام apply فى ال second argumentبيبقى فى ال 
بحطة علطول call اما فى ال

.call() is used when the number of the function's arguments are known to the programmer
as they have to be mentioned as arguments in the call statement

.apply() is used when the number is not known. The function 
.apply() expects the argument to be an array

*/

function counter2(){
	console.log(this.count)
}

const obj4={
	count:1
}

counter.call(obj4) // 1
counter.apply(obj4) // 1

const anotherFunc2=counter2.bind(obj4)
anotherFunc2() // 1

function counter3(){
	return (count)=> {
		// console.log(this.count)
	}
}

const obj5={
	count:1
}

const anotherFunc3=counter3.call(obj5)
anotherFunc3()  // 1

/*

constructor function ==> فنكشن عادية نقدر نستخدمها عشان نعمل كريات لاوبجكيت مختلفة
this in constructor function
*/

function Counter(count){
	this.count=count
}

const firstCounter=new Counter(1)
const secondCounter=new Counter(2)

console.log(firstCounter.count) //1
console.log(secondCounter.count) //2


/*
arrow function ==> 
طريقة مختلفة فى كتابة الفنكشن

Arrow functions are the shorthand notation to write ES6 functions.
The definition of the arrow function consists of parameters, 
followed by an arrow (=>) and the body of the function.
An Arrow function is also called as 'fat arrow' function. We cannot use them as constructors

________

this in arrow function ==>
(arrow function اللى جواة ال scope ال) lexical scope بيعتمد على ال 
_________

its advantages ?????
1- Arrow function provides us a more accurate way of writing the functions in JavaScript.
They allow us to write smaller function syntax
2-The context within the arrow functions is lexically or statically scoped. Arrow functions 
do not include any prototype property,and cannot be used with the new keyword
3- It reduces code size.
4- The return statement is optional for a single line function.
5- Lexically bind the context.
6- Functional braces are optional for a single-line statement.
*/

const functionName = (arg1, arg2) => {  
  //body of the function  
}  

//arrow function with no parameter
let arrowFn = _ => 2
console.log(arrowFn())

//_______________________ 

function Counter2(){
	this.count=0
	this.increment=function(){ //call back function
		setInterval(function(){
			// console.log(this.count++)
		},1000)
	}
}

const counterOne=new Counter2()
counterOne.increment()  // NaN ==> count لانة مش شايف ال 

// arrow function لو استخدمنا 
function Counter3(){
	this.count=0
	this.increment=function(){
		setInterval(()=>{
			// console.log(this.count++)
		},1000)
	}
}

const counterOne2=new Counter3()
counterOne2.increment()  // كل ثانية هيذود واحد

/*
map() 
call بتشتغل انها بتعمل لوب على الارى اللى معانا وبتعمل 
للفنكشن جواها على كل ايلمينت جو الارى الفنكشن دى بتعمل تعديلات على الايلمينت وبعد كدة تعمل
 الايلمنت بعد التعديل والماب بتاخد كل ايلمينت طالع وتحطة فى اراى جديدة وكدة الماب return
مبتغيرش الاراى الاصلية والماب بتفضل شغالة لحد ما تعدى على الايلمنت كلها
*/

let arr=[1,2,3]
let result=arr.map(
  function(elem,index,array){ //call back function
      return array 
    }
)
console.log("res",result) // [[1,2,3],[1,2,3],[1,2,3]]
console.log(arr)

let elem=arr.map((elem,index) => elem)
console.log(elem)
//_________

let array=[
	{name:"Islam",age:30},
	{name:"Ahmed",age:28},
	{name:"Ali",age:33},
	{name:"Ahmed",age:26}
]
let res=array.map(elem =>elem.age)
console.log(res)

//_________

let arr=[1,2,3,4]
let arr2=arr.map((elem,index,array)=>{
   return array
})
console.log("arr2",arr2) //[[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]


/*

filter ==>
 call بتشتغل انها بتعمل لوب على الارى اللى معانا وبتعمل 
للفنكشن جواها على كل ايلمينت جو الارى 
وزى الماب فى انها مبتقفش غير لما بتعدى على الارى كلها
بتاخد كل ايلمينت طالع وتحطة فى اراى جديدة وكدة  
مبتغيرش الاراى الاصلية
map الفرق بينها وبين ال 
condition ان الفنكشن دى بتدخل الايلمينت فى تيست او 
condition  اتحقق يبقى الايلمينت هيتحط فى الارى الجديدةولو ال  condition لو ال
بفالس يبقى مش هيتحط فى الاراى الجديدة
 للاليمنت اللى بيعدى التيست return وبتعمل 

*/
let _arr=[1,2,3]
let resu=_arr.filter((elem)=>{ return elem < 3})

console.log(resu)


//لو عايزة الشرط يبقى على الاندكس

let resul=_arr.filter((elem,index)=>{ return index < 3})

console.log(resul)

let resultOfAge=array.filter((elem,index)=>{ return elem.name === "Ahmed"})

console.log(resultOfAge)

/*

forEach()
call بتشتغل انها بتعمل لوب على الارى اللى معانا وبتعمل 
للفنكشن جواها على كل ايلمينت جو الارى 
وزى الماب فى انها مبتقفش غير لما بتعدى على الاراى كلها
undefined ل return لحاجة بتعمل  return لكن فى الاخر مش بتعمل 
اعمل بية اى اكشن call back function انما ممكن الايلمينت فى ال 

*/

let newArr=[]
arr.forEach((elem,index) =>{
	console.log(elem,index)
	if(elem < 2){
		newArr.push(elem)
	}
})
console.log(newArr)

/*
set ==> بترجع الداتا من غير تكرار 

forEach مع ال set 
forEach(currentKey,currentValue,set)

*/

const mySet=new Set([1,1,1,2,2,6,4,5])
// item1,item2  مفيش فيها كى و فاليو set هما نفس بعض بالظبط لان ال  
mySet.forEach((item1,item2)=>{ 
	console.log(`forEach with set ${item1} - ${item2}`)
})

/*
map 
زى الاوبجكيت بيبقى ليها كى وفاليو 
الفرق انها بتمسح اننا نحط اى نوع من انواع البيانات  فى الكى
الاوبجكيت بيحول الكى كلها لاسترنج انما الماب لا الماب بيسيب البيانات زى
ما هى 

______

؟ map مع ال forEach ال 
forEach(value,key,map)

*/

console.clear()
const myMap3=new Map([[function(){},1],["c",3],["B",2]])
myMap3.forEach(v =>{
	console.log("map with for each",v) //1,3,2
})

myMap3.forEach((v,k) =>{
	console.log(`${k} : ${v}`) //1,3,2
})

/*

every()
call back function لل  call بتعمل iteration بتعمل لوب على الاراى ومع كل 
true هترجع every() ولو كل الايلمنت اللى جو الاراى بترو الفنكشن condition الفنكشن دى جوها 
هترجع فالس every() ولو فى ايلمنت واحد بس رجع فالس يبقى الفنكشن
دة ومبتكملش لوب iteration وبتقف عند ال 

*/

let EveryResult=arr.every(function(elem,index,array){
	return elem < 3
})


// console.clear()
console.log(EveryResult)   //false

//arrow function ممكن استخدم ال
let EveryRes=arr.every(elem =>{
	return elem <4
})
console.log(EveryRes)  // true

let todos = [
    {todo: "clean room",  done: true},
    {todo: "finish task", done: true},
    {todo: "send email",  done: false}
]

everyresult = arr.every(elem => elem.done === true) 
console.log(everyresult) // false
console.log(todos)  // بترجع الاراى زى ما هى ومش بتغير فى اى حاجة

/*
some()
call back function يكفيها ايلمنت واحد بس يرجع ترو فى ال 
وبتفضل تعمل لوب لحد ما توصل للايلمنت اللى واخد ترو ساعتها بتوقف وترجع ترو
ولو عدت عليهم كلهم ولاقتهم بيرجعوا فالس ساعتها بس هترجع فالس
ومبتغيريش الاراى الاصلية
*/

let someRes=arr.some(elem =>{
	return elem === 4
})

console.log(someRes)  // false

//لو مع اراى فاضية 
let a=[]
let re=a.some(elem =>{ return elem})
console.log(re) //false

let everyrRes=a.every(elem =>{ return elem})
console.log(everyrRes) //true

/*

find()
call back function بيدور على ايلمنت بيحقق شرط معين موجود فى ال
للايلمنت دة وبتوقف لوب  return وبتعمل 
ولو ملقتوش بتفضل تعمل لوب على باقى الاراى لحد ما توصل لنهاية الاراى
undefined وبترجع 
undefined ولو الاراى فاضية هيرجع

*/

let findRes=arr.find(function(elem){
	return elem > 2
})
console.log(findRes)  // 3

/*

findIndex()
 بالظبط find() نفس ال 
 لكن بترجع الاندكس بتاع الايلمينت
ولو ملقتوش بتفضل تعمل لوب على باقى الاراى لحد ما توصل لنهاية الاراى
-1 وبترجع 
-1 ولو الاراى فاضية هيرجع
مبتغيرش فى الاراى الاصلية

*/

let findIndexResult=arr.findIndex(element => element>2)
console.log(findIndexResult) // 2

/*
reduce 
لو عايزة اجمع
*/
let products=[
	{name:"Islam",price:30},
	{name:"Ahmed",price:28},
	{name:"Ali",price:33},
	{name:"Ahmed",price:26}
]

let sum = products.reduce(
	// 0 ==> initial value for acc
 // acc المتغير اللى بيجمع فية
	(acc,elem)=>acc+elem.price,0
)
console.log("sum : ",sum)
// concat() => بتدمج اراى مع اراى وبتخليهم اراى واحدة
let array2D = [
    [0, 1],
    [2, 3],
    [4, 5]
]
let flat = array2D.reduce(
	// [] => acc اراى فاضية بداية لل
    (acc, elem) => acc.concat(elem),[]
)
console.log(flat)

// reduce ==> وكمان بتجيب عدد تكرار الكلمات فى مصفوفة معينة 

// counts
let data = [
    'car',
    'truck',
    'truck',
    'car',
    'bike',
    'van',
    'bike',
    'car',
    'car'
]

let count=data.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 0 // zero العنصر مش موجود يحطلة قيمتة ب
    }
    obj[item]++ //ولو موجود يذود قيمتة بواحد
    return obj
}, {} )

console.log(count)

/*
let , var , const

const ==> block scope,immutable(The value of the variables cannot be changed or re-assigned)
cannot redeclare
_____

let ==> block scope,mutable(the values of the variable can be changed)
 لو معرفة متغير جوة اسكوب وندات على المتغير دة برة الاسكوب دى
 هيدنى ايرور لانة متعرف  داخل الاسكوب دة بس
_____

var ==> function scope
اقدر انادى على متغير if وعرفت متغير داخل اسكوب ال if يعنى لو عندى فنكشن وجوها اسكوب زى ال 
 جو الفنكشن if دة خارخ اسكوب ال 

لو معرفة متغير جوة اسكوب اقدر انادى علية برة الاسكوب وهيطبع الاوت بوت
 A variable, by definition, is “a named space in the memory” that stores values
*/

function testVar(){
   var age = 20;
   if (true){
	//  var age=2 // redeclare
	 console.log(age) // 2
 }
 console.log("age",age) // 2
}
testVar()

function testLet(){
	let age = 20;
	if (age === 20) {
	  let age=2 // not redeclare
	  console.log(age) //2
  }
  console.log(age) //20
 }
 testLet()

 var x1=1
 let x2=2

 console.log(window.x1) // 1  
 console.log(window.x2) // undefined  لان بقدر انادى علية داخل الاسكوب بتاعة بس
//this ويحط window الوندو اللى شغال عليها الاوبجكيت اللى فية كل حاجة انا شغال عليها ممكن يشيل ال
 console.log(window) 
 
const settings=1
console.log(settings)

const sett = []
sett.push('html','css','js')
console.log(sett)

const setting={
'name':'osama',
'age':36
}
Object.freeze(setting) // مش هيسمح انى اعدل فى الاوبجكيت دة
setting.name='sayed'
console.log(setting)




/*

Template literals /  Template Strings
provides an easy way of creating multiline strings and perform string interpolation
enclosed by the back tick  ``
Placeholders are represented by the dollar sign and the curly braces
`hello ${variable name}`

*/
const thekind="female"
let oldway = "hello it's me "+(thekind === "male"? 'mr':'mrs')
console.log(oldway)

let newway = `hello it's me ${thekind === "male"? 'mr':'mrs'}`
console.log(oldway)

let username="m",age=36
const myHtmlMarkup=`
<div class="card">
<h2>${username}</h2>
<span>${age}</span>
</div>`

document.body.innerHTML=myHtmlMarkup
// console.clear()
	
/*
spread operator
represented by three dots (...) to obtain the list of parameters
It allows the expansion of an iterable such as array or string in places where 
more than zero arguments are expected.
الاراى او الاوبجكيت expand بياخد منى اراى او اوبجكيت وب 
*/

let num1 = [40,50,60]
let num2 = [10,20,30,...num1,70,80,90,100]
console.log(num2)  //[10,20,30,40,50,60,70,80,90,100]

let arrayOne=[1,2,3],
    arrayTwo=[4,5]

console.log("concat",arrayOne.concat(arrayTwo))

//spread operator بطريقة ال concat عشان اعمل 
let allArrays=[...arrayOne,...arrayTwo]
console.log(allArrays)

function sum2(x1,x2,x3){
	return x1+x2+x3
}
const allnumbers = [1,3,5]
console.log(sum2(...allnumbers))

let customArray=[1,2,3,...arrayTwo,6,7]
console.log(customArray)

//________________

arrayTwo=arrayOne
arrayTwo.push(4)

//هيضيف ال 4 للاتنين
console.log(arrayTwo) // [1,2,3,4]
console.log(arrayOne) // [1,2,3,4]
//spread operator عشان يحل المشكلة دى بال 
arrayTwo=[...arrayOne]
arrayTwo.push(5)

console.log(arrayTwo)  //هيضيف ال 5 هنا بس
console.log(arrayOne)

//_________________

let arrayThree = [1,2,3,4,-10,-20]
console.log(Math.min(arrayThree)) // NaN عشان عايز الاراى مفكوكة
console.log(Math.min(...arrayThree)) // -20

//________________

/*
Rest Parameters ...
spread operator عكس ال 
improves the ability to handle the parameters
it is possible to represent indefinite parameters as an array
we can call a function with any number of arguments
*/

function sum1(...x){
	let s=0
	for(let i=0;i<x.length;i++)
	s+=x[i]
	return s
}
console.log(sum1(2,4,5,4,5,9,10))

/*
What are the new String methods introduced in ES6?

string.startsWith()
string.endsWith()
string.includes()
string.repeat()
__________
startsWith بدور على كلمة معينة هل هيبدء بيها ولا لا بترجع ترو او فالس
position ==> الديفلت زيرو هيبحث من اول اية
startsWith(search string,position)
___________
endsWith هل هيبتهى بالكلمة دى ولا لا
end position ==> بتاع الاسترنج  length الديفلت ب 
endsWith(search string,end position)
*/

let x="elzero web school"
console.log(x.startsWith('web',7)) // true
console.log(x.endsWith('School')) // false لازم تكون نفسها بالظبط
console.log(x.endsWith('b',10)) // true

/*
includes('') هل بيحتوى على الاسترنج
includes(search string,position)
*/

console.log(x.includes('we')) // true
console.log(x.includes('we',8)) // false ==> we من اول 8 هل الاسترنج بيحتوى على 

/*
repeat ==> عايز اكرر الاسترنج كام مرة
repeat(count)
*/

console.log(x.repeat(2))

/*
Discuss Destructuring Assignment in ES6.

Destructuring 
to extract data from objects and arrays into separate variables.
It allows us to extract smaller fragments from objects and arrays.
*/

// 1- object destructuring

/* 
let  id ='default',
    _username ='default',
	  password ='default'
*/
const info = {
	 id: 1,
	_username: 'alex',
	 password: '12344',
	 langs:{
		html:'70%',
		css:'80%',
		js:'10%'
	}
  }
  // username:fullName هيخزن اليوزر نام فى المتغير فول نام
  // python ==> default value دى مش موجودة فى الاوبجكيت لكن ممكن يحطها ويحطلها 
  const {id, username: fullName, password,langs:{html,css,python='10%'}} = info
  console.log(`html ${html} python ${python}`)
//({id,_username,password="56"}=info) //فى حالة انى معرفة المتغيرات دى قبل كدة والباصورد هياخد القيمة اللى فوق مش ال 56
  console.log(id,username,password)

  console.log(info.langs.html)



//  2-  array distrucring

/* 
  let name="default",
      job="developer",
	  age2='default'
*/
  const ar = ['hussein', 'developer',45];
//   const [name, age] = ar;
// [name, job,age2] = ar;
const [name, ,age2] = ar; // job  لل skip  كدة عمل 
console.log(`name ${name} job ${age2}`)
// console.clear()
const food=["burger","pizza","chicken",["apple","banana","mango",["EgyOrange","PakistanOrange"]]]

// const [one,two,three,[fr1,fr2,,[o1,o2]]]=food // fr3 لل skip عمل 
const [one,two,three,...otherFood]=food

console.log(`the food i love is:${one} ${two} ${three} ${otherFood}`)



// ؟؟  array مع object  لل  distrucring ازاى اعمل
const userInfo = {
 fname:'Osama',
 city:'Cairo',
 skills:{
	 html5:'88%',
	 css3:'85%',
	 _js:["Vuejs","Reactjs","Angularjs"]
 }
}
// const {fname,city,skills:{html5,css3,_js:[_one,_two,_three]}}=userInfo
// console.log(`${fname} ${city}`)



// Destructuring Function Parameters
function showMyInfo({fname,city,skills:{html5,css3,_js:[_one,_two,_three]}}){
	console.log(`${fname} ${city}`)
}
showMyInfo(userInfo)


/*
 Enhanced Object Literals
 1- property value shorthand
 2- methods shorthand
 3- computed object property name
*/
const lname="Osama",
      website="Elzero.org"

const userInfo2={
// property value shorthand يعنى اسم الكى نفس اسم الفاليو فيشيل اسم الفاليو وهو كدة هيفهم ان اسم الكى هو نفسة اسم الفاليو
	lname, 
	website,
	myMothod (param1){ // methods shorthand ==> function بيشيل كلمة
		return param1
	}
}
console.log(userInfo2)
console.log(userInfo2.myMothod('hello'))

// computed object property name

const myVariable="key"
const myObject={
	myProperty:'myValue',
	[myVariable]:'value' // add dynamic property and assign a value
}
console.log(myObject)

/* 

set ==> عبارة عن اوبجكيت بيسمح بتخزين البيانات الفريدة من نوعها وهنا مفيش كى
It supports both object references and primitive values
new Set(iterable)
iterable ==>  العنصر بقدر اعملة لوب وبيكون استرنج او اراى او اوبحكيت
 اى عنصر بالاندكس access مقدرش 
__________________
 Garbage Collection ==>
 memmory mangement ليها علاقة بال 
بيتعامل معها وبيدير الميمورى engine اى لغة بتعامل معها بيبقى فى 
clean بيعمل  engine اية اللى يحصل لما بيكون فى بيانات مش عايزنها اللى بيحصل ان ال 
Garbage Collection للبيانات دى من الميمورى هو دة ال

______________

؟؟؟ WeakSet  وال set  الفرق بين ال 
set
اقدر احط فيها اى نوع من انواع البيانات
size اقدر اجيب عدد العناصر عن طريق ال 
forEach ااقدر اعمل عليها لووب عن طريق ال
بتعتها keys اقدر اجيب ال
A set is a data structure that allows us to create a collection of unique values.
It is a collection of values that are similar to arrays, but it does not include any duplicates
It supports both object references and primitive values.
_______________
WeakSet 
بتحتوى على اوبجكيت بس
size ومقدرش اجيب عدد العناصر عن طريق ال 
بتعتها keys ومقدرش اعمل لوب عليها ولا اقدر اجيب ال 
Weakset only includes add(value), delete(value) and has(value) methods of the set object.

*/

let myBooks=new Set([1,2,3,3]).add('one').add('five').add(1)
console.log(typeof myBooks) //object
let arr2=[1,2,3,3]
console.log(arr2) // 1,2,3,3
console.log(myBooks) //1,2,3 بيجيب العنصر بدون تكرار
console.log([...myBooks]) //array ل set عشان نحول ال 

let myName=new Set("maa")
console.log(myName) //{'m','a'}
myName.add('mohamed')
console.log(myName) //{'m','a','mohamed'}
myName.delete('a')
console.log(myName)
myName.clear()

// موجودة ولا لا a عشان يشوف هل ال 
console.log(myName.has('m')) // false ==> clear لانة عمل 

let mainObject={A:1}
let mySet3=new Set([mainObject])
let objectOne={B:2}
let objectTwo={c:3}
mySet3.add(objectOne)
mySet3.add(objectTwo)
mySet3.add("string")
mySet3.add(12)
console.log("mySet3",mySet3)

mySet3.delete(objectOne)
console.log(mySet3.has(objectOne)) //false

// objectTwo=null // set لكن مش هيتحذف من ال  null واخد 
console.log(mySet3.has(objectTwo)) //false
console.log(mySet3) //[{A:1},{c:3}]  

// WeakSet
let myWeakSet=new WeakSet([mainObject])
myWeakSet.add(objectOne)
myWeakSet.add(objectTwo)

/*
عشان هى مبتقبلش غير اوبجكيت
myWeakSet.add("string")
myWeakSet.add(12)
*/

console.log("WeakSet",myWeakSet)
myWeakSet.delete("objectOne delete",objectOne)
console.log("WeakSet.has(objectOne) : ",myWeakSet.has(objectOne)) //true

objectTwo=null // set لكن مش هيتحذف من ال  null واخد 
console.log("WeakSet.has(objectTwo) : " , myWeakSet.has(objectTwo)) //false
console.log("size",myWeakSet.size) //undefined
console.log("WeakSet : ",myWeakSet) //[{A:1},{c:3}] 

/*
 يعنى مقدرش اعمل لوب عليها
javascript.js:495 Uncaught TypeError: myWeakSet.forEach is not a function
 myWeakSet.forEach(v =>{ 
 	console.log(v)
 })
__________

map ==> 
زى الاوبجكيت بيبقى ليها كى وفاليو 
الفرق انها بتمسح اننا نحط  اى نوع من انواع البيانات  فى الكى
الاوبجكيت بيحول الكى كلها لاسترنج انما الماب لا الماب بيسيب البيانات زى
ما هى 

WeakMap وال map  الفرق بين ال 
map
اقدر احط فيها اى نوع من انواع البيانات
size اقدر اجيب عدد العناصر عن طريق ال 
forEach ااقدر اعمل عليها لووب عن طريق ال
بتعتها keys اقدر اجيب ال 
It holds the key-value pairs in which any type of values can be used as either keys or values.
A map object always remembers the actual insertion order of the keys. Maps are ordered, 
so they traverse the elements in their insertion order.
_______________
WeakMap
the keys in weak maps must be objects and the values are arbitrary.
A weak map object iterates the element in their insertion order
تحتوى على اوبجكيت بس
size ومقدرش اجيب عدد العناصر عن طريق ال 
 بتعتها keys ومقدرش اعمل لوب عليها ولا اقدر اجيب ال 
It only includes delete(key), get(key), has(key) and set(key, value) method.
*/

var userInfo4={}
userInfo4['username']="ma"
userInfo4.website="elzero.org"
userInfo4["10"]="string"
userInfo4[10]="string" //لان فى الاوبجكيت بيحول كل الكى لاسترنج override هنا هيعمل 

console.log(userInfo4)
console.log(userInfo4.username)
console.log(userInfo4['website'])

let objectThree={c:3}
let myMap=new Map()
myMap.set(objectThree,"Test")
myMap.set("10","string").set(10,"number").
set(function doSomeThing(){},"function").
set(false,"boolean").
set({a:2,b:1},"object")
console.log("myMap : ",myMap)
//set عشان لو عايزة اضيف جو الماب من غير الفنكشن 

let myMap2=new Map([
	["10","string"],
	[10,"number"],
	[false,"boolean"]
])
console.log("myMap2.size : ",myMap.size) //3
console.log("myMap2.get('10') : ",myMap.get("10")) //string
console.log("myMap2.get(10) : ",myMap.get(10))  //number
console.log("myMap2.has(10) : ",myMap.has(10))  // true
console.log(myMap.delete(10))
// myMap.clear()
objectThree=null
console.log("myMap.get(objectThree) : ", myMap.get(objectThree)) // undefined
console.log("myMap.size : ", myMap.size) 

// WeakMap
let objectFour={c:3}
let objectFive={c:3}
let myWeakMap=new WeakMap()
myWeakMap.set(objectFour,"Test1")
myWeakMap.set(objectFive,"Test2")
// myWeakMap.set("10","string").
// set(10,"number").
// set(function doSomeThing(){},"function").
// set(false,"boolean").
// set({a:2,b:1},"object")
console.log("myMap : ",myWeakMap)
console.log("myWeakMap.size : ",myWeakMap.size) //undefined
console.log("myWeakMap.get('10') : ",myWeakMap.get("10")) //undefined
console.log("myWeakMap.get(10) : ",myWeakMap.get(10))  //undefined
console.log("myWeakMap.has(objectFour) : ",myWeakMap.has(objectFour))  // true
console.log("myWeakMap.delete(objectFour) : ",myWeakMap.delete(objectFour)) // true
console.log("myWeakMap.has(objectFour) : ",myWeakMap.has(objectFour))  // false

// myMap.clear()
objectFive=null
console.log("myWeakMap.get(objectFive) : ", myWeakMap.get(objectFive)) // undefined
console.log("myWeakMap : ", myWeakMap) //{objectFive:"Test2"}

/*
Symbol 
نوع من انواع البيانات
primtive data type وهو عبارة عن 
يعنى من الكائنات اللى ملهاش اوبجكيت وملهاش ميثود
unique, imutable وهو
imutable يعنى غير قابل للتعديل
unique مش بيتكرر 
*/

 const mySymbol=Symbol()
 console.log(typeof mySymbol) //Symbol

 const mySymbolOne=Symbol()
 const mySymbolTwo=Symbol()

// false ==>  وهطلع فالس حتى لو الاتنين ليهم نفس المحتوى unique لانه 
console.log(mySymbolOne === mySymbolTwo) 

const myNewSymbol=Symbol()

const myObject2={
	username:"mai",
	website:"elzero.org",
	[myNewSymbol]:"this is hidden" // computed object property name
}

for(let val of Object.entries(myObject2)){ // عشان الف على الاوبجكيت
	console.log(val) //["username":"mai"]   ["website":"elzero.org"]
}

console.log(Object.getOwnPropertyNames(myObject2)) // ["username" , "website"]
console.log(Object.keys(myObject2)) // ["username" , "website"]

// اللى موجودة فى الاوبجكيت Symbol عشان يجيب كل ال
console.log(Object.getOwnPropertySymbols(myObject2)) //[Symbol()]

// يعنى عندى جافا اسكربيت اوبجكيت وعاايزة احولة لجسون اوبجكيت 
console.log("JSON.stringify : ",JSON.stringify(myObject2)) // {"username":"mai","website":"elzero.org"}
//عندى جسوون اوبجكيت وبحوولة لجافا اسكربيت اوبجكيت
let myjsonobject='{"name":"mai","age":34}'; 
console.log("JSON.parse : ",JSON.parse(myjsonobject))

/* 
for
اللى موجودة global symbol تقدر تعمل كريات او اكسس لل 
*/

const mySymbolThree=Symbol.for("Testing")
const mySymbolFour=Symbol.for("Testing")

//true ==> لو في هيعمل اكسس علية لو مفيش هينشاة testing واخد ديسكربشن global فى ال Symbol هل فى 
console.log(mySymbolThree === mySymbolFour) 
/*
keyFor() ==> Symbol طلع الكى بتاع ال
*/
console.log(Symbol.keyFor(mySymbolFour)) // Testing
// alert(mySymbolFour.toString()) // لازم يحول للاسترنج
console.log(mySymbolFour.description) // Testing
Symbol.iterator // build in

console.log(`${"#".repeat(30)}`)

/*
Symbol Iterator & For Of Loop
Iterable ==> symbol iterator هو اوبجكيت فية
Iterator ==> يعنى يحصلة لوب Iteration اوبجكيت الانترفيس بتاعة مصمم لل
الميثود دى بترجع اوبجكيت next method فيها ال Iterator جميع ال
 property الاوبجكيت دة فية اتنان 
1- next value ==> Iteration القيمة اللى جاية فى ال 
2- Done ==> boolean value
 ولا لا يعنى خلص ولا لا next value بتشوف هل فى
-----
هى الارى والاسترنج والماب iteration الحاجات اللى اقدر اعمل عليها  

_______

 Discuss the For ... Of Loop ??

This loop is used for iterating the iterables (arrays, string, etc.).
iterator بتعمل لوب على ال 
اللى بترجع البيانات next method ودى فيها symbol.Iterator ودى بتنادى على ال 
وبعد كدة بتحفظ القيمة فى متغير 
ولا لا iteraion هل خلص ال done  وبعد كدة بيشوف ال 
ولما يبقى ب ترو هيطلع من اللوب
________

Discuss the for...in loop ??

It is similar to for loop that iterates through the properties of an object. 
It is useful when we require to visit the properties or keys of the object.

_______
Difference for..in and for..of:
Both for..in and for..of are looping constructs which are used to iterate over data structures. 
The only difference between them is the entities they iterate over:

for..in iterates over all enumerable property keys of an object
for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, 
strings, and NodeLists.
*/

let myArray3=[1,2,3]
let myName3="os"
let myNumber=1000
let myObject3={}

console.log("myName3[Symbol.iterator] ",myName3[Symbol.iterator])
 // function ==> iterable اللى موجودة ى ال build in function دى ال 
console.log(typeof(myName3[Symbol.iterator]))
console.log(typeof(myArray3[Symbol.iterator])) //function
console.log(typeof(myNumber[Symbol.iterator])) // undefined ==> iterable اللى موجودة ى ال build in function مفيش فية number ال
console.log(typeof(myObject3[Symbol.iterator])) // undefined ==>iterable اللى موجودة ى ال build in function الاوبجكيت مفيش فية 

let theIterator=myName3[Symbol.iterator]() // () ==> عشان ارجع منة اوبجكيت 
console.log(theIterator)  // StringIterator{} 
console.log(theIterator.next()) //{value: o, done: false}
console.log(theIterator.next()) //{value: s, done: false}
console.log(theIterator.next()) //{value: undefined, done: true}

for (let name of myName3){ 
// لما يلاقيها بترو هيخرج done وبعد كدة عمل اتشك على ال name وحفظ الفليو فى المتغير iterator method نادى على ال 
console.log(name)  // o 
}                 // s

/*
  Custom Iterable Object
*/

const myObject5 = {
  name: "Osama",
  age: 36,
  country: "Egypt",
  favSkill: "JavaScript",
  [Symbol.iterator] () {  // iterator method لل implement  عمل 
    let step = 0;
    let properties = Object.keys(this); //["name", "age","country","favSkill"] هترجع	 
    // console.log(properties);
    return {
      next() {
        return {
          value: myObject5[properties[step]], //key مش ال value  عشان يجيب ال myObject5 حط دى جو ال properties[step] 
          done: step++ === properties.length // معنها ان لوب خلص properties.length بقيت بتساوى step لو ال
        }
      }
    }
  }
}

//myObject5 ==> جو الاوبجكيت iterator method لل implement   دا اوبجكيت مينفعش اعمل علية لووب عشان اعمل علية لوب يبقى لازم  
for (let prop of myObject5) {
  console.log("prop : ",prop);
}

/*
   Generator function
   provides us a new way to work with iterators and functions. ==> iterator بتنشأ 
   The generator is a special kind of function that may be paused in 
   the middle either one or many times and can be resumed later
   When the generator gets called, it does not run its code. Instead, it returns a special
   object which is called a Generator object to manage the execution

    * ==> داتا عشان اشتغل بيها yield ب  generator عشان دى فنكشن 

*/ 

function * generateTickets(){
	yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

let iterator = generateTickets();

console.log(typeof(iterator)); //object
console.log(iterator.next()); //{value:1,done:false}
console.log(iterator.next().value); // 2
console.log(iterator.next().value); //3
console.log(iterator.next().value); //4
console.log(iterator.next().value); //5

let myNumbers = [10, 20, 30, 40, 50];

function * generateNumbers(nums){
  for (let i = 0; i < nums.length; i++){
    yield nums[i];
  }
}

let generator = generateNumbers(myNumbers);

console.log("typeof(generator) : ",typeof(generator))
console.log(generator.next().value); //10
console.log(generator.next().value); //20
console.log(generator.next().value); //30
console.log(generator.next().value); //40
console.log(generator.next().value); //50

function * generateNums() {
  yield * [1, 2, 3, 4, 5, 6]
  yield 7
}

let theGenerator = generateNums()
console.log(theGenerator.next().value); // 1
console.log(theGenerator.next().value); // 2
console.log(theGenerator.next().value); // 3
console.log(theGenerator.next().value); // 4
console.log(theGenerator.next().value); // 5
console.log(theGenerator.next().value); // 6
console.log(theGenerator.next().value); // 7

/*
  Generators Part 2
  Functionality & Return
*/

//للفنكشن call الكود دة بيرن علطول بمجرد ما بعمل 
// function orderBook() {

//   window.alert("You Clicked On Button To Order A Book");
//   console.log("You Clicked On Button To Order A Book");

//   window.alert("You Added The Book To Cart");
//   console.log("You Added The Book To Cart");

//   window.alert("Payment Is Done");
//   console.log("Payment Is Done");

// }
// let ordering = orderBook();


// هتشتغل وقت مانا اقولها تشتغل
//next للفنكشن مش هتشتغل ومش هتشتغل الا لما اعمل call يعنى لما اعمل 
function * orderBook() {

  window.alert("You Clicked On Button To Order A Book");
  console.log("You Clicked On Button To Order A Book");

  window.alert("You Added The Book To Cart");
  console.log("You Added The Book To Cart");

  window.alert("Payment Is Done");
  console.log("Payment Is Done");
}
let ordering = orderBook();
console.log(ordering.next())

function * mySkills(){
  yield "HTML"
  yield "CSS"
  yield "PHP";
  yield "Python";
  yield "JavaScript";
}

let theSkills = mySkills(); // Iterator
console.log("",theSkills.next().value)
console.log("#".repeat(20))

//واقف Iterator يعنى من مكان ما ال css بدءت من اول  
for (let skill of theSkills){
  console.log(skill);  // CSS PHP Python JavaScript
}

// بدءت من الاول
for (let s of mySkills()) {
  console.log(s); // HTML CSS PHP Python JavaScript
}

function * sayNames(){
  yield "Osama";
  yield "Ahmed";
  return "Sayed";
  yield "Eman"; // مش هيطبعها ومش شايفها
}

let theNames = sayNames();

console.log(theNames.next()); // {value: "Osama", done: false}
console.log(theNames.next()); // {value: "Ahmed", done: false}
console.log(theNames.next()); // {value: "Sayed", done: true}
console.log(theNames.next()); // {value:undefined,done:true}

/*
  Generators Part 3
  Create Infinite Numbers اعمل ارقام الى ما لانهاية 
*/

function * createInfinite(){ // DO NOT LOOP ON THIS
  let i = 0
  while (true){
    yield i++
  }
}

let infiniteIterator = createInfinite();

console.log(infiniteIterator.next()); //{value: 0, done: false}
console.log(infiniteIterator.next()); //{value: 1, done: false}
console.log(infiniteIterator.next()); //{value: 2, done: false}
console.log(infiniteIterator.next()); //{value: 3, done: false}
console.log(infiniteIterator.next()); //{value: 4, done: false}
console.log(infiniteIterator.next()); //{value: 5, done: false}
// console.clear()
// هيبدء من المكان اللى الفنكشن انتهت عنة اللى هو 5
for (let number of infiniteIterator) {
  if (number > 20){
    break;
  }
  console.log(number);
}

// هيبدء من الزيرو لحد 20
for (let number of createInfinite()) {
  if (number > 20){
    break;
  }
  console.log(number);
}

/*
  Generators Part 4
	Delegating Generators
 اللى عندى Generators	بتنوب عن كل ال
  Generator function يعنى
 Generators function بتنادى جوها على اكتر من  
 */

function * generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

function * generateNames() {
  yield "Osama";
  yield "Ahmed";
  yield "Sayed";
}

function * generateAll() { // Delegating دا اسمة 
  yield * generateNumbers(); // هيجيب كل اللى فى الفنكشن دى االاول 
  yield * generateNames();
}

let genAll = generateAll();

console.log(genAll.next()); // {value: 1, done: false}
console.log(genAll.next()); // {value: 2, done: false}
console.log(genAll.next()); // {value: 3, done: false}
console.log(genAll.next()); // {value: "Osama", done: false}
console.log(genAll.next()); // {value: "Ahmed", done: false}
console.log(genAll.next()); // {value: "Sayed", done: false}


/*
What are the default parameters?
By using the default parameters, we can initialize named parameters with default 
values if there is no value or undefined is passed
*/

var show = (a, b=200) => {  
  console.log(a + " " + b) 
}  
show(100)

/*
What do you mean by IIFE (Immediately invoked function expressions)?
IIFE is a function in JavaScript that runs as soon as it is defined.
It is also called as the Self-Executing Anonymous Function. It includes two major parts 
that are as follows:

1- The first part is an anonymous function that has a lexical scope (static scope),
 which is enclosed within the Grouping operator ().
2- The second part creates the IIFE by which the JavaScript engine will interpret the 
function directly.
*/

(
  function(){console.log("Hello World")}
)();  // Hello World


/*
  New Array Methods introduced in ES6 ?
  Array.of
  Array.from
  Array.fill
  Array.prototype.copyWithin()
  Array.prototype.find()
  Array.prototype.findIndex()
  Array.prototype.entries()
  Array.prototype.keys()
  Array.prototype.values()
*/

// الاراى فى العادى
let oldArray = Array(100);
console.log(oldArray); // []
console.log(oldArray.length); // 100

let oldArray1 = Array(100,200);
console.log(oldArray1); // [100,200]
console.log(oldArray1.length); // 2

let oldArray2 = Array("100");
console.log(oldArray2); // ["100"]
console.log(oldArray2.length); // 1

// Array.of(Elements To Create The Array)
let newArray = Array.of(100)
console.log(newArray); // [100]
console.log(newArray.length); // 1

let newArray2 = Array.of(100,200);
console.log(newArray2); // [100,200]
console.log(newArray2.length); // 2

/*
Array.from(Iterable, Mapfn, This)
microsoft internet explorer ماعدا ال browsers بترن على كل ال 
Iterable
An array-like or iterable object to convert to an array.

mapFn  (Optional)
Map function to call on every element of the array.

thisArg (Optional)
Value to use as this when executing mapFn

More clearly, Array.from(obj, mapFn, thisArg) has the same result as 
Array.from(obj).map(mapFn, thisArg)

ex:

let myName6 = "Osama"
let arrayOfLetters = Array.from(myName6,num => num+3,this)
console.log(arrayOfLetters)

let x=Array.from(myName6).map(num => num+3, this)
console.log(x)
*/
let myName6 = "Osama";
let arrayOfLetters = Array.from(myName6);

console.log("myName6 : ",myName6); // Osama
console.log("arrayOfLetters : ",arrayOfLetters); //['O','s','a','m','a']

let myNumbers4 = [10, 20, 30, 15, 18, 100, 60];
// كل رقم فى الاراى نقص منة 10
let numbersMinusTen = Array.from(myNumbers4, (number) => number - 10)
console.log(numbersMinusTen);

// Array from with Map

const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map)  // [[1, 2], [2, 4], [4, 8]]
const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values())  // ['a', 'b'];
Array.from(mapper.keys())    // ['1', '2'];

// Array from with Array-like object (arguments)
function f() {
  return Array.from(arguments);
}
console.log(f(1, 2, 3)) // [1,2,3]

// Using arrow functions with Array.from()
console.log(Array.from({length: 5}, (v, i) => i)) // [0,1,2,3,4]


/*
 Array.fill(Value To Fill, Start Default 0, End Default Array.length)
عشان املا الاراى بحاجة معينة
*/
let theNumbers = [1, 10, 30, 70, 90];

// theNumbers.fill(100); // All Will Be 100
// theNumbers.fill(100, 2); // From 30 Will Be 100

theNumbers.fill(100, 1, 4); // Will Fill 10 ,30,70 ==> هياخد لحد اللى قبل 3
console.log("theNumbers",theNumbers)

/*
  New Array Methods
  Array.find()
  Array.findIndex()
  Array.copyWithin()
*/

// Array.find() Not Returning All Values

let myNumbers1 = [1, 10, 20, 30, 40];
let found1 = myNumbers1.find(el => el > 10);
console.log(found1); // 20

console.log(`${"#".repeat(20)}`);

// Array.findIndex() Not Returning All Values

let myNumbers2 = [1, 10, 20, 30, 40];
let found2 = myNumbers2.findIndex(el => el > 10);
console.log(found2); // 2

console.log(`${"#".repeat(20)}`); 
/*
Array.copyWithin(Target, Start Default 0, End Default Array.length)
بتنسخ عنصر جو الاراى ذات نفسها
*/

let myLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
myLetters.copyWithin(0) 
console.log(myLetters); //["A", "B", "C", "D", "E", "F", "G", "H"];

//end حط فى المكان واحد العناصر اللى موجودة من اول الاندكس رقم 5 لحد رقم 6 ومش هياخد الاندكس رقم 7 لانة مش بياخد ال
myLetters.copyWithin(1, 5, 7); // ["A", "F", "G", "D", "E", "F", "G", "H"]
console.log(myLetters);

/*
  OOP => Classes Part 1
  Old and New Class Syntax
*/

function User(name,age){
	this.name=name
	this.age=age
}

/*
دة prototype من ال properites , method جميع الاوبجكيت اللى فى الجافا اسكربت بتاخد ال 
*/

console.log(User.prototype) //{constructor: ƒ}
User.prototype.getInfo=function(){
	console.log(`hello ${this.name} Your age is ${this.age}`)
}

User.prototype.getDays=function(){
	console.log(`Your age is ${this.age * 365} days`)
}
const firstUser=new User("mm",36)
firstUser.getInfo()
firstUser.getDays()

//new class

class User2 {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  getInfo() {
    console.log(`Hello ${this.name} Your Age Is ${this.age}`);
  }
  getDays(){
    console.log(`You Lived For ${this.age * 365} Days`);
  }
}

const firstUser2 = new User2("Osama", 36);

firstUser2.getInfo();
firstUser2.getDays();
// console.clear()
/*
  - Call Stack    
  الحاجة اللى بناديها فى الاسكربت بتعتها 
   1- Mechanism To Make Interpreter Track Your Calls
    الموجودة فى الاسكربت calls الية بيستخدمها مترجم اللغة عشان يعمل تراك لل 
   
  2- When You Call A Function Its Added To The Stack
   ندات فنكشن فى التانية فى التانية فهو بيعمل تراك عشان يشوف اية اللى اتنادى الاول واللى 
      stack بعدة واللى بعدة اول لما بنادى على فنكشن بتنضاف لل 

   3- When Function Executed Its Removed From The Stack
   stack بتنشال من ال execute الفنكشن اللى بيتعملها  
    
  4- The Interpreter Continue Calling From The Last Point Reached
   stack اللى وصلها بعد ما خلص وشال الفنكشن من ال Last Point بتاعة من ال  Calling بيكمل ال  Interpreter ال
   
  5- Call Stack Detect Web API And Leave It To The Browser To Handle It
  Handle اول لما بيلاقيها بيسبها للبروزر يعملها api method بيحدد ال Call Stack ال
___________________________________________________

  - Web API (application programming interface)
  الميثود المتاحة فى الانفيرومينت اللى لغة الجافا اسكربت بتعمل رن فيها
    اية هى الانفيرومينت دى اللى هى البروزر
    اية اللى بيحصل اول لما الميثود 
    Callback Queue دى تخلص بنروح ضايفين النتيجة اللى طلعت دى فى ال

  - Methods Available From Environment => Browser
  - When Complete It Add The Callback To The Callback Queue
__________________________________________________
  - Event Loop
  1- Wait The Call Stack To Finish
   على ما يخلص Call Stack بينتظر ال 

  2- Get Callback From Callback Queue
  Callback Queue اللى موجودة من ال  Callback اول لما بيخلص بيجيب ال 
 
  3- Add Callback To Call Stack
  Call Stack وبعد كدة بيضيفها فى ال

  4- Callback Queue ==>  call الحاجات اللى بترجع من ال
*/

// Example One
let i = 10;
let j = 20;
console.log(i + j)

function first() {
  console.log("Hello First");
}
function second() {
  first(); 
  console.log("Hello Second");
}
second();
  
//One Three Two
console.log("One");
window.setTimeout(() => console.log("Two"), 0);
console.log("Three");
console.log('#'.repeat(20))
// 300

//let myVariable = 100;myVariable += 200; نفذ دى الاخر  يعنى نفذ دول قبلها 
window.setTimeout(() => console.log(myVariable3), 0);
let myVariable3 = 100;
myVariable3 += 200;

//One Three Two Last
// setTimeout() اللى هى ال api web method الاول وبعد كدة ال  console.log()بينفذ اللى فى ال
//Last وبعد كدة two عشان كدة هيطبع الاول last التايم بتاعة زيرو فهيخلص الاول عن الtwo فال
window.setTimeout(() => console.log("Last"), 1000);
console.log("One");
window.setTimeout(() => console.log("Two"), 0);
console.log("Three");
console.log('#'.repeat(20))

/*
javascript ==> 
single threaded language عبارة عن 
one call stack الجافا اسكربت عبارة عن
____________ 
Asynchronous Vs Synchronous Programming
Asynchronous ==> غير متزامن يعنى مش بيستنى اى حاجة 
Synchronous ==> لازم تخلص عشان اللى بعدها تشتغل statment متزامن يعنى كل 
*/

//Synchronous
console.log("One");
window.alert("Bad"); //لازم دى تخلص عشان اللى بعدها تشتغل
console.log("Two");

//Asynchronous
console.log("Function To Do Something");
window.setTimeout(() => console.log("Get Friends List"), 1000);
window.setTimeout(() => console.log("Get Latest News"), 2000);
console.log("Do Important Things, Waiting Is A Big Problem");

    
/*
؟؟ promise وال callback الفرق بين ال

callback function

In the callback, a function can be passed as an argument to another function.
It is a great way when we are dealing with basic cases such as minimal asynchronous operations.
A callback would be helpful in working with events 
is used to handle the execution of function after the completion of the execution of another 
function

لفنكشن تانية  عشان تعمل شغل او وظيفة معينة argument فنكشن ببصيها ك 
بستخدمها عشان اعمل هاندل ل اسنكورنس داتا
حاجة بعد حاجة jquery  كنا بنستخدمة فى ال
لما كنا بنعمل ايفنت بعد ايفنت 
promise فعملوا ال  readable اكتر من حاجة معتمدة على بعض فكدة الكود مش  
___________

callback hell

When we develop a web application that includes a lot of code, then working with callback 
is messy.This excessive Callback nesting is often referred to as Callback hell
*/ 

//Callback Hell  مثال على 

// ex:
first(2,function(firstResult,flag){
  if(!flag){
      second(firstResult,function(secondResult,flag){
        if(!flag){
           third(secondResult,function(thirdResult,flag){
              if(!flag){
                  console.log(" thirdResult = ",thirdResult) // 5
              }
           })
        }
      })
  }
})


function first(value,callback){
callback(value+1,false)
}
function second(value,callback){
callback(value+1,false)
}
function third(value,callback){
callback(value+1,false)
}

// ؟؟ Pyramid Of Dom or Callback Hell ازاى نتخطى ال

var promise=new Promise(function(resolve,reject){
  resolve(2)
 })
  
 promise.then(first).then(second).then(third).then(function(response){
     console.log(response) // 5
 })

 function first(value){
     return value+1
 }
 function second(value){
   return value+1

  }
 function third(value){
   return value+1
  }

  // another example
const myPromise5 = new Promise((resolve, reject) => {
  let thePosts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  resolve(thePosts)
});
myPromise5
  .then(
    (result) => {
    console.log(`Total Number Of Posts Is ${result.length} Posts`); // length عشان ارجع ال
    return result;
  }) // اللى بعدها تشتغل then لازم دى ترجع بيانات يعنى يكون فى  ريترن عشان ال 
  .then((result) => {
    console.log("#".repeat(15));
    console.log(`The First Post Is ${result[0]}`); //عشان ترجع اول بوست
    return result;
  })
  .then((result) => {
    console.log("#".repeat(15));
    console.log(`The Last Post Is ${result[result.length - 1]}`);
    return result;
  })
  .then((result) => {
    console.log("#".repeat(15));
    console.log(`Every Page Has 2 Posts`);
    console.log(`Application Has ${result.length / 2} Pages`);
  })


// fetch ==> promise بترجع 
fetch("https://api.github.com/users/ElzeroWebSchool/repos")
  .then((result) => {
    let allRepos = result.json();
    console.log(allRepos)
    return allRepos
  })
  .then((repos) => {
    console.log(`Total Number Of Repos Is ${repos.length}`)
    return repos
  })
  .then((repos) => {
    console.log(`First Repo Is ${repos[0].name}`)
    return repos
  })
  .then((repos) =>{
    console.log(`Last Repo Is ${repos[repos.length - 1].name}`);
    return repos;
  })
  .then((repos) => {
    for (let i = 0; i < repos.length; i++) { //عندى فى الصفحة repos لو عايزة اعرض كل ال 
      let newElement = document.createElement("div");
      let elementText = document.createTextNode(repos[i].name);
      newElement.appendChild(elementText);
      document.body.appendChild(newElement);
    }
  });





  /*
  Explain Promises in ES6 ?? 

  work with asynchronous programming in JavaScript. Asynchronous programming includes running 
  of processes individually from the main thread, and it notifies the main thread when it gets 
  complete.

  1- Promise Is One Of The Best Features In ES6 
  2- Promise Support Asynchronous Programming ==>
  3- Promise Is A Placeholder For A Future Value ==> بيكون القيمة اللى هتيجى فى المستقبل Promise 

  - Promise Is An Object ==>  بيكون اوبجكيت Promise ال 
  - Promise Is The Event Completion Or Failure of Async Operation & Its Resulting Value.

  - JavaScript Use Callbacks For Asynchronous Programming 
     ==> Asynchronous Programming لل Callbacks بيستخدم ال 
     [1] Function Called And Do The Task
     [2] Action Complete
     [3] Another Function Called
     [4] Action Complete
     [5] Another Function Called

  In Complex Cases => Every Call Add Nesting Level ==> 
  Callback Hell او Pyramid Of Doom وبتعمل حاجة اسمها Nesting Level من دى بتذود call فى الحالات المغقدة كل 
_______________________________

 there is the use of Callbacks for performing asynchronous programming.
 Promise Avoiding Callback Hell Or Pyramid Of Doom
  _________

 What are the states of promises in ES6 ?

   [1] Pending => Not Fulfilled Or Rejected لسة متحققش او مترفضش
   [2] Fulfilled => Operation Succeeded
   [3] Rejected => Operation Failed
   Once the promise is fulfilled or rejected, then it will be immutable.
   The Promise() constructor takes two arguments that are rejected function and a resolve 
   function. Based on the asynchronous operation,
   it returns either the first argument or the second argument.

*/

const myPromise = new Promise((resolve, reject) => {
  // resolve ==> Asynchronous Operation Fulfilled يعنى ال resolve هى المسئولة عن ال  
 //  Rejected ==> Asynchronous Operation Rejected يعنى Rejected هى المسئولة عن ال 
// console.log("Welcome To My First Promise");
/*
  Asynchronous Operation فية اكتر من Promise ال 
  Fulfilled => resolve
  Rejected => reject
*/
let connect = true;
if (connect){
  resolve("Connection Established");
} else {
  reject(Error("Connection Failed")); //Error ==>console يعنى هيرمى ايرور فى ال 
}
}).then( 
// argument وبتاخد اتنان Promise بترجع ال 
(resolved) => console.log(resolved), // دة لو اتحقق resolve("Connection Established"); بتجيب المحتوى اللى فى ال 
(rejected) => console.log(rejected) // دة لو اتحقق reject(Error("Connection Failed")); بتجيب المحتوى اللى فى ال 
)

console.log("typeof myPromise",typeof myPromise) //object
const myPromise2 = new Promise((resolve, reject) => {
// Only One State Allowed واحدة بس اللى هاتتنفذ
// resolve("Resolved");
// reject("Rejected"); // Ignored

if (Math.random() * 100 < 50) {
  resolve("Good")
} else {
  reject("Bad")
}
})

// myPromise2.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// )

// بس rejected بس يعنى هيسمك ال Bad هو هيمسك الايرور ال 
myPromise.catch((rejected) => console.log("rejected",rejected));

// بس rejected انة يمسك ال then لو عايزة اعمل دة بال 
myPromise.then(null, (rejected) => console.log(rejected));

//rejected هتمسك catch وال resolved هتمسك ال then بطريقة تانية ال 
myPromise2.then(
  (resolved) => console.log("resolved",resolved)
).catch((rejected) => console.log("rejected",rejected))


//Promise - All And Race
const myFirstPromise = new Promise((resolve, reject) => {
  let connect = true;
  if (connect) {
    resolve("First Promise Resolved");
  } else {
    reject("First Promise Rejected");
  }
});
const mySecondPromise = new Promise((resolve, reject) => {
  let settings = true
  if (settings) {
    resolve("Second Promise Resolved");
  } else {
    reject("Second Promise Rejected");
  }
})

//تتحقق ولو واحد فيهم متحققش بيطلع ايرور Promise لازم كل ال  Promise فى حالة انى عندى اكتر من 
Promise.all([myFirstPromise, mySecondPromise]).then((result) => {
  console.log(result) // ["First Promise Resolved","Second Promise Resolved"]
})

// Promise Race
//الاقل فى الوقت هو اللى بيتحقق الاول 
const myThirdPromise = new Promise((resolve, reject) => {
window.setTimeout(() => {
  resolve("First Promise Resolved");
}, 50)
})

const myFourthPromise = new Promise((resolve, reject) => {
window.setTimeout(() => {
  resolve("Second Promise Resolved");
}, 100);
})

// myFirstPromise.then((result) => console.log(result));
// mySecondPromise.then((result) => console.log(result));

// هينفذ واحد بس وهينفذ الاقل فى الوقت 
Promise.race([myThirdPromise, myFourthPromise]).then((result) => {
console.log(result);
})

/* 
  Promise And XMLHTTPRequest
   Promise فى وجود ال api وازاى نتعامل مع  ال Promise ازاى نرجع 
*/

 // XMLHTTPRequest without promise
 function getFirstRepo(apiURL){
 let myRequest = new XMLHttpRequest(); // دا اول ركوست هنعملة  
 myRequest.onreadystatechange = function(){ 
   // اول لما الاستات بتاعة الركوست بتتغير بينفذ الفنكشن دى
  /*
  this.readyState === 4 ==> Finished And Response Is Ready فى حالة ان الركوست 
  this.status === 200 ==> Response Status is ok
  */
  if (this.readyState === 4 && this.status === 200) { 
  console.log(this.responseText) // response هيرجع كل 
  console.log(JSON.parse(this.responseText)) // لاوبجكيت response عشان احول ال
  console.log(JSON.parse(this.responseText)[0]); // response عشان يجيب اول 
  console.log(JSON.parse(this.responseText)[0].name); // name عشان يجيب ال
      /*

        Ready State => The Status Of The Request حالة الركوست
        [0] Request Not Initialized (create request)
        [1] Server Connection Established (open request)
        [2] Request Recieved (send request)
        [3] Processing Request (بيدور على الحااجة اللى هيعملها ودى خااصة بالسرفير)
        [4] Request Is Finished And Response Is Ready (done operation complete)
        Status => Response Status Code
        [200] Ok
        [404] Not Found

      */
}
}

// myRequest.open(Method, URL, Async, User, Pass)
 myRequest.open("GET",apiURL , true); // true ==>asynchronous عشان يبقى 
//  myRequest.send() // عشان ابعت الركوست
}

getFirstRepo("https://api.github.com/users/maisabek/repos")


// XMLHTTPRequest with promise
const getFirstRepoWithPromise = (apiURL) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    // onload ==> modern technology عشان تمشى مع ال  onreadystatechange  بدل من 
    myRequest.onload = function () { 
      if (this.readyState === 4 && this.status === 200) {
        for(let i in this.responseText){
        resolve(`data from XMLHttpRequest with promise /n ${JSON.parse(this.responseText)[i].name}`);
        }
      }else {
        reject(Error(this.statusText)); // statusText ==>not found زى response اللى جاى من ال text دا ال 
      }
    };
    myRequest.open("GET", apiURL, true);
    // myRequest.send();
  })
}

getFirstRepoWithPromise("https://api.github.com/users/maisabek/repos").then(
  (result) => {
    let mydiv=document.createElement("div")
    let text=document.createTextNode(result)
    mydiv.appendChild(text)
    document.body.appendChild(mydiv)
  },// output عشان تطبع ال
  (error) => console.log(error)   // لو فى ايرور
)
// getFirstRepoWithPromise("https://api.github.com/users/maisabek/repos").then(
//   (result) => { 
//     let newElement = document.createElement("div");
//     let elementText = document.createTextNode(result); // جو الديف result هيحط ال  
//     newElement.appendChild(elementText);
//     document.body.appendChild(newElement);
//   },
//   (error) => console.log(error) 
// );
// console.clear()




/*
What is  load event?
The load event is fired when the whole page has loaded,
 including all dependent resources such as stylesheets and images. 
 This is in contrast to DOMContentLoaded , which is fired as soon as 
 the page DOM has been loaded, without waiting for resources to finish loading
*/
 
window.addEventListener('load', (event) => {
  console.log('page is fully loaded')
})

/*
What is  DOMContentLoadedevent?
The DOMContentLoaded event fires when the initial HTML document has been completely loaded 
and parsed, without waiting for stylesheets, images, and subframes to finish loading. ... 
If loaded as usual, stylesheets slow down DOM parsing as they're loaded in parallel,
 "stealing" traffic from the main HTML document
*/

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
})

/*
What is difference Between  load and DOMContentLoaded ?
The DOMContentLoaded event fires when all the nodes in the page have been 
constructed in the DOM tree. The load event fires when all resources such as
 images and sub-frames are loaded completely.

*/

/*
What is  beforeunload event?
The beforeunload event is fired when the window,the document and its resources are about 
to be unloaded.
 The document is still visible and the event is still cancelable at this point.
*/

const nameInput = document.querySelector("#name")

const beforeUnloadListener = (event) => {
  event.preventDefault();
  return event.returnValue = "Are you sure you want to exit?";
}

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    addEventListener("beforeunload", beforeUnloadListener, {capture: true});
  } else {
    removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
  }
})

// الميثود ==>  فنكشن متعرفة جو اوبجكيت
