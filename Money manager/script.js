const form = document.getElementById("form");
const ul = document.getElementById("display_each_history");
const transaction_label_el = document.getElementById("transaction_label");
const transaction_amount_el = document.getElementById("transaction_amount");

let transactions = [
  {
    label: "Cash Income",
    amount: 500,
  },
  {
    label: "Grocery",
    amount: -150,
  },
  {
    label: "Entertainment",
    amount: -50,
  },
  {
    label: "Tithing",
    amount: -100,
  },
];

function displayTransaction(new_t) {
  // make list
  const list = document.createElement("li");
  // put class in the list
  list.classList.add("each_history_container", true);
  // put span in the list

  list.innerHTML = `<i class="fas fa-times fa-x deleteHistory"></i>${
    new_t.label
  }<span class=${
    new_t.amount >= 0 ? "display_each_income" : "display_each_expense"
  }>${new_t.amount}</span>`;
  // put list in the ul (append)
  ul.appendChild(list);
}

function createTransaction(event) {
  // when I use eventListener form, we use this.
  event.preventDefault();
  // if input is empty alret
  // transaction_label_el.value === "" || transaction_amount_el.value === ""
  //   ? alert("required inputs")
  //   : "";
  // if input exist, make object that has label value and amout value
  console.log(transaction_label_el.value);
  console.log(transaction_amount_el.value);
  if (transaction_label_el.value === "" || transaction_amount_el.value === "") {
    alert("required inputs");
  } else {
    const new_t = {
      label: transaction_label_el.value,
      amount: transaction_amount_el.value,
    };
    // }
    // push the new object into the transactions
    transactions.push(new_t);
    // reset the value for transaction label and amount
    transaction_label_el.value = "";
    transaction_amount_el.value = "";
    // display the new object by calling displayTranscation
    displayTransaction(new_t);
  }
}

function init() {
  transactions.forEach((each_t) => {
    displayTransaction(each_t);
  });
}

init();

form.addEventListener("submit", createTransaction);
