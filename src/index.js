import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { taskInput, btndeleteTask } from './modules/selectors';
import {
  objTask, listofTasks, newTask, enableEdition,
} from './modules/ui';
import printTask from './modules/addTask';

function saveTask(e) {
  objTask[e.target.name] = e.target.value;
  objTask.complete = false;
}

// Events
const eventListeners = () => {
  taskInput.addEventListener('input', saveTask);
};

eventListeners();

// Add task

document.addEventListener('keypress', newTask);

const ulContainer = document.querySelector('.list');
// event on list container
ulContainer.addEventListener('click', (e) => {
  const index = Number(e.target.parentElement.classList[0]);
  if (e.target.classList.contains('fa-trash-can')) {
    listofTasks.deleteTask(index);
    printTask(listofTasks);
    listofTasks.saveLocalStorage();
  } else if (e.target.classList.contains('fa-square')) {
    listofTasks.tasks[index - 1].complete = true;
    printTask(listofTasks);
    listofTasks.saveLocalStorage();
  } else if (e.target.classList.contains('fa-square-check')) {
    listofTasks.tasks[index - 1].complete = false;
    printTask(listofTasks);
    listofTasks.saveLocalStorage();
  } else if (e.target.classList.contains(`specific-${index}`)) {
    enableEdition(listofTasks.tasks[index - 1]);
    listofTasks.saveLocalStorage();
  }
});

// Delete completed tasks
btndeleteTask.addEventListener('click', () => {
  listofTasks.deleteCompletedTask();
  printTask(listofTasks);
  listofTasks.saveLocalStorage();
});

// local storage
window.onload = () => {
  if (localStorage.getItem('myTasks')) {
    listofTasks.tasks = JSON.parse(localStorage.getItem('myTasks'));
    printTask(listofTasks);
  }
};
