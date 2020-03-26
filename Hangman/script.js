const words = ["one", "three", "five", "hyeonbeom", "hi"];
const wordElement = document.getElementById("word");
const wrong_words_element = document.getElementById("wrong_word");
let randomWord = words[Math.floor(Math.random() * words.length)];
const correct_letters = [];
const wrong_letters = [];
const victim_parts = document.querySelectorAll(".victim");
const notification_container = document.getElementById(
  "notification_container"
);
const finalMessage = document.getElementById("finalMessage");
const warning = document.getElementById("warning");
const button = document.getElementById("button");
// console.log(["b", "a", "c"] === ["a", "b", "c"]); // false.
button.addEventListener("click", reset);
function reset() {
  correct_letters.splice(0);
  wrong_letters.splice(0);
  console.log("correct letters : " + correct_letters);
  console.log("wrong letters : " + wrong_letters);
  randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord);
  notification_container.style.display = "none";
  displayWord();
  displayWrong();
  victim_parts.forEach(v => {
    v.style.display = "none";
  });
  // victim_parts.style.display = "none";
  console.log(victim_parts);
  console.log(typeof victim_parts);
}
function displayWord() {
  wordElement.innerHTML = randomWord
    .split("") // "bac".split(""); // ["b", "a", "c"]
    .map(letter => {
      return `<span class="letter">${
        correct_letters.includes(letter) ? letter : ""
      }</span>`;
    })
    .join("");

  console.log("old one " + randomWord);
  // console.log(wordElement.innerText);
  const wordElement_string = wordElement.innerText.replace(/\n/g, "");
  // console.log(randomWord === wordElement_string);

  randomWord === wordElement_string
    ? (notification_container.style.display = "flex")
    : "";
}

function displayWrong() {
  // Display wrong words next to the Rods
  wrong_words_element.innerHTML = wrong_letters
    .map(letter => {
      return `<span class="wrongletter">${
        wrong_letters.includes(letter) ? letter : ""
      }</span>`;
    })
    .join("");
  // Draw Figure.
  victim_parts.forEach((eachPart, index) => {
    // 서클은 인덱스 0
    // if (index < wrong_letters.length)
    if (index === wrong_letters.length - 1) {
      // 서클은 롱레터에 하나가있을때 서클을 디스플레이
      eachPart.style.display = "block";
      if (index === 5) {
        notification_container.style.display = "flex";
        finalMessage.innerText = "Lose";
      }
    }
  });

  // how to draw one each.
}

// function moveWarning() {
//   warning.style.animation = "moveWarning 5s 1";
// }

window.addEventListener("keydown", e => {
  // check alphabet
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key.toLowerCase();
    // check if there is letter in the random word or not
    if (randomWord.includes(letter)) {
      // Put letter into correct_letter
      if (!correct_letters.includes(letter)) {
        correct_letters.push(letter);
        displayWord();
      } else {
        console.log("called");
        warning.classList.add("up");
        setTimeout(() => {
          warning.classList.remove("up");
        }, 4000);
        // warning.style.bottom = "0px";
        // setTimeout(() => {
        //   warning.style.bottom = "-50px";
        // }, 2000);
      }
    } else {
      if (!wrong_letters.includes(letter)) {
        wrong_letters.push(letter); // when push a letter draw one line.
        displayWrong();
      } else {
        warning.style.bottom = "0px";
        setTimeout(() => {
          warning.style.bottom = "-50px";
        }, 2000);
      }
      // if letter is not in the randomWord
      console.log("Draw victim");
    }
  } else {
    console.log("Not alphabet");
  }
});

displayWord();

// How to know when the game is done.
// -> Divide each letter of randomword -> check if each letter of random word include correct_letters using loop? to
// How to draw each line
// Ask to play again then set up default.

// WIN
// When we get all letters, stop the game and

// LOSE
// wrong letter -> draw vitim
// How to know if vicim is drawn completely or not.
// when the user draw victim all, game over.
