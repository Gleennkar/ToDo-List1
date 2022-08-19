export let storedList = JSON.parse(localStorage.getItem('tasks'));
if (storedList === null) {
  storedList = [];
}



export const add = (description) => {
    const todolist = [...storedList];
    todolist.push({
      index: Date.now(),
      description,
      completed: false,
    });
    localStorage.setItem('tasks', JSON.stringify(todolist));
  };
  
  export const removeTodo = (id) => {
    const todolist = storedList.filter((todo) => todo.index.toString() !== id);
    localStorage.setItem('tasks', JSON.stringify(todolist));
    getTodoList(storedList);
    window.location.reload();
  };