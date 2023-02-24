const users = ["admin@sedc.com", "student@sedc.com", "user@sedc.com", "tester@sedc.com"];
const passwords = ["admin123", "student123", "user123", "tester123"];

/**
 * Write a program that allows for a user to log in
 * Username must be at least 2 characters
 * Password must be at least 5 characters
 * Check if username and password match
 *  eg input: username: admin@sedc.com password: admin123
 *  eg output: Sucessfuly logged in!
 * 
 *  eg input: username: admin@sedc.com password: lozinka251
 *  eg output: username does not exist or wrong password.
 */

const register = document.querySelector('#login');
const loginBtn = document.getElementById('login-btn');

function checkInputs() {
  let errors = document.getElementById("login-status").innerText;
  if (users.length < 3) {
    errors.innerText("Username must contain more than 2 characters");
  } if (passwords.length < 5) {
    errors.push("Password must contain more than 5 characters");
  }
  return errors;
}
// print the array of errors
function printErrors(errors) {
  result.innerHTML = '';
  for (let i = 0; i < errors.length; i++) {
    result.innerHTML += `${errors[i]}`
  }
}