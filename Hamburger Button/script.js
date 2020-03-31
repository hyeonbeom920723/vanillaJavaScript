const hamburgerButton = document.getElementById("hamburgerButton");
const nav = document.getElementById("nav");
const sign_up_button = document.getElementById("sign_up_button");
const form_container = document.getElementById("form-container");
const cancel_button = document.getElementById("cancel_button");
const submit_button = document.getElementById("submit_button");

hamburgerButton.addEventListener("click", () => {
  document.body.classList.toggle("showNav");
});
sign_up_button.addEventListener("click", () => {
  form_container.classList.add("displayModal", true);
});
cancel_button.addEventListener("click", () => {
  form_container.classList.remove("displayModal");
});
submit_button.addEventListener("click", e => {
  e.preventDefault();
  alert("submit");
});
document.body.addEventListener("click", e => {
  e.target === form_container
    ? form_container.classList.remove("displayModal")
    : "";
});
