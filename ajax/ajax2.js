//ReadyState 
// 0 1 2 3 4
var req=new XMLHttpRequest(); // ReadyState=0 create request
req.open("GET","ajax1.html");// ReadyState=1 open request
req.send(); //ReadyState=2 send request
            //ReadyState=3 بيدور على الحااجة اللى هيعملها ودى خااصة بالسرفير
            //ReadyState=4 done operation complete

// status
// 200 = 4 = done
// 404 = not found