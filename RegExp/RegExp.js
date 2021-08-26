/*

A regular expression 
are patterns used to match character combinations in strings. 
In JavaScript,regular expressions are also objects that describes a pattern of characters

These patterns are used with the exec() and test() methods of RegExp, 
and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String

use regular expressions to perform powerful 
pattern-matching and search-and-replace functions on text.

Creating a regular expression ?

You construct a regular expression in one of two ways
1- Using a regular expression literal, which consists of a pattern enclosed between slashes
 as follows:
  
 let re = /ab+c/
 
Regular expression literals provide compilation of the regular expression when 
the script is loaded. If the regular expression remains constant, using this 
can improve performance

2- Or calling the constructor function of the RegExp object, as follows

 let re = new RegExp('ab+c')

Using the constructor function provides runtime compilation of the regular expression.
Use the constructor function when you know the regular expression pattern will be changing,
or you don't know the pattern and are getting it from another source, such as user input

________

A regular expression pattern is composed of simple characters, such as /abc/
or a combination of simple and special characters, such as /ab*c/ or /Chapter (\d+)\.\d*/

// The last example includes parentheses, which are used as a memory device.
// The match made with this part of the pattern is remembered for later use

// 
/*

1- /a/ دى معناها انة هيرجع ترو لو الاسترنج اللى مدخلاة محتوى على حرف ال اية
2-/ab/         true if string contain ab
3- /[abc]/     true if string contain a or b or c
4- /[^abc]/     true if string not contain a or b or c
5- /[a-z]/      true if entar any char between a to z
6- /[0-9]/      true if entar any number between 0 to 9
7- /[a-z 8]/    true if entar any char between a to z or 8 
8- /[a-z 0-9]/   true if entar any small char between a to z or 0 to 9
9- /[a-z A-Z 0-9]/  true if entar any small char between a to z or any char between A to Z or 0 to 9
10- /[a-Z]/    same  /[a-z A-Z]/
	
Assertions (^, $, x(?=y), x(?!y), (?<=y)x, (?<!y)x, \b, \B)

11-  /^[A-Z]/     الاسترنج لازم يبدء بحرف كابتل 
12-  /^[A-Z]$/     الاسترنج لازم يبدء بحرف كابتل وينتهى بحرف كابتل
13-  /web(design|develop)/  true if web design or web develop
14-  /a{4}/   يجى اربعة اية مش شرط جمب بعض ولو اكتر من اربعة بردوا يرجه ترو
15-  /a{2,5}/  يرجع ترو لو جالة من اتنان الى خمسة وممكن اكتر من خمسة
16-  /a{2,5}$/  ترجع ترو لو من 2 الى 5 مينفعش يذيد عن 5
17- [^...]   Any one character not between the brackets.
18- [...] Any one character between the brackets

Quantifiers  (*, +, ?, x{n}, x{n,}, x{n,m})

19- p+   It matches any string containing one or more p's.
20- p*   It matches any string containing zero or more p's.
21- p?   It matches any string containing at most one p.
22- p{N} It matches any string containing a sequence of N p's
23- p{2,3} It matches any string containing a sequence of two or three p's.
24- p{2, } It matches any string containing a sequence of at least two p's.
25- p$     It matches any string with p at the end of it.
26- ^p     It matches any string with p at the beginning of it.
27- p.p    It matches any string containing p, followed by any character,
           in turn followed by another p
28- ^.{2}$   It matches any string containing exactly two characters.
29- <b>(.*)</b>   It matches any string enclosed within <b> and </b>.
30- p(hp)*  It matches any string containing a p followed by
            zero or more instances of the sequence hp


37- \xnn    The Latin character specified by the hexadecimal number nn; for example,
            \x0A is the same as \n
38- \uxxxx   The Unicode character specified by the hexadecimal number xxxx; for example,
             \u0009 is the same as \t
39- \cX   The control character ^X; for example, \cJ is equivalent to the newline character\n

_______

Metacharacters (Character classes)
A metacharacter is simply an alphabetical character preceded by 
a backslash that acts to give the combination a special meaning

______

40- \s   a whitespace character (space, tab, newline)
41- \S   non-whitespace character
42- \d   a digit (0-9)
43- \D   a non-digit
44- \w   a word character (a-z, A-Z, 0-9,_)
45- \W   a non-word character
46- [\b] Matches a literal backspace (special case).
47- \0  The NULL character (\u0000)
48- \t   horizontal Tab (\u0009)
49- \n  Newline (\u000A)
50- \v  Vertical tab (\u000B)
51- \f  Form feed (\u000C)
52- \r  Carriage return (\u000D)
53- [aeiou]  matches a single character in the given set
54- [^aeiou] matches a single character outside the given set
55-  (foo|bar|baz)  matches any of the alternatives specified
56- \cX   Matches a control character using caret notation, where "X" is a letter 
from A–Z (corresponding to codepoints U+0001–U+001A). For example, /\cM\cJ/ matches "\r\n
57- \uhhhh	Matches a UTF-16 code-unit with the value hhhh (four hexadecimal digits).

58- \b   لو فى الاول الحرف ميكونش قبله حاجة ولو فى الاخر ميكونش بعده حاجة
Matches a word boundary. This is the position where a word character is not 
followed or preceded by another word-character, such as between a letter and a space.
Note that a matched word boundary is not included in the match. In other words, 
the length of a matched word boundary is zero

Examples:
/\bm/ matches the "m" in "moon".
/oo\b/ does not match the "oo" in "moon", because "oo" is followed by "n" which is a
 word character


59- \B     Matches a non-word boundary. This is a position where the previous and next 
character are of the same type: Either both must be words, or both must be non-words,
 for example between two letters or between two spaces. The beginning and end of a 
 string are considered non-words. Same as the matched word boundary, the matched 
 non-word boundary is also not included in the match. 
 For example:
  /\Bon/ matches "on" in "at noon", and /ye\B/ matches "ye" in "possibly yesterday".
__________

Modifiers
Several modifiers are available that can simplify the way you work with regexps, 
like case sensitivity, searching in multiple lines, etc.

Regular expressions have six optional flags (i,m,g,s,u,y,d)

___________


50- i ==>  Perform case-insensitive matching.
small مش شرط يكون  كابتل ولا 

const regex1 = new RegExp('foo');
const regex2 = new RegExp('foo', 'i');

console.log(regex1.test('Football')); // false
console.log(regex2.test('FoOtball')); //true
console.log(/D/.test('please Do this now')) //true
console.log(/d/.test('please Do this now')) //false

______

51- m ==>  	Multi-line search
بيبحث فى اكتر من سطر

const regex1 = new RegExp('^football');
const regex2 = new RegExp('^football', 'm');

console.log(regex1.test('rugby\nfootball'));  false
console.log(regex2.test('rugby\nfootball'));  true

______

52- g ==>  Performs a global match 
matches بيبحث فى الاسترنج كلة وبيرجع كل ال 

The "g" after the regular expression is an option or flag that performs a global search,
looking in the whole string and returning all matches

ex1:
const regex1 = new RegExp('foo', 'g');
console.log(regex1.global)    true

const regex2 = new RegExp('bar', 'i');
console.log(regex2.global)   false

------

ex2:
var regex = new RegExp('foo', 'g');
console.log(regex.global);  // true

var str = 'fooexamplefoo';
var str1 = str.replace(regex, '');
console.log(str1);  // Output: example ==>  '' وحط foo شال كل ال global عشان هى 

var regex1 = new RegExp('foo');
var str2 = str.replace(regex1, '');
console.log(str2);  // Output: examplefoo  ==> ''  بس وحط foo شال اول global عشان مش 

________

53- s ==>  Allows . to match newline characters.

const regex1 = new RegExp('foo', 's')
console.log(regex1.dotAll)  true

const regex2 = new RegExp('bar')
console.log(regex2.dotAll)  false

exp2:

var str1 = 'bar\nexample foo example';
var regex1 = new RegExp('bar.example','s');
console.log(str1.replace(regex1,'')); // Output: foo example

var str2 = 'bar\nexample foo example'
var regex2 = new RegExp('bar.example');
console.log(str2.replace(regex2,'')); // Output: bar
                                      //         example foo example
_______

54- u ==>  "unicode"; treat a pattern as a sequence of unicode code points.

const regex1 = new RegExp('\u{61}')
const regex2 = new RegExp('\u{61}', 'u')

console.log(regex1.unicode)  false

console.log(regex2.unicode)  true

console.log(regex1.source)  output: "a"

console.log(regex2.source)  output: "a"

_________

55- y ==>   
Perform a "sticky" search that matches starting at the current position
in the target string.See sticky.

const str1 = 'table football';
const regex1 = new RegExp('foo', 'y');

regex1.lastIndex = 6;

console.log(regex1.sticky) true

console.log(regex1.test(str1))  true فرجع ترو foo لاقى 

console.log(regex1.test(str1)) false تانية فرجع فالس foo ملاقش 

________

 56- d  ==> Generate indices for substring matches
اللى عمل ماتش string بترجع الاندكس بتاع ال 
const str1 = 'foo bar foo';
const regex1 = new RegExp('foo', 'gd');
console.log(regex1.hasIndices); // Output: true
console.log(regex1.exec(str1).indices[0]); // Output: Array [0, 3]
console.log(regex1.exec(str1).indices[0]); // Output: Array [8, 11]

const str2 = 'foo bar foo';
const regex2 = new RegExp('foo');
console.log(regex2.hasIndices); // Output: false
console.log(regex2.exec(str2).indices); // Output: undefined

_________

RegExp Properties
Here is a list of the properties associated with RegExp and their description.

_________

53- RegExp constructor Property
it returns a reference to the array function that created the instance's prototype
 <script type = "text/javascript">
  // Returns the function that created this object's instance.
    var re = new RegExp("string"); 
    document.write("re.constructor is:" + re.constructor); 
 </script>

 Output
re.constructor is: function RegExp() { [native code] }

_________

54- RegExp global Property
global 
is a read-only boolean property of RegExp objects. It specifies whether a particular 
regular expression performs global matching, i.e., whether it was created with the "g"
attribute.

Returns "TRUE" if the "g" modifier is set, "FALSE" otherwise.

 <script type = "text/javascript">
         var re = new RegExp( "string" );
         
         if ( re.global ) {
            document.write("Test1 - Global property is set"); 
         } else {
            document.write("Test1 - Global property is not set"); 
         }

         re = new RegExp( "string", "g" );
         
         if ( re.global ) {
            document.write("<br />Test2 - Global property is set"); 
         } else {
            document.write("<br />Test2 - Global property is not set"); 
         }
  </script>

Output
Test1 - Global property is not set
Test2 - Global property is set

________


55- RegExp ignoreCase Property
ignoreCase 
is a read-only boolean property of RegExp objects. It specifies whether a particular 
regular expression performs case-insensitive matching, i.e., whether it was created with
the "i" attribute

Returns "TRUE" if the "i" modifier is set, "FALSE" otherwise.

    <script type = "text/javascript">
         var re = new RegExp( "string" );
        
         if ( re.ignoreCase ) {
            document.write("Test1-ignoreCase property is set"); 
         } else {
            document.write("Test1-ignoreCase property is not set"); 
         }
         re = new RegExp( "string", "i" );
        
         if ( re.ignoreCase ) {
            document.write("<br/>Test2-ignoreCase property is set"); 
         } else {
            document.write("<br/>Test2-ignoreCase property is not set"); 
         }
      </script>

Output
Test1 - ignoreCase property is not set
Test2 - ignoreCase property is set

__________


56- RegExp lastIndex Property
lastIndex 
ولازم global يكون RegExp بيرجع اخر اندكس ل استرنج اللى هتعمل ماتش وبيبدء عد من الوحد ولازم  
test() or exec() ينفذ الفنكشن 

a read/write property of RegExp objects. For regular expressions with the "g" attribute set
it contains an integer that specifies the character position immediately following the last
match found by the RegExp.exec() and RegExp.test() methods. These methods use this property
as the starting point for the next search they conduct.
This property allows you to call those methods repeatedly, to loop through all matches in 

a string and works only if the "g" modifier is set.

This property is read/write, so you can set it at any time to specify where in the target 
string, the next search should begin. exec() and test() automatically reset the lastIndex
to 0 when they fail to find a match (or another match)

Returns an integer that specifies the character position immediately following the last match.
     <script type = "text/javascript">
         var str = "Javascript is an interesting scripting language";
         var re = new RegExp( "script", "g" );
         
         re.test(str)
         document.write("Test 1 - Current Index: " +  re.lastIndex)

         re.test(str)
         document.write("<br />Test 2 - Current Index: " + re.lastIndex); 
      </script>

      output:
Test 1 - Current Index: 10
Test 2 - Current Index: 35

__________

57-RegExp multiline Property
Returns "TRUE" if the "m" modifier is set, "FALSE" otherwise.

multiline is a read-only boolean property of RegExp objects.
It specifies whether a particular regular expression performs multiline matching,
whether it was created with the "m" attribute

 <script type = "text/javascript">
         var re = new RegExp( "string" );
         
         if ( re.multiline ) {
            document.write("Test1-multiline property is set"); 
         } else {
            document.write("Test1-multiline property is not set"); 
         }
         re = new RegExp( "string", "m" );
         
         if ( re.multiline ) {
            document.write("<br/>Test2-multiline property is set"); 
         } else {
            document.write("<br/>Test2-multiline property is not set"); 
         }
  </script>

  Output
Test1 - multiline property is not set
Test2 - multiline property is set

_________

58-RegExp source Property
RegExp pattern بترجع التكست بتاع 

Returns the text used for pattern matching.

source is a read-only string property of RegExp objects.
It contains the text of the RegExp pattern. 
This text does not include the delimiting 
slashes used in regular-expression literals, and it does not include the "g", "i", and
"m" attributes

       <script type = "text/javascript">
         var str = "Javascript is an interesting scripting language";
         var re = new RegExp( "script", "g" )
         re.test(str)
         document.write("The regular expression is : " +  re.source); 
      </script>

Output
The regular expression is : script 

__________

RegExp Methods
Here is a list of the methods associated with RegExp along with their description.

___________

59- RegExp exec Method
Returns the matched text if a match is found, and null if not.

The exec method searches string for text that matches regexp.
If it finds a match, it returns an array of results; otherwise, it returns null

 <script type = "text/javascript">
         var str = "Javascript is an interesting scripting language";
         var re = new RegExp( "script", "g" );
         
         var result = re.exec(str);
         document.write("Test 1 - returned value : " +  result); 
         
         re = new RegExp( "pushing", "g" )
         var result = re.exec(str);
         document.write("<br />Test 2 - returned value : " +  result); 
</script>

Output
Test 1 - returned value : script
Test 2 - returned value : null 

___________

60-RegExp test Method
Returns the matched text if a match is found, and null if not.

The test method searches string for text that matches regexp.
If it finds a match, it returns true; otherwise, it returns false

  <script type = "text/javascript">
         var str = "Javascript is an interesting scripting language"
         var re = new RegExp( "script", "g" )
         
         var result = re.test(str)
         document.write("Test 1 - returned value : " +  result)
         
         re = new RegExp( "pushing", "g" );
         
         var result = re.test(str);
         document.write("<br />Test 2 - returned value : " +  result); 
  </script>

Output
Test 1 - returned value : true
Test 2 - returned value : false 

_________

61-RegExp toSource Method
Returns the string representing the source code of the object.

The toSource method string represents the source code of the object.
This method does not work with all the browsers.

  <script type = "text/javascript">
         var str = "Javascript is an interesting scripting language";
         var re = new RegExp( "script", "g" );
         
         var result = re.toSource(str);
         document.write("Test 1 - returned value : " +  result); 
         
         re = new RegExp( "/", "g" );
         
         var result = re.toSource(str);
         document.write("<br />Test 2 - returned value : " +  result); 
   </script>

Output
Test 1 - returned value : /script/g
Test 2 - returned value : /\//g

_________

62-RegExp toString Method
Returns the string representation of a regular expression.

The toString method returns a string representation of a regular expression in the form 
of a regular-expression literal

 <script type = "text/javascript">
         var str = "Javascript is an interesting scripting language";
         var re = new RegExp( "script", "g" );
         
         var result = re.toString(str);
         document.write("Test 1 - returned value : " +  result); 
         
         re = new RegExp( "/", "g" )
         
         var result = re.toString(str)
         document.write("<br/>Test 2 - returned value : " +  result)
 </script>


Output
Test 1 - returned value : /script/g
Test 2 - returned value : /\//g

_____________

63- match()
Returns an array containing all of the matches,
including capturing groups, or null if no match is found

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

________

64- matchAll()
Returns an iterator containing all of the matches, including capturing groups.
اراى جوها اكتر من اراى

const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]

________

65- search()
بترجع الاندكس
Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const paragraph = 'The quick brown fox jumps over the lazy dog.
 If the dog barked, was it really lazy?';

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43  عشان بترجع الاندكس 

console.log(paragraph[paragraph.search(regex)]);
// expected output: "."

_______

66- replace()
replacement substring  فقط بال  matched substring بتبدل مع اول  

Executes a search for a match in a string, and replaces the matched substring with 
a replacement substring

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

_______

67- replaceAll()
replacement substring   بال  matched substring بتبدل مع كل  

Executes a search for all matches in a string, and replaces the matched substrings 
with a replacement substring.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"
// global flag required when calling replaceAll with regex
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

______


68- split()
بتحول الاسترنج لاراى
Uses a regular expression or a fixed string to break a string into an array of substrings

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

_________

Capturing groups
 () جو ال pattern جزء من ال 
  قبل الاقواس بيطبق على كل اللى فى القوس quantifier ولو حط 
  result array فى ال separate item ك match بيسمح ان اجيب جزء من ال 
 A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”.

That has two effects:
1- It allows to get a part of the match as a separate item in the result array.
2- If we put a quantifier after the parentheses, it applies to the parentheses as a whole.


؟؟ regular expression to search for a website domain لو عايزة اعمل 

let regexp = /(\w+\.)+\w+/g
alert( "site.com my.site.com".match(regexp) ); // site.com,my.site.com
The search works, but the pattern can’t match a domain with a hyphen, e.g. my-site.com,
because the hyphen does not belong to class \w.
We can fix it by replacing \w with [\w-] in every word except the last one: ([\w-]+\.)+\w+.


____________

const aliceExcerpt = 'The Caterpillar and Alice looked at each other'
// abcd fghijklmnopqrstuvwxyz
const regexpWithoutE = /\b[a-d f-z]+\b/ig
console.log(aliceExcerpt.match(regexpWithoutE))  // output: Array ["and", "at"]

const imageDescription = 'This image has a resolution of 1440×900 pixels.'
const regexpSize = /([0-9]+)×([0-9]+)/;
const match = imageDescription.match(regexpSize)
// output: "Width: 1440 / Height: 900
console.log(`Width: ${match[1]} / Height: ${match[2]}.`)

--------

var aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers
                    now and then."
var regexpVowels = /[aeiouy]/g

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length)
// Number of vowels: 25

_________

Escaping

If you need to use any of the special characters literally 
(actually searching for a "*", for instance), 
you must escape it by putting a backslash in front of it. For instance,

backslash يحط قبلها special لو عايز الاسترك تبقى موجودة فى الكلمة اللى بيبحث عنها يعنى متبقاش 
 a*b مثال لو بيبحث عن 
to search for "a" followed by "*" followed by "b", you'd use /a\*b/ — the backslash 
"escapes" the "*", making it literal instead of special.

new RegExp("a\\*b") بيكتب  RegExp constructor لو هيستخدم 

If using the RegExp constructor with a string literal, remember that the backslash is an 
escape in string literals, so to use it in the regular expression, you need to escape it 
at the string literal level. /a\*b/ and new RegExp("a\\*b") create the same expression,
which searches for "a" followed by a literal "*" followed by "b".

If escape strings are not already part of your pattern you can add them using 
String.replace

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g , '\\$&'); // $& means the whole matched string
}
___________

let personList = `First_Name: John, Last_Name: Doe, First_Name: Jane, Last_Name: Smith`
let regexpNames =  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/mg;
let match = regexpNames.exec(personList);
do {
  console.log(`${match}`);
} while((match = regexpNames.exec(personList)) !== null)
output: 
 First_Name: John, Last_Name: Doe,John,Doe
 First_Name: Jane, Last_Name: Smith,Jane,Smith

---------

(?<Name>x)

Named capturing group: 
Matches "x" and stores it on the groups property of the returned matches under 
the name specified by <Name>. The angle brackets (< and >) are  required for group name.

For example,to extract the United States area code from a phone number, 
we could use /\((?<area>\d\d\d)\)/. The resulting number would appear under matches.groups.area

_______

\k<Name>

A back reference to the last substring matching the Named capture group specified by <Name>.
For example, /(?<title>\w+), yes \k<title>/ matches "Sir, yes Sir" in "Do you copy? 
Sir, yes Sir!"

\k is used literally here to indicate the beginning of a back reference to a Named capture 
group.

________

(?:x)

Non-capturing group:
Matches "x" but does not remember the match.
The matched substring cannot be recalled from the resulting array's elements ([1], ..., [n])
or from the predefined RegExp object's properties ($1, ..., $9)

_______

The regular expression looks for:

1- three numeric characters \d{3} OR | a left parenthesis \(, followed by three digits \d{3}, 
   followed by a close parenthesis \), in a non-capturing group (?:)
2- followed by one dash, forward slash, or decimal point in a capturing group ()
3- followed by three digits \d{3}
4- followed by the match remembered in the (first) captured group \1
5- followed by four digits \d{4}

*/

var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
  var OK = re.exec(phoneInput.value);
  var out = document.querySelector('#out');
  if (!OK) {
    out.textContent = `${phoneInput.value} isn't a phone number with area code!`;
  } else {
    out.textContent = `Thanks, your phone number is ${OK[0]}`;
  }
} 