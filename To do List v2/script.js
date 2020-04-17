const input_el = document.getElementById("input");
const addList_el = document.getElementById("addList");
const ul_el = document.getElementById("ul");

function getList() {
  // make list
  const list = document.createElement("li");
  // put class in the list
  list.classList.add("each_list");
  // put span in the list
  list.innerHTML = `<span>${input_el.value}</span>
  <i class="fas fa-check-square doneList"></i><i class="fas fa-trash deleteList"></i>`;
  // put list in the ul (append)
  ul_el.append(list);
  // reset input field
  input_el.value = "";
}

function manageList(e) {
  if (e.target.classList.contains("deleteList")) {
    e.target.parentNode.classList.toggle("checkDelete");
    setTimeout(() => {
      e.target.parentNode.remove();
    }, 3000);
  } else if (e.target.classList.contains("doneList")) {
    e.target.parentNode.classList.toggle("checkDone");
  }
}

function init() {
  addList_el.addEventListener("click", getList);
  ul_el.addEventListener("click", manageList);
}

init();
