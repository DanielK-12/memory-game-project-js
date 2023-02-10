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

/* switch case scenario */

let wallet = prompt("what is your budget?")

switch (true) {
    case wallet >= 50:
        console.log("go to gevgelija");
        break;
    case wallet >= 35:
        console.log("go to kafana");
        break;
    case wallet >= 20:
        console.log("play some pool or darts");
        break;
    default:
        console.log("its movie night at home");
}

/* Write a function named greaterNumb that :
takes 2 arguments, both numbers.
retuns whichever number is greater (higher) number.
Call that function 2 times with different number pairs, and log 
the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

function largest(a, b) {

    if (a > b) {
        return largest = a;
    } else {
        return largest = b;
    }
}
// console.log(largest(20, 10));
console.log(largest(40, 60));
console.log("The largest number is: " + largest);

/* Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
А - Oсвоени од 90-100 поени 
B - Освоени од 80-89 поени 
C - Освоени од 70-79 поени 
D -Освоени од 65-69 поени 
F - Освоени помалку од 64 поени  */

// function assignGrade(score);

function assignGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    }
    else if (score >= 80 && score <= 89) {
        return "B";
    }
    else if (score >= 70 && score <= 79) {
        return "C";
    }
    else if (score >= 65 && score <= 69) {
        return "D";
    }
    else {
        console.log("Requirments not met, please try again.")
    }
}

let inputScore = prompt("Please input your score here");
let grade = assignGrade(inputScore);
console.log(grade);

/*  */

function helloWorld(lang) {
    if (lang == "de") {
        console.log("Hallo, Welt");
    } else if (lang == "es") {
        console.log("Hola, mundo");
    } else if (lang == "mk") {
        console.log("Здраво, свету");
    } else {
        console.log("Hello, world");
    }
}

let text = "DE";
let convertedText = text.toLowerCase(text);
helloWorld("convertedText");
helloWorld("es");
helloWorld("mk");
helloWorld("czk");

/* SWITCH  */

/* 
Decription: Formula for Chinese Zodiac caluclation:
(year - 4) % 12. Possible values:
0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig
*/

function chineseZodiac(year) {
    let result = (year - 4) % 12;
    if (result == 0) {
        console.log(year + " is year of the rat")
    } else if (result == 1) {
        console.log(year + "is the year of the fox")
    }
    else if (result == 2) {
        console.log(year + "is the year of the tiger")
    }
    else if (result == 3) {
        console.log(year + "is the year of the rabbit")
    }
    else if (result == 4) {
        console.log(year + "is the year of the dragon")
    }
    else if (result == 5) {
        console.log(year + "is the year of the snake")
    }
    else if (result == 6) {
        console.log(year + "is the year of the horse")
    }
    else if (result == 7) {
        console.log(year + "is the year of the goat")
    }
    else if (result == 8) {
        console.log(year + "is the year of the monkey")
    }
    else if (result == 9) {
        console.log(year + "is the year of the rooster")
    }
    else if (result == 10) {
        console.log(year + "is the year of the dog")
    }
    else if (result == 11) {
        console.log(year + "is the year of the pig")
    }
    else {
        console.log("invalid input");
    }
}

chineseZodiac(1990);



