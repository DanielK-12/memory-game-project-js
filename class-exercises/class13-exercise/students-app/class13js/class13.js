// school object

function School(name) {
  this.name = name;
  this.students = [];

  // methods
  this.addStudent = function (student) {
    this.students.push(student);
  }
  // print students
  this.listStudents = function () {
    const element = document.getElementById('student-list');
    let htmlToAdd = "";
    const actionBtn = `<button class="delete-btn">Delete</button>`;
    for (let student of this.students) {
      htmlToAdd += `<li id="${student.index}" data-index="${student.index}">
      ${student.name} ${student.surname}, ${student.index} ${student.email} ${actionBtn}</li>`;
    }
    element.innerHTML = htmlToAdd;
  }
  // delete student method
  this.deleteStudent = function (index) {
    const student = this.students.find(x => x.index === index);
    if (student) {
      const position = this.students.indexOf(student);
      this.students.splice(position, 1);
      this.listStudents();
    }
  }
  // search by name
  this.searchByName = function (name) {
    const student = this.students.find(x => x.name.toLowerCase() === name.toLowerCase());
    if (student) {
      const element = document.getElementById('search-list');
      element.innerHTML += `<li>${student.name}, ${student.index}
    <a href="Mailto:${student.email}">Send Email</a></li>`;
    }
  }
}

// student object that will go into school

function Student(name, surname, index, email, subjects) {
  this.name = name;
  this.surname = surname;
  this.index = index;
  this.email = email;
  this.subjects = subjects;
}

const mySchool = new School("SEDC");

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const index = parseInt(document.getElementById('index').value);
  const email = document.getElementById('email').value;
  const subjects = document.getElementById('subjects').value;

  mySchool.addStudent(new Student(firstName, lastName, index, email, subjects));
  mySchool.listStudents();
});

// delete btn event listener

document.addEventListener('click', function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const index = parseInt(e.target.closest("li").getAttribute("data-index"));
    mySchool.deleteStudent(index);
  }
});

// search event listener
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", function () {
  const name = searchInput.value;
  mySchool.searchByName(name);
});