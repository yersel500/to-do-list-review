// constant variables

export default function printTask({ tasks }) {
  const ulContainer = document.querySelector('.list');
  const CHECK = 'fa-square-check';
  const UNCHECK = 'fa-square';
  const LINE_THROUGH = 'lineThrough';

  while (ulContainer.firstChild) {
    ulContainer.removeChild(ulContainer.firstChild);
  }
  console.log('tasks is ==>', tasks);
  tasks.forEach((task) => {
    const { description, complete, index } = task;

    const DONE = complete ? CHECK : UNCHECK;
    const LINE = complete ? LINE_THROUGH : '';

    const taskContainer = document.createElement('li');
    taskContainer.classList.add(`${index}`, 'list-unit', `${complete}`);
    taskContainer.innerHTML = `<i class="fa-regular ${DONE}"></i><input type='text' value = '${description}' class='specific-${index} ${LINE} today-task' readonly><i class="fa-regular fa-trash-can"></i><i class="fas fa-ellipsis-v dots"></i>`;

    ulContainer.appendChild(taskContainer);
  });
}

// export default function sum(a, b) {
//   return a + b;
// }
