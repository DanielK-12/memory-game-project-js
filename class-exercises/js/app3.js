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


/* 
Create a function called celsiusToFahrenheit(temp)
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Hint: (celsius*9)/5 + 32;
Create a function called fahrenheitToCelsius(temp)
Now store a fahrenheit temperature into a variable
Convert it to celsius and output "NN°F is NN°C."
Hint: ((fahrenheit - 32)*5)/9
*/

function celsiusToFahrenheit(temp) {
    let celsius = temp;
    let fahrenheit = (celsius * 9) / 5 + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`)
}

celsiusToFahrenheit(3);

function fahrenheitToCelsius(temp) {
    let fahrenheit = temp;
    let celsius = ((fahrenheit - 32) * 5) / 9;
    console.log(fahrenheit + "°F " + "is " + celsius + "°C");
}

fahrenheitToCelsius(37);

/* 
Decription: prompt('Text to show to the user') displays a dialog box with the text
provided in the parentheses that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 
'Ok'
Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do, as in the previous example
Time to accomplish: 15 minutes.
*/

let budget = prompt("What is your budget?");

if (budget >= 50) {
    console.log("go to gevgelija");
} else if (budget >= 35) {
    console.log("go to kafana");
} else if (budget >= 20) {
    console.log("play some pool or darts")
} else {
    console.log("its movie night at home")
}

