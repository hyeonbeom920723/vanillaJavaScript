const ul = document.getElementById("ul");
const list_label_el = document.getElementById("list_label");
const addList_el = document.getElementById("addList");
todoList = [];
function createList(event) {
  // when I use eventListener form, we use this.
  event.preventDefault();
  if (list_label_el.value === "") {
    alert("required input");
  } else {
    const new_list = {
      label: list_label_el.value,
      id: Math.floor(Math.random() * 100000),
    };
    // push the new object into the todoList
    todoList.push(new_list);

    // display the new object by calling displayList
    displayList(new_list);

    // reset the value for todoList label
    list_label_el.value = "";
  }
}
function deleteList(new_list_id) {
  todoList.forEach((each_List, index) => {
    each_List.id === new_list_id ? todoList.splice(index, 1) : "";
  });
  console.log(todoList);
  init();
}
function displayList(new_list) {
  // make list
  const list = document.createElement("li");
  // put class in the list
  list.classList.add("each_list_container", true);
  // put span in the list
  list.innerHTML = `<span>${new_list.label}</span><i class="fas fa-trash deleteList" onclick="deleteList(${new_list.id})"></i>`;
  // put list in the ul (append)
  ul.appendChild(list);
}
function init() {
  // reset the ul
  ul.innerHTML = "";
  todoList.forEach((each_list) => {
    displayList(each_list);
  });
}

init();

addList_el.addEventListener("click", createList);
