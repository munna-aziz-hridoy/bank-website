// All users
const users = [
  { userEmail: "munna", password: "munna12@" },
  { userEmail: "mugdha", password: "mugdha12@" },
  { userEmail: "oishi", password: "oishi12@" },
  { userEmail: "sabrin", password: "sabrin12@" },
  { userEmail: "imran", password: "imran12@" },
];

// Get user email password
const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("pass-field");
const submitBtn = document.getElementById("submit-btn");
const loginError = document.getElementById("login-error");
const errorText = document.getElementById("error-text");

submitBtn.addEventListener("click", function () {
  for (let user of users) {
    if (
      user.userEmail == emailField.value &&
      user.password == passwordField.value
    ) {
      console.log("login successfull");
      emailField.value = "";
      passwordField.value = "";
      window.location.href = "../userLogedIn/account/account.html";
      loginError.style.display = "none";
      return;
    }
    if (emailField.value == "" && passwordField.value == "") {
      errorText.innerText = "Please Enter a username and password to login";
      loginError.style.display = "block";
    }
  }
  loginError.style.display = "none";
  emailField.value = "";
  passwordField.value = "";
  loginError.style.display = "block";
});
