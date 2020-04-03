const display_each_history = document.getElementById("display_each_history");
const transaction_button = document.getElementById("transaction_button");
const transaction_item = document.getElementById("transaction_item");
const transaction_amount = document.getElementById("transaction_amount");

console.log("dsfsad" + transaction_item);
console.log(transaction_amount);

// transaction_button.addEventListener("click", addTransaction);

// function addTransaction() {
//   templateTransactions.push({
//     label: transaction_item,
//     value: transaction_amount
//   });

//   console.log(templateTransactions);
// }

// function summaryBalance() {
//   for (let i = 0; i < templateTransactions.length; i++) {
//     var sum = +templateTransactions.value;
//   }
//   return sum;
// }
// console.log(summaryBalance);

let templateTransactions = [
  {
    label: "Cash Income",
    value: 500
  },
  {
    label: "Grocery",
    value: -150
  },
  {
    label: "Entertainment",
    value: -50
  },
  {
    label: "Tithing",
    value: -100
  }
];

// for (let i = 0; i < templateTransactions.length; i++) {
//   `<li class="each_history_container">
//     <i class="fas fa-times fa-x deleteHistory"></i>${label[i]}
//     <span class="display_each_income">${value[i]}</span>
//   </li>`;
// }

// function getType() {
//   templateTransactions.map(each => {
//     // console.log(each.value);
//     // console.log(typeof each.value);
//     if (each.value >= 0) {
//       typeOfClass = "display_each_income";
//     } else {
//       typeOfClass = "display_each_expense";
//     }
//     return typeOfClass;
//     //   each.value >= 0 ? "display_each_income" : "display_each_expense";
//   });
// }

// const typeOfClass = templateTransactions.map(each => {
//   console.log(each.value);
//   console.log(typeof each.value);
//   //   if (each.value >= 0) {
//   //     console.log("bigger");
//   //   } else {
//   //     console.log("smaller");
//   //   }
//   //   if (each.value >= 0) {
//   //     typeOfClass = "display_each_income";
//   //   } else {
//   //     typeOfClass = "display_each_expense";
//   //   }
//   each.value >= 0 ? console.log("bigger") : console.log("smaller");
//   return each.value >= 0 ? "display_each_income" : "display_each_expense";
// });

// const typeOfClass = each => {
//   each.value >= 0 ? console.log("bigger") : console.log("smaller");
//   return each.value >= 0 ? "display_each_income" : "display_each_expense";
// };

function getType(value) {
  console.log(value);
  if (value >= 0) {
    return "display_each_income";
  } else {
    return "display_each_expense";
  }
  //   what is differnce between above and this
  //   value >= 0 ? "display_each_income" : "display_each_expense";
}

// const typeOfClass = templateTransactions.map(each => {
//   console.log(each.value);
//   console.log(typeof each.value);

//   //   if (each.value >= 0) {
//   //     console.log("bigger");
//   //   } else {
//   //     console.log("smaller");
//   //   }
//   if (each.value >= 0) {
//     return "display_each_income";
//   } else {
//     return "display_each_expense";
//   }
//   //   each.value >= 0 ? console.log("bigger") : console.log("smaller");
//   //    each.value >= 0 ? return"display_each_income" : "display_each_expense";
// });
// console.log(typeOfClass);
const markup = templateTransactions
  .map(
    each => `
    <li class="each_history_container">
        <i class="fas fa-times fa-x deleteHistory"></i>${each.label}
        <span class="${getType(each.value)}">${each.value}</span>
    </li>`
  )
  .join("");

// const totalBalance = templateTransactions.map(each => {
//   totalBalance += each.value;
//   return totalBalance;
// });
// const markup = console.log(templateTransactions);
console.log(markup);
display_each_history.innerHTML = markup;
