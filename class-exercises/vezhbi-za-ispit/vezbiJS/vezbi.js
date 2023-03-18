/*
Homework 1
TASK
THE FORTUNE TELLER
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call the function 3 times with 3 different values for the arguments.
*/


// function tellFortune(a, b, c, d) {
//   console.log(`You will be a ${a} in ${b}, and married to ${c} with ${d} kids.`);
// }

// tellFortune('programmer', 'Chicago', 'Martina', 4);

// /*
// Homework 2
//  Homework LOOPS - Check the results of your assignGrade function from the conditionals exercise
// by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B.
//  For 90, you got an A.
//  For 91, you got an A.",
//  etc., logging each grade point in the range */

// function assignGrade(score) {
//   if (score >= 90 && score <= 100) {
//     return "A";
//   }
//   else if (score >= 80 && score <= 89) {
//     return "B";
//   }
//   else if (score >= 70 && score <= 79) {
//     return "C";
//   }
//   else if (score >= 60 && score <= 69) {
//     return "D";
//   }
//   else {
//     console.log("Requirments not met, please try again.")
//   }
// }

// let inputScore = prompt("Input your score here: ");
// let grade = assignGrade(inputScore);
// console.log(grade);

// for (let i = 60; i <= 100; i++) {
//   console.log('Your score is: ' + i + ', and you got: ' + assignGrade(i) + ' for it');
// }

/*
Homework 3
 Print all numbers from an array and the sum
- Create an array with numbers
- Print all numbers from the array in a list element, in a new HTML page
- Print out the sum of all the numbers below the list
- Bonus: Try printing the whole mathetmatical equation as well (2+4+5=11) */

// let niza = [3, 6, 9];
// let sum = 0;
// let zbir = "";
// for (i = 0; i < niza.length; i++) {
//   document.getElementById("lista").innerHTML += `<li>${niza[i]}</li>`;
//   sum += niza[i];
//   if (i < niza.length - 1) {
//     zbir += `${niza[i]} + `;
//   } else {
//     zbir += `${niza[i]} = ${sum}`
//   }
// }


// console.log(zbir);
// document.getElementById("lista").innerHTML += `<li>${sum}</li>`;
// document.getElementById("lista").innerHTML += `<li>Matematickata funkcija upotrebena e : ${zbir}</li>`;


/* Homework 4
 Create a recipe page from inputs
-Ask for the the name of the recipe
-Ask the user how many ingredients do we need for the recipe
-Ask the user for the name of every ingredient
-Print the name of the recipe in the HTML as Header
-Print all ingredients as an unordrered list in HTML
Extra: Use a table */

// const submit = document.getElementById('btn');
// const form = document.getElementById('form');

// submit.addEventListener('click', () => {
//   const recipe = document.getElementById("recipe");
//   const number = document.getElementById("number");
//   const newTitle = document.getElementById("naslov");
//   newTitle.innerText = "";
//   document.getElementById("lista").innerText = "";
//   newTitle.innerText += `Recipe name: ${recipe.value}`

//   for (i = 0; i < number.value; i++) {
//     form.innerHTML += `<input type='text' id='ingredient${i}'/><br/><br/>`
//   }

//   form.innerHTML += `<button id='print'>Print</button>`;
//   const printButton = document.getElementById('print');

//   printButton.addEventListener('click', (e) => {
//     let ingredientsFormat = '';
//     for (i = 0; i < number.value; i++) {
//       const ingredient = document.getElementById(`ingredient${i}`);
//       ingredientsFormat += `<li>${ingredient.value}</li>`;
//     }
//     document.getElementById('lista').innerHTML += `${ingredientsFormat}`;
//     form.innerHTML = '';
//   })
// });

/*Homework 5
Under the inputs in the HTML create a table element with 4 columns for First Name, Last Name, Password and E-mail
Change the register user exercise code. Instead of printing the values in console, try to create a new table row and fill it with that values
You should have a new table row for every new user you make
Homework 6

Write a Javascript function that will dynamiclly create a table
User should input the number of Columns and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
*/

// const firstName = document.getElementById('first-name');
// const lastName = document.getElementById('last-name');
// const email = document.getElementById('email');
// const pass = document.getElementById('password');
// const btn = document.getElementById('kopche');

// btn.addEventListener('click', () => {
//   add(firstName.value, lastName.value, email.value, pass.value)
// });

// function add() {
//   let firstName = document.getElementById('first-name');
//   let lastName = document.getElementById('last-name');
//   let email = document.getElementById('email');
//   let pass = document.getElementById('password');
//   let table = document.querySelector('#table tbody');
//   table.innerHTML += `<tr><td>${firstName.value}</td><td>${lastName.value}</td><td>${email.value}</td><td>${pass.value}</td></tr>`
// }

// time = 3

let today = new Date();
let time = today.getHours();
console.log(time);

let hoursOfDay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
let n = hoursOfDay.length;

let result = [];
for (let i = time; i > 0; i--) {
  result.push(i + ":00");
}
for (let i = n; i > time; i--) {
  result.push(i + ":00");
}
console.log(result);
// let k = time;
// k = k % n;
// let i, j;



// for (i = n - k, j = n - 1; i < j; i++, j--) {
//   let clock = hoursOfDay[i];
//   hoursOfDay[i] = hoursOfDay[j];
//   hoursOfDay[j] = clock;
// }

// for (i = 0, j = n - 1; i < j; i++, j--) {
//   let clock = hoursOfDay[i];
//   hoursOfDay[i] = hoursOfDay[j];
//   hoursOfDay[j] = clock;
// }


// for (let i = 0; i < n; i++) {
// }

// console.log(k + hoursOfDay);



