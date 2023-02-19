const el = document.getElementById('btnHello');


el.onclick = function () {
  alert("Hello World 1");
};

function iWon() {
  alert("I'm the Winner");
};

// first way (html on click event)
function sayHello() {
  alert("Hello World 2");
};
el.onclick = sayHello;
el.onclick = iWon;

// second way ()
const click2Btn = document.getElementById("click-2");
click2Btn.onclick = function () {
  alert("you clicked the second button");
};

// third way
const click3Btn = document.getElementById("click-3");
click3Btn.addEventListener('click', sayHello, false);

const txt1 = document.getElementById("txt-1");
const txt1Result = document.getElementById("txt-1-result");

txt1.addEventListener('blur', function (e) {
  console.log(e.target.value);
  txt1Result.innerText = ``;
  txt1Result.innerText += `Zdravo ${e.target.value}`;
  txt1Result.innerText += `target elementot go ima sledniot id: ${e.target.id}`;
  txt1.value = '';
});

// exercise
// get the username input
const elUsername = document.getElementById("username");
// get feedback element
const elMsg = document.getElementById("feedback");

function checkUsername(minLength) {
  if (minLength > elUsername.value.length) {
    elMsg.innerText = `Username must be ${minLength} characters or more`
  } else {
    elMsg.innerText = "Your report card is: ";
  }
}

elUsername.addEventListener("blur", function () {
  checkUsername(5);
}, false);


document.querySelector('#grandparent').addEventListener('click', () => {
  console.log('Grandparent was clicked!');
}, false);

document.querySelector('#parent').addEventListener('click', () => {
  console.log("Parent element was clicked!");
}, false);

document.querySelector('#child').addEventListener('click', () => {
  console.log("child element was clicked!");
}, false);

// exercise 1
const pElement = document.getElementById("paragraph");
const buttonP = document.getElementById("btnP");

const colorElement = document.getElementById("color-string");
const fontSizeElement = document.getElementById("font-size");
const fontWeightElement = document.getElementById("font-weight");


function changeStyle() {
  pElement.style.color = colorElement.value;
  pElement.style.fontSize = fontSizeElement.value + "px";
  pElement.style.fontWeight = fontWeightElement.value;
}

buttonP.onclick = function () {
  changeStyle();
};

// exercise 2
/*
Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
On click of the button call a function that will get all the inputs' values and use the values as
 parameters for a new function which will add them to string
Finaly print the values
Time to accomplish: 15 minutes */
const elFirstName = document.getElementById('first-name');
const elLastName = document.getElementById('last-name');
const elEmail = document.getElementById('email');
const elPassword = document.getElementById('password');
const printValues = document.getElementById("yourValues");
const confirmButton = document.getElementById("kopche");

// function napisiTekst() {
//   printValues.innerText = elFirstName.value + " " + elLastName.value + " " + elEmail + " " + elPassword.value + " ";
// }
// confirmButton.onclick = napisiTekst;

// listen for click events
confirmButton.addEventListener('click', function () {
  printRegisterInputs(elFirstName.value, elLastName.value, elEmail.value, elPassword.value)
});

// print function
function printRegisterInputs(firstName, lastName, email, password) {
  printValues.innerText = `Full name: ${firstName} Last name: ${lastName} Email: ${email} Password: ${password}`
}

// resize event

const resizeResult = document.getElementById("resize-result");

window.addEventListener('resize', function (e) {
  resizeResult.innerText = `Window width: ${e.target.innerWidth} x Window height: ${e.target.innerHeight}`;
});
