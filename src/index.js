/* eslint-disable import/no-cycle */

import './style.css';
import { add, removeTodo, storedList } from './addRemoveToDo.js';
import { updateStatus } from './update.js';

// let todolist = [];

// class Tasks {
//   constructor() {
//     this.toDoList = [];
//   }

//   add(description, completed) {
//     this.toDoList = this.toDoList.concat({
//       index: Date.now(),
//       description,
//       completed,
//     });
//   }

//   remove(id) {
//     this.toDoList = this.toDoList.filter((list) => list.id !== Number(id));
//     // function remove(element)
//   }
// }

// const list1 = new Tasks();
const todoDiv = document.querySelector('.list1');

const saveone = (desc, id) => {
  const myTodo = storedList.find((todo) => todo.index.toString() === id);
  myTodo.description = desc;
  const todoPosition = storedList.indexOf(myTodo);
  storedList[todoPosition] = myTodo;
  localStorage.setItem('tasks', JSON.stringify(storedList));
};

const getTodoList = (array) => {
  array.forEach((list) => {
    const li = document.createElement('li');
    li.classList.add('list');
    li.id = list.index;
    const liDiv = document.createElement('div');
    liDiv.classList.add('li-div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = list.completed;
    liDiv.appendChild(checkbox);

    const cbox = document.querySelectorAll('.checkbox');
    cbox.forEach((chbox) => {
      chbox.addEventListener('change', updateStatus);
    });

    const desc = document.createElement('input');
    desc.classList.add('desc');
    desc.value = list.description;
    desc.onblur = (e) => {
      saveone(desc.value, e.target.parentNode.parentNode.id);
    };
    liDiv.appendChild(desc);
    li.appendChild(liDiv);

    const trash = document.createElement('i');
    trash.classList.add('fa');
    trash.classList.add('fa-trash-o');
    trash.addEventListener('click', (e) => {
      removeTodo(e.target.parentNode.id);
    });
    trash.classList.add('hide');
    li.appendChild(trash);

    const dots = document.createElement('i');
    dots.classList.add('fa');
    dots.classList.add('fa-ellipsis-v');
    dots.classList.add('dot');
    dots.addEventListener('click', () => {
      dots.classList.add('hide');
      trash.classList.remove('hide');
    });
    li.appendChild(dots);

    todoDiv.appendChild(li);
  });
};

const input = document.querySelector('.todo-input');
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    add(input.value);
    const storedList = JSON.parse(localStorage.getItem('tasks'));
    getTodoList(storedList);
    input.value = ' ';
    window.location.reload();
  }
});

getTodoList(storedList);

export default getTodoList;