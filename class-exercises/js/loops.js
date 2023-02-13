let week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

console.log(week);
let counter = 0;
while (counter < week.length) {
  document.write(week[counter] + ", ");
  counter++;
}

/* Action: Write a JavaScript program to read ten values, determine the largest value, and print it */

// let brojac = 0;
// let values = [];

// while (brojac < 5) {
//   let valueToInsert = prompt('Input value: ');
//   values.push(valueToInsert);
//   brojac++;
// }

// console.log(values);

// 180, 50, 40, 1000, 8, 200
let brojki = [180, 50, 40, 1000, 8, 200];
let maxValue = brojki[0];
let i = 0;
while (i < brojki.length) {
  if (maxValue < brojki[i]) {
    maxValue = brojki[i]
  }
  i++;
}
console.log("The largest number in our array is: " + maxValue);

/* FOR LOOP */

for (let i = 0; i < brojki.length; i++) {
  if (maxValue < brojki[i]) {
    maxValue = brojki[i];
  }
}

/* Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even"). */

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} e paren broj`);
  } else {
    console.log(`${i} ne e paren broj`);
  }
}

for (let i = 0; i <= 10; i++) {
  // console.log(i + "*9 = " + (i * 9));
  console.log(`${i} * 9 = ${i * 9}`);
}

/* compare the sums of two arrays and pring the bigger sum */

let arrayOne = [2, 15, 25, 552, 150, 900];
let arrayTwo = [50, 60, 200, 300, 1980, 2023];

let sumOne = 0;
let sumTwo = 0;

for (let i = 0; i < arrayOne.length; i++) {
  sumOne += arrayOne[i];
  sumTwo += arrayTwo[i];
}

if (sumOne > sumTwo) {
  console.log(`Zbirot na nizata arrayOne e pogolem od nizata arrayTwo i iznesuva ${sumOne}`);
} else if (sumOne < sumTwo) {
  console.log(`Zbirot na nizata arrayTwo e pogolem od nizata arrayOne i iznesuva ${sumTwo}`);
}
else {
  console.log(`Zbirot na nizite e ednakov`);
}