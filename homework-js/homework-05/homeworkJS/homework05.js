const elFirstName = document.getElementById('first-name');
const elLastName = document.getElementById('last-name');
const elEmail = document.getElementById('email');
const elPassword = document.getElementById('password');
const printValues = document.getElementById("yourValues");
const confirmButton = document.getElementById("kopche");


// listen for click events
confirmButton.addEventListener('click', function () {
  add(elFirstName.value, elLastName.value, elEmail.value, elPassword.value)
});

// print function
// function printRegisterInputs(firstName, lastName, email, password) {
//   printValues.innerHTML = `<td>${firstName}</td>${lastName}</td><td>${email}</td><td>${password}</td>`
// }

function add() {
  let elFirstName = document.getElementById("first-name");
  let elLastName = document.getElementById("last-name");
  let elEmail = document.getElementById("email");
  let elPassword = document.getElementById("password");
  let table = document.querySelector("#table tbody");
  table.innerHTML += "<tr><td>" + elFirstName.value + "</td><td>" + elLastName.value + "</td><td>" + elEmail.value + "</td><td>" + elPassword.value + "</td></tr>"
}