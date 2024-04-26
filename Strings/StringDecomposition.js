var test = "Word,without,meaning";
result = test.split(",");
console.log(result);

var test = "meaning";
result1 = test.split("");
console.log(result1);

// String comparison
var a = "a";
var b = "b";
console.log(a < b); // prints 'true'

var a = "add";
var b = "b";
console.log(a < b); // prints 'true'

var a = "add";
var b = "ab";
console.log(a < b); // prints 'false'

console.log('add'<'ab' == 'ad'<'ab'); //prints 'true'


"Red Dragon".indexOf("Red"); // returns 0
"Red Dragon".indexOf("RedScale"); // returns -1
"Red Dragon".indexOf("Dragon", 0); // returns 4
"Red Dragon".indexOf("Dragon", 4); // returns 4
"Red Dragon".indexOf("", 9); // returns 9
