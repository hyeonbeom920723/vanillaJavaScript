// move cursor

// if number is correct alert
const correct_code = [1, 2, 3, 4];
const user_input = [];
const code = document.getElementsByClassName("code");
const code_container_el = document.getElementById("code_containe");
const first_input_el = document.getElementById("first_input");

first_input_el.focus();
function check() {
  if (
    correct_code.length === user_input.length &&
    correct_code.every((value, index) => {
      return value === correct_code[index];
    })
  ) {
    alert("You have entered correct code.");
  } else {
    alert("You have entered wrong code.");
    location.reload();
  }
}
// display four blank underscore
//
// focus the first one
// get the input from the user

// if the input is same
function displayCode() {}

window.addEventListener("keydown", (e) => {
  const number = parseInt(e.key.toLocaleLowerCase());
  correct_codeList.map((each_code) => {
    // console.log("ec", typeof each_code);
    // console.log("number", typeof number);
    // how to compare one by one(Not all together)
    if (each_code === number) {
      console.log("same");
    } else {
      console.log("different");
    }
  });
});

function init() {
  displayCode();
}

init();
