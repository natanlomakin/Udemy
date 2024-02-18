console.log(100); //log the number 100

console.log("hello"); //log the string hello

console.log(20, "hello", true); //log the number 20, string hello, and boolean true

const x = 100;

console.log(x); //log the variable x

console.error('error'); //log error 

console.warn('warning'); //log warning

console.table({name:"john", email:"john@gmail.com"}); //log a table with data

console.group('simple'); //init a group to log
console.log(x);
console.error('error');
console.warn('warning');
console.groupEnd(); //end the group being logged

const styles = 'padding:10px; background-color: black; color: green'; //set a style variable for the console

console.log('%chello', styles); //log somthing with the styles that were set