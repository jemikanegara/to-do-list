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

// Edit Variable
editCancel = document.getElementById("editCancel");
editInput = document.getElementById("editInput");
editSave = document.getElementById("editSave");
// Edit Event Listener
editCancel.addEventListener("click", editCanceling);
editSave.addEventListener("click", editSaving);
function editCanceling() {
  console.log("edit canceling success");
}

function editSaving() {
  console.log("edit saving succes");
}

// Delete



// Search
function searchListing(e) {
  console.log("search result : " + e.target.value);
}
