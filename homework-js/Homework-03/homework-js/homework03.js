/* Print all numbers from an array and the sum
- Create an array with numbers
- Print all numbers from the array in a list element, in a new HTML page
- Print out the sum of all the numbers below the list
- Bonus: Try printing the whole mathetmatical equation as well (2+4+5=11) */


let niza = [2, 10, 20, 30];
let sum = 0;
let equationFormat = '';

for (i = 0; i < niza.length; i += 1) {
  myList.innerHTML += `<li>${niza[i]}</li>`
  sum += niza[i];

  if (i < niza.length - 1) {
    equationFormat += `${niza[i]} + `
  } else {
    equationFormat += `${niza[i]} = ${sum}`
  }
}

document.getElementById("myList").innerHTML += `<li>${sum}</li>`
document.getElementById("myList").innerHTML += `<li>The equation is : ${equationFormat}</li>`









