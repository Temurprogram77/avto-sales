const form = document.getElementById("form");
const userName = document.getElementById("username");
const surName = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const replacePassword = document.getElementById("replace_password");
let inputT = document.querySelectorAll(".inp");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailRegEx = /[a-z0-9]{6,12}@gmail/;
  const passwordRegEx = /^[0-9]{8,12}$/;
  const nameRegEx = /[a-zA-Z]/;
  if (
    userName.value == "" ||
    surName.value == "" ||
    email.value == "" ||
    password.value == "" ||
    replacePassword.value == ""
  ) {

  } else {
  }
});
