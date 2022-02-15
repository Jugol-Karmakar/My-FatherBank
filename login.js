document.getElementById("login-btn").addEventListener("click", function () {
  const inputEmail = document.getElementById("input-email");
  const emailValue = inputEmail.value;

  const inputPassword = document.getElementById("input-password");
  const passwordValue = inputPassword.value;

  if (emailValue == "bank@baap.com" && passwordValue == "banklogin") {
    window.location.href = "banking.html";
  }
});
