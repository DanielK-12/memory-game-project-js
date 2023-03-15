// define my school

function School(name) {
  this.name = name;
  this.students = [];

  // methods
  this.addStudent = function (student) {
    this.students.push(student);
  }
  // print students
  this.listStudents = function () {
    const element = document.querySelector("#student-list");
    let htmlToAdd = '';
    const actionBtn = `<button class="delete-btn">Delete</button>`;
    for (let student of this.students) {
      htmlToAdd += `<li id="${student.index}" data-index="${student.index}">
      ${student.name} ${student.surname}, index:${student.index}, ${student.email} ${actionBtn}
      </li>`
    }
    element.innerHTML = htmlToAdd;
  }
  // delete/expell a student method
  this.deleteStudent = function (index) {
    const student = this.students.find(x => x.index === index);
    console.log(student);
    if (student) {
      const position = this.students.indexOf(student);
      this.students.splice(position, 1);
      this.listStudents();
    }
  }
}

// define a student
function Student(name, surname, index, email, subjects) {
  this.name = name;
  this.surname = surname;
  this.index = index;
  this.email = email,
    this.subjects = subjects;
}

const mySchool = new School("SEDC");

// on click events

const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const index = parseInt(document.getElementById('index').value);
  const email = document.getElementById('email').value;
  const subjects = document.getElementById('subjects').value;

  mySchool.addStudent(new Student(firstName, lastName, index, email, subjects));
  mySchool.listStudents();
});

// event listener for the delete button
document.addEventListener('click', function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const index = parseInt(e.target.closest("li").getAttribute("data-index"));
    mySchool.deleteStudent(index);
  }
});