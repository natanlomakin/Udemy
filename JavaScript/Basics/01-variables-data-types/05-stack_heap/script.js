//values are stored on the stack
const name = "john";
const newName = "johnatan";

console.log(name, newName); //---> john, johnatan

//reference values are stored on the heap
const person = { name: "john", age: "30" };

let newPerson = person;
newPerson.name = "bradley";

console.log(person, newPerson); //---> {john, 30}, {bradley, 30}
