let addTask = document.getElementById("add-task");

let addBtn = document.getElementById("addBtn");

let taskList = document.getElementById("tasksList");

let counter = 1;
// listen for clicks

addBtn.addEventListener('click', function () {
  printTasks(addTask.value);
  addToArray(addTask.value);
});

// 3. kopceto add task da raboti pri pritiskanje na enter
addTask.addEventListener("keyup", function (event) {
  if (event.code === 'Enter') {
    printTasks(addTask.value);
  }
});


// print the tasks

function printTasks(task) {
  // code to render the task
  if (task === "") {
    alert("please enter a value");
  } else {
    taskList.innerHTML += `<li>${counter++}.${task}</li>`;
    // counter++;
    // addTask.value = ``;
  }
}


// toggle tasks by listenning for clicks on the list itself
taskList.addEventListener('click', function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle('checked');
  }
});

// 1. da se izraboti array of tasks
const inputArray = [];

function addToArray() {
  inputArray.push(addTask.value);
  console.log(inputArray);
}



function displayArray() {

}


// 2. da se pecati toj array
