const correct_code = [1, 5, 7, 7];
const user_input = [];

const code_container_el = document.getElementById("code_container");
const first_input_el = document.getElementById("first_input");
const input_array = document.querySelectorAll(".input");

first_input_el.focus();
function check() {
  if (
    correct_code.length === user_input.length &&
    user_input.every((value, index) => {
      return value === correct_code[index];
    })
  ) {
    alert("You have entered correct code.");
  } else {
    alert("You have entered wrong code.");
    location.reload();
  }
}

input_array.forEach((input, index, array) => {
  input.addEventListener("keyup", (event) => {
    console.log(event.keyCode, "clicked");

    // check if it's a valid number
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      // push it to user_input array
      user_input.push(parseInt(event.target.value));
      // console.log(typeof user_input[0]);
      console.log(user_input);

      // console.log(index);
      // console.log(array.length);
      // focus on next input if possible
      if (index + 1 < array.length) {
        array[index + 1].focus();
      } else {
        check();
      }
    } else {
      alert("Type numbers only");
      event.target.value = "";
      return;
    }
  });
});
