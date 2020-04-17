const input_el = document.getElementById("input");
const addList_el = document.getElementById("addList");
const ul_el = document.getElementById("ul");
const select_box_el = document.getElementById("select_box");

function getList() {
  // make list
  const list = document.createElement("li");
  // put class in the list
  list.classList.add("each_list");
  list.classList.add("incompleted");

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
    e.target.parentNode.classList.add("checkDelete");
    setTimeout(() => {
      e.target.parentNode.remove();
    }, 3000);
  } else if (e.target.classList.contains("doneList")) {
    e.target.parentNode.classList.toggle("completed");
    e.target.parentNode.classList.toggle("incompleted");
  }
}
function displaySelected(e) {
  // console.log(e.target.value);
  const ul_children = ul_el.childNodes;
  const typeOfSelect = e.target.value;
  console.log(e.target.value);
  ul_children.forEach((ec) => {
    // console.log(e.classList);
    // if classlist conatain checkDone display only checked list and display none for unchekced lists
    // then how to handle all and incompleted
    // all -> display everything
    // completed -> display none for lists not contains checkDone
    // incompleted -> display none for lists conatains chekcDone
    if (typeOfSelect === "completed" && ec.classList.contains("completed")) {
      ec.style.display = "flex";
    } else if (
      typeOfSelect === "completed" &&
      !ec.classList.contains("completed")
    ) {
      ec.style.display = "none";
    } else if (
      typeOfSelect === "Incompleted" &&
      !ec.classList.contains("completed")
    ) {
      ec.style.display = "flex";
    } else if (
      typeOfSelect === "Incompleted" &&
      !ec.classList.contains("incompleted")
    ) {
      ec.style.display = "none";
    }
  });
  // if (e.target.value === "Completed") {
  //   // console.log("this is complete");
  //   // display flex only completed and none for others
  // } else if (e.target.value === "Incompleted") {
  //   // console.log("this is Incomplete");
  // }
}

function init() {
  addList_el.addEventListener("click", getList);
  ul_el.addEventListener("click", manageList);
  select_box_el.addEventListener("change", displaySelected);
}

init();
