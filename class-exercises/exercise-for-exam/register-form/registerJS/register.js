/* 
// task 3
// create a user register form - full name, username, password, confirm password
// username must contain at leaast 2 char
// password must contain at least 5 char
// password must be repeated in the secondary confirm password field
// print the user info using console.log
// or else
// username / password error
//part 2
// Pri uspesen register - da se pojavi kopce LOGIN
// pri klik na kopceto login da se pojavi forma LOGIN i da se sokrie postoeckata register forma
// login form, korisnikot da moze da se logira so infoto koe go dal pri register */

// DOM - get the inputs and other elements

const register = document.querySelector('#registerForm');

const fullName = document.querySelector('#name');
const userName = document.querySelector('#username');
const pass = document.querySelector('#pass');
const rePass = document.querySelector('#repass');

const createBtn = document.querySelector('#create-btn');
const result = document.querySelector('#result');

const loginForm = document.querySelector("#loginForm")

// username must contain at leaast 2 char
// password must contain at least 5 char
// password must be repeated in the secondary confirm password field
function checkInputs() {
  let errors = [];
  if (userName.value.length < 3) {
    errors.push("Username must contain more than 2 characters");
  } if (pass.value.length < 5) {
    errors.push("Password must contain more than 5 characters");
  } if (pass.value !== rePass.value) {
    errors.push("Passwords do not match");
  }
  return errors;
}
// print the array of errors
function printErrors(errors) {
  result.innerHTML = '';
  for (let i = 0; i < errors.length; i++) {
    result.innerHTML += `<li style="color:firebrick";>${errors[i]}</li>`
  }
}
// create an event listener

createBtn.addEventListener('click', () => {
  if (checkInputs().length > 0) {
    printErrors(checkInputs());
  } else {
    result.innerHTML =
      `<li style="color:green;">Success. You have created a user.
      <br><br>
    <button id="new-login-btn">Login</button>
    </li>`;
  }
});


// part 2
// Pri uspeshen register - da se pojavi kopce login
// pri klik na kopceto login da se pojavi forma LOGIN i da se sokrie postoeckata register forma
// login form, korisnikot da moze da se logira so infoto koe go dal pri register

// event delegation
document.addEventListener('click', (e) => {

  if (e.target.id === "new-login-btn") {
    register.style.display = "none";
    loginForm.style.display = "block";
  }
});

// login
const loginUser = document.querySelector("#l-user");
const loginPass = document.querySelector("#l-pass");
const loginBtn = document.querySelector("#login-btn");
const loginResult = document.querySelector("#loginResult")

loginBtn.addEventListener('click', () => {
  if (loginUser.value === userName.value && loginPass.value === pass.value) {
    loginResult.innerHTML = `Welcome ${loginUser.value} you have logged in`
  } else {
    loginResult.innerHTML = `<span style="color: firebrick">Wrong username or password</span>`
  }
}
);