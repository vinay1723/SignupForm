const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("ConfirmPassword");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //  1. Email Validation
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    alert("Not a valid email");
    return;
  }

  // 2. password Validation
  if (!password.value || !confirmPassword.value) {
    alert("password or confirmPassword fields required");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("❌passwords are not  matching");
    return;
  }

  alert("Submission Completed Successfully 🎉🎉");
});
