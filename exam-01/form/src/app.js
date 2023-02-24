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

const loginBtn = document.getElementById('login-btn');
let userName = document.getElementById('username').value;
let pass = document.getElementById('password').value;


loginBtn.addEventListener('click', () => {

  document.getElementById('login-status') += '';
  if (userName === users[0] && pass === passwords[0]) {
  } else if (userName === users[1] && pass === passwords[1]) {

  } else if (userName === users[2] && pass === passwords[2]);

  else if (userName === users[3] && pass === passwords[3]);
  else {
    document.getElementById('login-status').innerHTML = `Username or passwords must be longer than 3/5 characters`
  }
});