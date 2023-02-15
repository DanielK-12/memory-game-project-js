let myApp = document.getElementById("app");
let titleDiv = myApp.firstElementChild;
let contentDiv = myApp.lastElementChild;

let students = ["Bob Bobsky", "Jill Jane", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

function printGrades(subjects, grades, element) {
  element.innerHTML += "<ul>";
  for (let i = 0; i < grades.length; i++) {
    element.innerHTML += `<li>${subjects[i]}: ${grades[i]}</li>`
  }
  element.innerHTML += "</ul>";
}

function printStudents(students, element) {
  element.innerHTML += "<ol>";
  for (let i = 0; i < students.length; i++) {
    element.innerHTML += `<li>${students[i]}</li>`;
  }
  element.innerHTML += "</ol>";
}

function schoolPanel(role, name) {
  if (role === "student") {
    titleDiv.innerHTML += "<h1>Hello " + name + "</h1";
    titleDiv.innerHTML += "<p>Welcome to your student page</p>";
    contentDiv.innerHTML += "<h3>Your grades are: </h3>";
    printGrades(subjects, grades, contentDiv);
  }
  else if (role === "teacher") {
    titleDiv.innerHTML += "<h1>Hello " + name + "</h1>";
    titleDiv.innerHTML += "<p>Welcome to your teacher page </p>";
    contentDiv.innerHTML += "<h3>Your list of students: </h3>"
    printStudents(students, contentDiv);
  }
  else {
    titleDiv.innerHTML += "<h1>Your login was unsuccessful</h1>";
    contentDiv.innerHTML += "<p>Please reload page and try again</p>";
  }
}

let input = prompt("Are you a student or a teacher");
let inputName = prompt("What is your name?");

schoolPanel(input, inputName);