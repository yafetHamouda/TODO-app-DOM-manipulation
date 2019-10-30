const addToDo = document.querySelector('.add');
const Todos = document.querySelector('.todos');
const search = document.querySelector('.search input');

const filter = (term) => {

  Array.from(Todos.children)
    .filter(curr => !curr.textContent.includes(term))
    .map(curr => curr.classList.add('filtred'));

  Array.from(Todos.children)
    .filter(curr => curr.textContent.includes(term))
    .map(curr => curr.classList.remove('filtred'));
}


//1- Adding ToDos
addToDo.addEventListener('submit', e => {
  const todo = addToDo.add.value.trim().toLowerCase();

  //Prevent default loading of page
  e.preventDefault();

  //Adding the new element
  if (todo.length) {
    Todos.innerHTML += `      
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`
  }

  //Clear the input value after submiting
  addToDo.reset();

});


//2- Deleting ToDos
Todos.addEventListener('click', e => {
  console.log(e);
  if (e.target.tagName === 'I') {
    e.target.parentElement.remove();
  }
});


//3- Searching and filtering ToDos
search.addEventListener('keyup', () => {
  let term = search.value.trim().toLowerCase();
  filter(term);

});