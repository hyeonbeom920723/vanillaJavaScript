const display_each_history = document.getElementById("display_each_history");
const transaction_button = document.getElementById("transaction_button");
const transaction_item = document.getElementById("transaction_item");
const transaction_amount = document.getElementById("transaction_amount");
const current_balance = document.getElementById("current_balance");
console.log("dsfsad" + transaction_item);
console.log(transaction_amount);

function calCurrent_balance() {}

let templateTransactions = [
  {
    label: "Cash Income",
    value: 500,
  },
  {
    label: "Grocery",
    value: -150,
  },
  {
    label: "Entertainment",
    value: -50,
  },
  {
    label: "Tithing",
    value: -100,
  },
];

function getType(value) {
  console.log(value);
  if (value >= 0) {
    return "display_each_income";
  } else {
    return "display_each_expense";
  }
  //   what is differnce between above and this
  // value >= 0 ? "display_each_income" : "display_each_expense";
}

const markup = templateTransactions
  .map(
    (each) => `
    <li class="each_history_container">
        <i class="fas fa-times fa-x deleteHistory"></i>${each.label}
        <span class="${getType(each.value)}">${each.value}</span>
    </li>`
  )
  .join("");
console.log(markup);
display_each_history.innerHTML = markup;
