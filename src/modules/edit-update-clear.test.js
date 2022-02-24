import ArrayTask from './class-methods';
// import {changeStatus, listofTasks} from './ui';

describe('Test editTask function', () => {
  const arraytask = new ArrayTask();
  test('Edit the object task and check if it works', () => {
    const task3 = {
      description: 'task1',
      complete: false,
      index: 0,
    };

    const task4 = {
      description: 'changed task',
      complete: false,
      index: 0,
    }

    arraytask.addTask(task3)
    arraytask.editTask(task4);
    expect(arraytask).toMatchSnapshot();
  });
});


//   describe('Modify the status of task', () => {
//     const arraytask = new ArrayTask();
//     test('The status of task should change between false/true', () => {
//       const task5 = {
//         description: 'task1',
//         complete: false,
//         index: 1,
//       };
  
//       const task6 = {
//         description: 'changed task',
//         complete: false,
//         index: 2,
//       }

//       const item = 2;
  
//       arraytask.addTask(task5);
//       arraytask.addTask(task6);
//       changeStatus(item);
//       expect(arraytask.tasks[item-1].complete).toBe(true);
//     });
// })