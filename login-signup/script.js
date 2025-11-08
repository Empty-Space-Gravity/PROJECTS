const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const userData = {
    name: name,
    email: email,
    password: password
  };

  console.log("User Data:", userData);
  alert("Signup successful");
  form.reset();
});
