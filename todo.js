const todoList = document.querySelector('.todo-list');


document.getElementById('add-todo').addEventListener('submit', (e) => {
	e.preventDefault();
	
	
	const todoText = document.getElementById('todo-text').value.trim();
	

	const newTodo = document.createElement('li');
	newTodo.innerHTML = `<input type="checkbox"> <span class="todo-text">${todoText}</span>`;
	todoList.appendChild(newTodo);
	
	
	saveTodos();
});


todoList.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		e.target.parentNode.remove();
		saveTodos();
	}
});


todoList.addEventListener('change', (e) => {
	if (e.target.type === 'checkbox') {
		e.target.parentNode.classList.toggle('completed');
	}
});


function saveTodos() {
	const todos = [];
	todoList.childNodes.forEach((todo) => {
		todos.push(todo.textContent);
	});
	localStorage.setItem('todos', JSON.stringify(todos));
}


function loadTodos() {
	const todos = localStorage.getItem('todos');
	if (todos) {
		const todoList = document.querySelector('.todo-list');
		todoList.innerHTML = '';
		
	
		JSON.parse(todos).forEach((todo) => {
			const newTodo = document.createElement('li');
			newTodo.innerHTML = `<input type="checkbox"> <span class="todo-text">${todo}</span>`;
			todoList.appendChild(newTodo);
		});
	}
}


loadTodos();
