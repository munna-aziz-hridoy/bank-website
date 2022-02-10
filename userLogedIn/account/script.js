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

// diposit section
dipositBtn.addEventListener("click", function () {
  if (dipositField.value == "") {
    return;
  }
  // update deposit amount
  let dipositAmount = parseFloat(dipositField.value);
  let currentDipositAmount = parseFloat(showDiposit.innerText);
  let totalDipositAmount = dipositAmount + currentDipositAmount;
  showDiposit.innerText = totalDipositAmount;
  dipositField.value = "";

  // update balance amount
  let currentBalance = parseFloat(showBalance.innerText);
  let totalBalance = currentBalance + dipositAmount;
  showBalance.innerText = totalBalance;
});

// widraw section
widrawtBtn.addEventListener("click", function () {
  // update widraw amount
  if (widrawField.value == "") {
    return;
  }
  let widrawAmount = parseFloat(widrawField.value);
  let currentWidrawAmount = parseFloat(showWidraw.innerText);

  let currentBalance = parseFloat(showBalance.innerText);

  if (currentBalance < widrawAmount) {
    balanceError.style.display = "block";
    return;
  } else {
    // update widraw
    let totalWidrawAmount = widrawAmount + currentWidrawAmount;
    showWidraw.innerText = totalWidrawAmount;
    widrawField.value = "";

    // update balance
    let totalBalance = currentBalance - totalWidrawAmount;
    showBalance.innerText = totalBalance;

    // hide error
    balanceError.style.display = "none";
  }
});
