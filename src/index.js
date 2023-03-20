document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector('#create-task-form');
  taskForm.addEventListener('submit', handleSubmit);
  
  function handleSubmit(e) {
	e.preventDefault();
	const formData = new FormData(taskForm);
	const task = formData.get('new-task-description');
	addToList(task);
	taskForm.reset();
  }
  
  function addToList(task) {
	  const ul = document.querySelector('#tasks');
	  const li = document.createElement('li');
	  const deleteButton = addDeleteButton();
	  deleteButton.textContent = "	x";
	  li.textContent = task;
	  li.appendChild(deleteButton);
	  ul.appendChild(li);
  }
  
  function addDeleteButton() {
	  const deleteButton = document.createElement('button');
	  deleteButton.textContent = "	x";
	  deleteButton.addEventListener('click', (e) => {
		  const parentElement = e.target.parentElement;
		  parentElement.remove();
	  })
	  return deleteButton;
  }
  
});