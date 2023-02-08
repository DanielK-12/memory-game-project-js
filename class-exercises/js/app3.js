/*
SUM OF TWO NUMBERS
Write a function that will takes 2 numbers(x, y) and will calculate it's sum(x + y)
Call it with different arguments and print the result
*/

/*define function */
function sumOfNum(x, y) {
    let result = x + y;
    return result;
}

/* call the function */

let suma = sumOfNum(3, 4);
console.log(suma);
console.log(sumOfNum(3, 4));


/* write a function that takes the first name and last name to return a full name */


function fullName(firstName, lastName) {

    return firstName + " " + lastName
}

let name = "Daniel";
let surname = "Kochovski";

let celosnoIme = fullName(name, surname);
console.log(celosnoIme);
console.log(fullName(name, surname));