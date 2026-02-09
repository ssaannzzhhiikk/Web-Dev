// a primitive as an object
let str = "hello";
alert(str.toUpperCase() );

let n = 1.23456;

alert( n.toFixed(2) ); // 1.23

// Numbers
let billion = 1000000;
billion = 1_000_000_000;

billion = 1e9;

// Hex
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

// Octal
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111


num = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23


alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading




alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)
alert( Math.max(3, 5, -10, 0, 1) ); // 5

alert( Math.pow(2, 10) ); // 2 in power 10 = 1024

let str1 = `Hello`;

// the first character
alert( str1[0] ); // H
alert( str1.at(0) ); // H

// the last character
alert( str1[str.length - 1] ); // o
alert( str1.at(-1) );


alert( str1[-2] ); // undefined
alert( str1.at(-2) ); // l

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
// The methods str.startsWith and str.endsWith do exactly what they say:

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); 


let str3 = "stringify";
alert( str3.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str3.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

let str4 = "stringify";
alert( str4.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now
fruits.pop(); // take 1 element from the end

let arr5 = ["t", "e", "s", "t"];

alert( arr5.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr5.slice(-2) ); // s,t (copy from -2 till the end)

["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3

let user = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two users
let someUsers = user.filter(item => item.id < 3);

alert(someUsers.length); // 2

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

arr.sort();

alert( arr );  // 1, 15, 2


let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}

let now = new Date();
alert( now ); 

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );


let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user1 = JSON.parse(userData);

alert( user1.friends[1] ); // 1