const hamburgerButton = document.getElementById("container");
console.log(hamburgerButton);
const nav = document.getElementById("nav");
const sign_up_button = document.getElementById("sign_up");
// let opened = false;
// nav.style.display = "none";
// no click but call.
hamburgerButton.addEventListener("click", showNav);
sign_up_button.addEventListener("click", showForm);

function showNav() {
  //   console.log("working?");

  // console.log("false");
  // if I delete this, it does not work.
  //   nav.classList.toggle("nav");

  //   document.body.style.transform = "translateX(15rem)";
  document.body.classList.toggle("showNav");
}
