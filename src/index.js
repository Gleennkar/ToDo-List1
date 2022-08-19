import './style.css';

const todolist = [

];

let storedList = JSON.parse(localStorage.getItem('tasks'));
if (storedList === null) {
  storedList = [];
}

const add = (description) => {
  todolist.push({
    index: todolist.length + 1,
    description,
    completed: false,
  });
  localStorage.setItem('tasks', JSON.stringify(todolist));
};

const input = document.querySelector('.todo-input');
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    add(input.value);
    const storedList = JSON.parse(localStorage.getItem('tasks'));
    // eslint-disable-next-line no-unused-vars
    getTodoList(storedList);
    input.value = ' ';
  }
  window.location.reload();
});

class Tasks {
  constructor() {
    this.toDoList = [];
  }

  add(description, completed) {
    this.toDoList = this.toDoList.concat({
      index: Date.now(),
      description,
      completed,
    });
  }

  remove(id) {
    this.toDoList = this.toDoList.filter((list) => list.id !== Number(id));
  }
}
// eslint-disable-next-line no-unused-vars
const list1 = new Tasks();
const todoDiv = document.querySelector('.list1');
const getTodoList = (array) => {
  array.forEach((list) => {
    const li = document.createElement('li');
    li.classList.add('list');
    const liDiv = document.createElement('div');
    liDiv.classList.add('li-div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = list.completed;
    liDiv.appendChild(checkbox);

    const desc = document.createElement('p');
    desc.innerText = list.description;
    liDiv.appendChild(desc);
    li.appendChild(liDiv);

    const dots = document.createElement('i');
    dots.classList.add('fa');
    dots.classList.add('fa-ellipsis-v');
    li.appendChild(dots);
    todoDiv.appendChild(li);
  });
};
getTodoList(storedList);
