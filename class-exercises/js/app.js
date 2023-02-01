/* Declare at least one string,
one number,
one array,
one Boolean,
and one object variable
and add values to them */

/* undefined variable */
let test;
console.log(test);
console.log(typeof test);

/* define a number variable */
let num = 8;
console.log(num);
console.log(typeof num);

/* string variable */
let firstName = "Daniel";
let lastName = "Kochovski";
console.log(typeof firstName);
let fullName = "Daniel Kochovski"
console.log(fullName);

/* task one concatenate first name and lastname */
console.log(firstName + " " + lastName);

/* boolean values */
let isValid = true;
console.log(isValid);
console.log(typeof isValid);

/* operators */
let a = 5;
let b = 10;
console.log(a + b);
console.log(b - a);
console.log(a * b);
console.log(a / b);

console.log(3 % 2);

/* incrementing and decrementing */
let c = 3;
c++;
console.log(c);
c--;
let x = 5;
let y = "5";
console.log(x == y); /* if needed it does type conversion to compare the values */
console.log(x === y);/* strict comparisson - (includes type comparisson) */

/* type conversion */
let ime = "Daniel";
let year = 1990;
console.log(ime + " " + year);

console.log("hello students!");
console.log('it\'s snowing!');

/* Task #2 
Write a JavaScript program to convert a length given in feet to meters.
hint: 1 feet = 0.3048. 
*/

let lengthInFeet = 150;
const feetValue = 0.3048;
let lengthInMeters = 0;

lengthInMeters = lengthInFeet * feetValue;
console.log(lengthInMeters);
/*
Task #3
Write a program that will calculate the area of a circle
hint: pi * r * r
*/

let r = 15;
const pi = 3.14159;
let circleArea = pi * r * r;
console.log("plostinata na krugot e: " + circleArea);