// To Do List
let todos = ["Eat", "Work", "Sleep"];
search = document.getElementById("search");
addInput = document.getElementById("addInput");
addButton = document.getElementById("addButton");
todoList = document.getElementById("todoList");

// Event Listener
search.addEventListener("keyup", searchListing);
addButton.addEventListener("click", addListing);

// Read
function readListing() {
  for (i = 0; i < todos.length; i++) {
    console.log(todos[i]);

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
    deleteButton.setAttribute("class", "btn btn-danger col-1");
    deleteButton.setAttribute("id", "delete");
    deleteButton.textContent = `X`;

    let div = document.createElement("div");
    div.setAttribute("class", "row mb-3 list");

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

// Create
function addListing() {
  todoList.innerHTML = "";
  todos.push(addInput.value);
  readListing();
}

// Update
function editListing() {
  let div = this.parentNode;
  div.innerHTML = "";
}

// Edit Variable
// editCancel = document.getElementById("editCancel");
// editInput = document.getElementById("editInput");
// editSave = document.getElementById("editSave");
// // Edit Event Listener
// editCancel.addEventListener("click", editCanceling);
// editSave.addEventListener("click", editSaving);
// function editCanceling() {
//   console.log("edit canceling success");
// }

// function editSaving() {
//   console.log("edit saving succes");
// }

// `<div class="row mb-3 list">
//  <button type="button" class="btn btn-dark col-xl-1 col-lg-1 col-md-1 col-2" id="editSave">Save</button>
// <input class="list-group-item col-9" placeholder="Sleep" id="editInput">
// <button type="button" class="btn btn-warning col-1" id="editCancel">X</button>
// </div>`

// Delete
function deleteListing() {
  let div = this.parentNode;
  let li = div.querySelector("li");

  for (i = 0; i < todos.length; i++) {
    if (li.textContent === todos[i]) {
      todos.splice(i, 1);
    }
  }
  div.remove();
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
