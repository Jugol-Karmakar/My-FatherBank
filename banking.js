function getInputValue(inputId) {
  const moneyInput = document.getElementById(inputId);
  const moneyInputText = moneyInput.value;
  const amountValue = parseFloat(moneyInputText);
  moneyInput.value = "";
  return amountValue;
}

function addUpdateMoney(updateId, amount) {
  const moneyUpdate = document.getElementById(updateId);
  const moneyUpdateAmountText = moneyUpdate.innerText;
  const perivousUpdateAmount = parseFloat(moneyUpdateAmountText);
  const totalUpdateAmount = perivousUpdateAmount + amount;
  moneyUpdate.innerText = totalUpdateAmount;
}

function currentBalance() {
  const totalBlanceUpdate = document.getElementById("total-update");
  const perivousTotalBalanceText = totalBlanceUpdate.innerText;
  const perivousTotalBalance = parseFloat(perivousTotalBalanceText);
  return perivousTotalBalance;
}

function totalblance(updateamount, isAdd) {
  const totalBlanceUpdate = document.getElementById("total-update");
  const perivousTotalBalance = currentBalance();

  if (isAdd == true) {
    totalBlanceUpdate.innerText = perivousTotalBalance + updateamount;
  } else {
    totalBlanceUpdate.innerText = perivousTotalBalance - updateamount;
  }
}

document.getElementById("deposite-btn").addEventListener("click", function () {
  const depositeAmount = getInputValue("deposite-input");
  if (depositeAmount > 0) {
    addUpdateMoney("deposite-update", depositeAmount);
    totalblance(depositeAmount, true);
  }
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmont = getInputValue("withdraw-input");
  const currentBalanceAmount = currentBalance();
  if (withdrawAmont > 0 && withdrawAmont < currentBalanceAmount) {
    addUpdateMoney("withdraw-update", withdrawAmont);
    totalblance(withdrawAmont, false);
  }
});
