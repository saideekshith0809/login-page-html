// Validate login function
function validate() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("errorMsg");

  // Check if fields are empty
  if (user === "" || pass === "") {
    error.textContent = "Please fill all fields!";
    error.style.color = "red";
    return;
  }

  // Simple demo credentials
  if (user === "admin" && pass === "1234") {
    error.textContent = "Login successful!";
    error.style.color = "green";
  } else {
    error.textContent = "Invalid username or password!";
    error.style.color = "red";
  }
}


// Toggle password visibility
function togglePassword() {
  const passField = document.getElementById("password");

  if (passField.type === "password") {
    passField.type = "text";
  } else {
    passField.type = "password";
  }
}
