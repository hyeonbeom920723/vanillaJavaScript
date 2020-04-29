// move cursor

// if number is correct alert
const correct_codeList = [1, 2, 3, 4];
const user_input = [];
const code = document.getElementsByClassName("code");
const code_container_el = document.getElementById("code_containe");
// console.log("code", code[0]);
// console.log("code", code[1]);
// console.log("code", code[2]);
// console.log("code", code[3]);

// display four blank underscore
//
// focus the first one
// get the input from the user

// if the input is same
function displayCode() {
  //   code_container_el.innerHTML = codeList.map((each_code) => {
  //     if (each_code === )
  //   })
  //   = randomWord
  //     .split("") // "bac".split(""); // ["b", "a", "c"]
  //     .map((letter) => {
  //       return `<span class="letter">${
  //         correct_letters.includes(letter) ? letter : ""
  //       }</span>`;
  //     })
  //     .join("");
  //   console.log("old one " + randomWord);
  //   // console.log(wordElement.innerText);
  //   const wordElement_string = wordElement.innerText.replace(/\n/g, "");
  //   // console.log(randomWord === wordElement_string);
  //   randomWord === wordElement_string
  //     ? (notification_container.style.display = "flex")
  //     : "";
}

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
