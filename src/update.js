export function updateStatus(event) {
  event.target.nextElementSibling.classList.toggle('completed');
  const status = JSON.parse(localStorage.getItem('tasks'));
  /* eslint-disable max-len */
  if (status.find((todo) => todo.index.toString() === event.target.parentNode.parentNode.id)?.completed === true) {
    status.find((todo) => todo.index.toString() === event.target.parentNode.parentNode.id).completed = false;
  } else {
    status.find((todo) => todo.index.toString() === event.target.parentNode.parentNode.id).completed = true;
  }
  localStorage.setItem('tasks', JSON.stringify(status));
}
export default updateStatus;
