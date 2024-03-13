// syntex error
// blocking Type script from converting to java script

lett  a = 2;

leet b = "hello";

consst c = true;

cconst = null;


// Type errors

// when syntex is valid but detected an error with the type.
// It would b run and compile to java script, but some misbehave.

let z = true;
console.push(z); // property push does not exist on type console

let y = "25.34";
console.log(Math.floor(y)); //Argument of type string is not assignable to parameter of type number

Math.round(z);// Argument of type 'boolean' is not assignable to parameter of type number

// Assignability errors

// we can reassign the variables but can't change the type

let Q = 'hina'

