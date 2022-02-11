// display item
const showDiposit = document.getElementById("show-diposit");
const showWidraw = document.getElementById("show-widraw");
const showBalance = document.getElementById("show-balance");

// input items
const dipositField = document.getElementById("diposit-field");
const widrawField = document.getElementById("widraw-field");

const dipositBtn = document.getElementById("diposit-btn");
const widrawtBtn = document.getElementById("widraw-btn");

// error box
let balanceError = document.getElementById("balance-error");

// common function

function getInputValue(amount, display) {
  let inputAmount = parseFloat(amount.value);
  let currentAmount = parseFloat(display.innerText);

  let total = inputAmount + currentAmount;

  display.innerText = total;
  amount.value = "";
  return total;
}

// diposit section
dipositBtn.addEventListener("click", function () {
  if (dipositField.value == "") {
    return;
  }

  let totalDiposit = getInputValue(dipositField, showDiposit);

  // update balance amount
  let currentBalance = parseFloat(showBalance.innerText);
  let totalBalance = currentBalance + totalDiposit;
  showBalance.innerText = totalBalance;
});

// widraw section
widrawtBtn.addEventListener("click", function () {
  // update widraw amount
  if (widrawField.value == "") {
    return;
  }

  let currentBalance = parseFloat(showBalance.innerText);
  let widrawAmount = parseFloat(widrawField.value);

  if (currentBalance < widrawAmount) {
    balanceError.style.display = "block";
    return;
  }

  let totalWidraw = getInputValue(widrawField, showWidraw);

  let totalBalance = currentBalance - totalWidraw;
  showBalance.innerText = totalBalance;
  balanceError.style.display = "none";
});
