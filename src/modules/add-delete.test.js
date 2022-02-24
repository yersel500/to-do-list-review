import ArrayTask from './class-methods';

describe('Test addTask function', () => {
  const arraytask = new ArrayTask();
  test('Add the object task and check if it works', () => {
    const insertTask = {
      description: 'task1',
      complete: false,
      index: 0,
    };

    arraytask.addTask(insertTask);
    expect(arraytask).toMatchSnapshot();
  });
});

describe('Test deleteTask function', () => {
  const arraytask = new ArrayTask();
  test('remove the object task and check if it works', () => {
    const i = 0;

    const task1 = {
      description: 'task1',
      complete: false,
      index: 0,
    };

    const task2 = {
      description: 'task2',
      complete: false,
      index: 1,
    };

    arraytask.addTask(task1);
    arraytask.addTask(task2);
    arraytask.deleteTask(i);
    expect(arraytask).toMatchSnapshot();
  });
});