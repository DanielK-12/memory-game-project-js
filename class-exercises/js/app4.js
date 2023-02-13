/* Arrays & loops */

let weekdays = [
  "Monday",   //0
  "Tuesday",  //1 
  "Wednesday",//2
  "Thursday", //3
  "Friday",   //4
  "Saturday", //5
  "Sunday"    //6
];
weekdays[0] = "Понеделник";

console.log("Today is : " + weekdays[0] + ".");
console.log(`Today is : ${weekdays[0]}.`);

console.log(weekdays); //logs the array
console.log(weekdays.length); //logs number of elements
console.log(weekdays[weekdays.length - 1]); //logs the very last element using length -1

console.log(weekdays[weekdays.length]);

weekdays.push('There are no other days in the week.', 'maybe there should be', 'perhaps the weekend should be 3 days'); // we can push multiple elements
console.log(weekdays[weekdays.length - 1]);

/* unshift(); allows us to add items at the start of an array */
let properties = ['red', '14px', 'Arial'];
properties.unshift('bold');
console.log(properties);
properties.unshift('uppercase', 'italic');
console.log(properties);

/* command pop(); allows us to REMOVE an item at the END of an array  */

let loto = [2, 5, 8, 15, 36];
let removedNumber = loto.pop();
console.log(loto);
console.log(removedNumber);

/* command shift(); allows us to remove an item at the BEGINNING of an array */

let removedValue = loto.shift();
console.log(loto);
console.log(removedValue);

/* splice();  lets us select any element at specific poisition */
let fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);

