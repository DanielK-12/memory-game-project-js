/**
 * Write a program - Todo list
 * Display the added tasks and change the total counter
 * Enable the user to check the tasks - increment the done counter
 */

const btnAddTask = document.getElementById('btn-add-task');
const addTask = document.getElementById('add-task');

btnAddTask.addEventListener('click', () => {
  let RenderTodoList = document.getElementById('render-todo-list');
  RenderTodoList.innerHTML += `<input type='checkbox'>${addTask.value}</input><br/>`;
  addTask.value = "";
});

