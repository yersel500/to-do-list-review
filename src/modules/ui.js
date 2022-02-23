import { taskInput } from './selectors';
import ArrayTask from './class-methods';
import printTask from './addTask';

let edit = false;
export const listofTasks = new ArrayTask();
// Empty object for task
export const objTask = {
  description: '',
  complete: '',
};

export function enableEdition(task) {
  const { description, complete, index } = task;

  // Upload content to the object
  objTask.description = description;
  objTask.complete = complete;
  objTask.index = index;

  // Fill the input
  taskInput.value = description;

  edit = true;
}

export function cleanHTML() {
  const ulContainer = document.querySelector('.list');
  while (ulContainer.firstChild) {
    ulContainer.removeChild(ulContainer.firstChild);
  }
}

export function resetObject() {
  objTask.description = '';
}

export function newTask(e) {
  const { description } = objTask;

  if (e.key === 'Enter' && description !== '') {
    if (edit) {
      listofTasks.editTask({ ...objTask });

      edit = false;
    } else {
      objTask.index = listofTasks.tasks.length + 1;
      listofTasks.addTask({ ...objTask });
    }

    listofTasks.saveLocalStorage();

    printTask(listofTasks);

    resetObject();

    taskInput.value = '';
  }
}
