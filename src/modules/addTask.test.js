import ArrayTask from "./class-methods";



describe('Test addTask function', () => {
  const arraytask = new ArrayTask();
  test('Add the object task and check if it works',() => {
    const insertTask = {
      description: 'task1',
      complete: false,
      index: 0
    }

    arraytask.addTask(insertTask);
    expect(arraytask).toMatchSnapshot();
  })
})