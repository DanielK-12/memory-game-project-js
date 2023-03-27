/**
 * Write a program - Todo list
 * Display the added tasks and change the total counter
 * Enable the user to check the tasks - increment the done counter
 */

const addTaskBtn = document.getElementById('btn-add-task');
addTaskBtn.addEventListener('click', addTask);

taskCount = 0;
doneTasks = 0;

function addTask() {
  let taskList = document.getElementById('render-todo-list');
  let newTask = document.getElementById('add-task').value;

  let li = `<li><span>${newTask} <input type="checkbox"></span></li>`;
  taskList.innerHTML += li;
  document.getElementById('add-task').value = '';
  taskCount++;
  updateCounters();

}

function updateCounters() {
  document.getElementById('total').innerText = taskCount;
  document.getElementById('done').innerText = doneTasks;
  document.getElementById('left').innerText = taskCount - doneTasks;
}

document.addEventListener('click', function (e) {
  if (e.target.type === 'checkbox') {
    if (e.target.checked) {
      doneTasks++;
      e.target.parentNode.classList.add('task-done');
    }
    else {
      doneTasks--;
      e.target.parentNode.classList.remove('task-done');
    }
    updateCounters();
  }
});
