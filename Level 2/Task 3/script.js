const form = document.querySelector('#todo-form');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const task = document.querySelector('#task-input').value;

  const newTask = document.createElement('li');
  newTask.innerText = task;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';

  deleteButton.addEventListener('click', () => {
    newTask.remove();
  });

  newTask.appendChild(deleteButton);

  taskList.appendChild(newTask);

  document.querySelector('#task-input').value = '';
});