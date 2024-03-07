//re assigning a variable
let personName = "Ahmed";
console.log(personName);
// reassign in same type
personName = "Mehak";
//print after reassign 
console.log(personName);
// re-assign practce with number type
// save a number in a variable
let num = 45;
//print
console.log(num);
// reassign the variable
num = 23;
//print to check
console.log(num);
//practice error
//if we change the value of a variable(one type to another type)
let num1 = 12;
let PersonName = "Bilal";
//print these variables
console.log(num1 + '\n' + PersonName);
num1 = "Hello";
PersonName = 45;
//print now
console.log(num1 + '\n' + PersonName);
// concatenate string with variables
//print a message to a person
console.log("Good Day, " + personName + "! I wish all the best.");
//print message with ""
let singer1 = 'Saad';
let message = singer1 + ' is an unknown singer.';
console.log(message);
//concatenate string with number
let personAge = 35;
console.log("Person age is: " + (personAge + 5));
export {};
