/**
 * @jest-environment jsdom
 */

import printTask from './addTask';

test('add task test', () => {
  // Arrange
  const task = { description: 'task1 ', completed: false, index: 0 };
  document.body.innerHTML = '<div>'
    + '  <ul class="list"></li>'
    + '</div>';
  printTask(task);
  const list = document.querySelectorAll('.list li');
  expect(list).toHaveLength(1);

  // expect(sum(2, 3)).toBe(5);
});