const myString = "capitalize challenge";

let subStr1 = myString.split(" ")[0];
let subStr2 = myString.split(" ")[1];

let newString =
  subStr1.charAt(0).toUpperCase() +
  subStr1.slice(1) +
  " " +
  subStr2.charAt(0).toUpperCase() +
  subStr2.slice(1);

console.log(newString);
