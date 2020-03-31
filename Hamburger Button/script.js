const hamburgerButton = document.getElementById("hamburgerButton");
console.log(hamburgerButton);
const nav = document.getElementById("nav");
const sign_up_button = document.getElementById("sign_up_button");
const form_container = document.getElementById("form-container");
const cancel_button = document.getElementById("cancel_button");
const submit_button = document.getElementById("submit_button");
// let opened = false;
// nav.style.display = "none";
// no click but call.
hamburgerButton.addEventListener("click", showNav);
sign_up_button.addEventListener("click", showForm);
cancel_button.addEventListener("click", () => {
  form_container.classList.remove("displayModal");
});
submit_button.addEventListener("click", () => {
  alert("submit");
});

function showNav() {
  //   console.log("working?");

  // console.log("false");
  // if I delete this, it does not work.
  //   nav.classList.toggle("nav");

  //   document.body.style.transform = "translateX(15rem)";
  document.body.classList.toggle("showNav");
}

function showForm() {
  // document.body.classList.toggle("overlay");
  // form_container.classList.toggle("form-container");
  form_container.classList.add("displayModal", true);
}
