const form = document.getElementById("form");
const ul = document.getElementById("display_each_history");
const transaction_label_el = document.getElementById("transaction_label");
const transaction_amount_el = document.getElementById("transaction_amount");
const display_income_el = document.getElementById("display_income");
const display_expense_el = document.getElementById("display_expense");
const display_current_balance_el = document.getElementById("current_balance");

let transactions = [];
function calSummary() {
  // make a new array only for amount from transactions
  let amountArray = [];
  amountArray = transactions.map((t) => +t.amount);
  // from the new array, sum positive and sum negative numbers filter -> new array
  const positiveNumbers = amountArray.filter((each_amount) => each_amount >= 0);
  const negativeNumbers = amountArray.filter((each_amount) => each_amount < 0);

  // sum each numbers
  const totalPositive = positiveNumbers.reduce((a, b) => a + b, 0);
  const totalNegative = negativeNumbers.reduce((a, b) => a + b, 0);

  // display each thing on the HTML
  display_income_el.innerHTML = "$" + totalPositive;
  display_expense_el.innerHTML = "$" + Math.abs(totalNegative);
  const current_balance = totalPositive + totalNegative;
  display_current_balance_el.innerHTML = "$" + current_balance;
}
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
  if (transaction_label_el.value === "" || transaction_amount_el.value === "") {
    alert("required inputs");
  } else {
    const new_t = {
      label: transaction_label_el.value,
      amount: transaction_amount_el.value,
    };
    // push the new object into the transactions
    transactions.push(new_t);

    // display the new object by calling displayTranscation
    displayTransaction(new_t);

    calSummary();
    // reset the value for transaction label and amount
    transaction_label_el.value = "";
    transaction_amount_el.value = "";
  }
}

function init() {
  transactions.forEach((each_t) => {
    displayTransaction(each_t);
  });
}

init();

form.addEventListener("submit", createTransaction);
