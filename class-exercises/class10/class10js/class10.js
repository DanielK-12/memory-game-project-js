// get the button
const addTaskBtn = document.getElementById('add-task-btn');
// add an event listener
addTaskBtn.addEventListener('click', addTask);
let taskCount = 0;
let doneTasks = 0;

// declare function
function addTask() {
  const taskList = document.getElementById('todo-list');
  let newTask = document.getElementById('add-task').value;

  if (newTask) {
    let li = document.createElement('li');
    let taskText = document.createElement('span');
    taskText.innerText = newTask;
    li.append(taskText);

    // checkbox managment
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('click', function () {
      if (checkbox.checked) {
        doneTasks++;
        taskText.classList.add('task-done');
      } else {
        doneTasks--;
        taskText.classList.remove('task-done');
      }

      updateCounters();
    });

    li.append(checkbox);

    taskList.append(li);

    // reset the input
    document.getElementById('add-task').value = '';
    taskCount++;
    updateCounters();
    console.log(taskCount);
  }

}

// update the counters
function updateCounters() {
  document.getElementById('total').innerText = taskCount;
  document.getElementById('done').innerText = doneTasks;
  document.getElementById('left').innerText = taskCount - doneTasks;
}