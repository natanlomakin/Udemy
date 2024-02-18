let x;

x = 5 + '5'; //---> 55, + makes it a concatenation
x = 5 + Number('5'); //---> 10

x = 5 * '5'; //---> 25, JS converts the string to a number because of the * operator

x = 5 + null; //---> 5, null coerced to 0

