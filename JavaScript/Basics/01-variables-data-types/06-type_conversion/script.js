let amount = "100";
//string to number
amount = parseInt(amount);
amount += amount;
amount = Number(amount);

let age = 30;
//number > string
age = age.toString();
age = String(age);

let grade = "85.6";
//string > decimal
grade = parseFloat(grade);

let num = 1;
//number > boolean
num = Boolean(num);

let foo = 'hello';
//ways to get a NaN (not a number) value
foo = parseInt(foo);
console.log(Math.sqrt(-1));
console.log(NaN + 1);
console.log(undefined + undefined);
console.log(foo / 3);