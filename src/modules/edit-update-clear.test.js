/**
 * @jest-environment jsdom
 */

import ArrayTask from './class-methods';
import { changeStatus } from './ui';

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
    };

    arraytask.addTask(task3);
    arraytask.editTask(task4);
    expect(arraytask).toMatchSnapshot();
  });
});

describe('Modify the status of task', () => {
  const arraytask = new ArrayTask();
  test('The status of task should change between false/true', () => {
    const task5 = {
      description: 'task5',
      complete: false,
      index: 1,
    };

    arraytask.addTask(task5);
    changeStatus(task5);
    expect(task5.complete).toBe(true);
  });

  test('The status of task should change between false/true', () => {
    const task1 = {
      description: 'task1',
      complete: false,
      index: 1,
    };

    arraytask.addTask(task1);
    changeStatus(task1);
    changeStatus(task1);
    expect(task1.complete).toBe(false);
  });
});

describe('Clear all completed tasks', () => {
  const arraytask = new ArrayTask();
  test('All completed tasks should be removed.', () => {
    const task1 = {
      description: 'task1',
      complete: false,
      index: 1,
    };
    const task2 = {
      description: 'task2',
      complete: false,
      index: 1,
    };
    const task3 = {
      description: 'task3',
      complete: false,
      index: 1,
    };

    arraytask.addTask(task1);
    arraytask.addTask(task2);
    arraytask.addTask(task3);

    changeStatus(task1);
    changeStatus(task2);

    arraytask.deleteCompletedTask();
    expect(arraytask).toMatchSnapshot();
  });
});