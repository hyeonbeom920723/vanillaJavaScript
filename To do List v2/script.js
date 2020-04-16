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
    <i class="fas fa-trash deleteList"></i>`;
  // put list in the ul (append)
  ul_el.append(list);
  // reset input field
  input_el.value = "";
}

function init() {}
init();
addList_el.addEventListener("click", getList);
ul_el.addEventListener("click", () => {
  if (event.target.classList.contains("deleteList")) {
    event.target.parentNode.remove();
  }
});
