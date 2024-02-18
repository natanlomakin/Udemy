let x;

let name = 'john';
let age = 30;

//concatenation
x = "hello my name is " + name + " and i am " + age + " years old";

console.log(x);

//Template literals
x = `my name is ${name} and i am ${age} years old`;

//string properties and methods
s = "hello world";

x = s.length;

//access value by key
x = s[2];

//properties
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('h'); //if there is more than one matching charcter, we get the first one

x = s.subString(0, 4); //return a string from index 0 to index 4

x = s.subString(5); //return a string from index 5

x = s.slice(0, 5); //the same as subString
x = s.slice(-11, -6); //but with slice we can start from the end of the string

x = s.trim(); //gets rid of any space at the start of the string

x = s.replace('world', 'john'); //replace the string 'world' with 'john'

x = s.includes('hello'); //return boolean if the given value is in the string

x = s.valueOf();

x = s.split(' '); //returns an array that is splited by the given value, in this example the value is space
x = s.split(''); //returns an array of the characters


