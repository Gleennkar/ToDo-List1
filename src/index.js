import './style.css';

const todolist = [
  {
    index: 1,
    description: 'Wash the dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'complete my daily activities',
    completed: false,
  },
  {
    index: 3,
    description: 'complete To Do list project',
    completed: false,
  },
];

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
const getTodoList = () => {
  todolist.forEach((list) => {
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
getTodoList();
