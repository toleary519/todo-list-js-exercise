  // Arrays to keep track of each task's state
  const taskTitles = [];
  const taskComplete = [];

  // Create a new task by adding to the arrays
  // A new task will be created as incomplete
  function newTask(title, description) {
    const task = {
      title: title,
      description: description,
      complete: false
    }
    return task;
  }

  // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
  function completeTask(task) {
    task.complete = true;
  }

  // Print the state of a task to the console in a nice readable way
  function logTaskState(task) {
    console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
  }

  // DRIVER CODE BELOW

  const task1 = newTask("Clean Cat Litter", `take all the 💩  out of the litter box`); // task 0
  const task2 = newTask("Do Laundry", "😨"); // task 1
  const tasks = [task1, task2];

  logTaskState(task1); // Clean Cat Litter has not been completed
  completeTask(task1);
  logTaskState(task1); // Clean Cat Litter has been completed
