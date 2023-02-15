/* WEIGHT CALCULATOR IN CHICKENS
Want to know how much you weight in chickens? No problem!
Write a function named weightInChickens that:
Takes an input weigh in kilograms
Calculates weight in chickens ( 1 chicken = 0.5kg )
The input should be entered through prompt

The result should be shown in the HTML of the page
Note:The html page needs to have title and result paragraph */

/* FOR HOMEWORK - PRINT IMAGES OF CHICKENS FOR EACH WEIGHT IN CHICKENS */
let myApp = document.getElementById("app");
function weightInChickens(weight) {
  return weight / 0.5;
};

function printChickens(number, element) {
  // element.innerHTML += number;
  let chicken = myApp.innerHTML;
  myApp.innerHTML = "";
  for (let i = 0; i < number; i++) {
    element.innerHTML += chicken;
  }
};

let input = parseInt(prompt("Input your weight in KG: "));



let number = weightInChickens(input);
printChickens(number, myApp);


