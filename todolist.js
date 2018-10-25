// To Do List
let todos = ["Eat", "Work", "Sleep"];
search = document.getElementById("search");
addInput = document.getElementById("addInput");
addButton = document.getElementById("addButton");
todoList = document.getElementById("todoList");

// Local Storage
let todos = JSON.parse(localStorage.todos || '[]') 
window.onbeforeunload = function() {
  localStorage.todos = JSON.stringify(todos)
};

// Event Listener
search.addEventListener("keyup", searchListing);
addButton.addEventListener("click", addListing);
addInput.addEventListener("enter", addListing);

// Read
function readListing() {
  for (i = 0; i < todos.length; i++) {
    let editButton = document.createElement("button");
    editButton.setAttribute("type", "button");
    editButton.setAttribute(
      "class",
      "btn btn-info col-lg-1 col-md-1 col-2 edit"
    );
    editButton.textContent = "Edit";

    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item col-9");
    li.textContent = `${todos[i]}`;

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("class", "btn btn-danger col-1 delete");

    deleteButton.textContent = `X`;

    let div = document.createElement("div");
    div.setAttribute("class", "row mb-3 list");
    div.setAttribute("id", i);

    div.appendChild(editButton);
    div.appendChild(li);
    div.appendChild(deleteButton);
    todoList.appendChild(div);

    // Event Listener for edit & delete button
    deleteButton.addEventListener("click", deleteListing);
    editButton.addEventListener("click", editListing);
  }
}

readListing();

// Create & Anti Duplicate
function addListing() {
  let todosLower = todos.map(element => element.toLowerCase());
  if (todosLower.includes(addInput.value.toLowerCase()) === true) {
    alert(`${addInput.value} already on your list!`);
  } else 
  if (addInput.value === "") {
    alert(`input field cannot be empty`)
  } else {
    todos.push(addInput.value);
    todoList.innerHTML = "";
    addInput.value = '';
    readListing();
  }
}

// Update
function editListing() {
  // Change list to edit mode
  let div = this.parentNode;
  let value = div.children[1].textContent;
  div.innerHTML = `
  <button type="button" class="btn btn-dark col-xl-1 col-lg-1 col-md-1 col-2 editSave">Save</button>
  <input class="list-group-item col-9 editInput" placeholder="${value}">
  <button type="button" class="btn btn-warning col-1 editCancel">X</button>
  `;

  // Add Event Listener to Save & Cancel
  div.children[0].addEventListener("click", editSaving);
  div.children[2].addEventListener("click", todoMode);

  // Cancel Edit and Back to To Do List Mode
  function todoMode() {
    div.innerHTML = `
    <button type="button" class="btn btn-info col-lg-1 col-md-1 col-2 edit">Edit</button>
    <li class="list-group-item col-9">${value}</li>
    <button type="button" class="btn btn-danger col-1 delete">X</button>
    `;
    div.children[0].addEventListener("click", editListing);
    div.children[2].addEventListener("click", deleteListing);
  }

  function editSaving() {
    let input = div.children[1];
    let value = input.value; // Get input value

    let todosLower = todos.map(element => element.toLowerCase());
    if(todosLower.includes(value.toLowerCase()) === true){
      alert(`${value} already on your list!`)
    } else
    if (value != "" && todosLower.includes(value.toLowerCase()) === false ) {
      todos[div.id] = value; // Modify data
      todoMode(); // Back to To Do List Mode
      div.children[1].textContent = value; // Change List Value
    } else {
      alert("input field cannot be empty");
    }
  }
}

// Delete
function deleteListing() {
  let div = this.parentNode;
  let li = div.querySelector("li");

  for (i = 0; i < todos.length; i++) {
    if (li.textContent === todos[i]) {
      if (confirm("Are you sure want to delete this list?")) {
        todos.splice(i, 1);
        div.remove();
      }
    }
  }
}

// Search
function searchListing(e) {
  let searchValue = e.target.value.toLowerCase();
  let allDiv = document.querySelectorAll(".list");

  for (i = 0; i < todos.length; i++) {
    if (todos[i].toLowerCase().includes(searchValue)) {
      console.log(`result = ${todos[i]}`);
      allDiv[i].style.display = "flex";
    } else {
      allDiv[i].style.display = "none";
      console.log(`hide = ${todos[i]}`);
    }
  }
}
