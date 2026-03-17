// Show / Hide Password
function togglePass() {
  const pass = document.getElementById("password");
  pass.type = pass.type === "password" ? "text" : "password";
}

// Password Strength
document.getElementById("password").addEventListener("keyup", function () {
  const val = this.value;
  let strength = 0;
  let text = "";

  if (val.length > 5) strength += 30;
  if (/[A-Z]/.test(val)) strength += 30;
  if (/[0-9]/.test(val)) strength += 20;
  if (/[^A-Za-z0-9]/.test(val)) strength += 20;

  document.getElementById("strength").value = strength;

  if (strength < 40) {
    text = "Weak";
  } else if (strength < 80) {
    text = "Medium";
  } else {
    text = "Strong";
  }

  document.getElementById("strengthText").innerText = text;
});

// Login Function
function login(btn) {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("errorMsg");

  if (user === "" || pass === "") {
    error.textContent = "Please fill all fields!";
    error.style.color = "red";
    return;
  }

  btn.innerHTML = "Loading...";
  btn.disabled = true;

  setTimeout(() => {
    if (user === "admin" && pass === "1234") {
      error.textContent = "Login successful!";
      error.style.color = "lightgreen";

      // Save if remember checked
      if (document.getElementById("remember").checked) {
        localStorage.setItem("username", user);
      }

      btn.innerHTML = "Success ✅";
    } else {
      error.textContent = "Invalid credentials!";
      error.style.color = "red";
      btn.innerHTML = "Login";
      btn.disabled = false;
    }
  }, 1500);
}

// Load saved user
window.onload = function () {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    document.getElementById("username").value = savedUser;
  }
};

// Enter key support
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.querySelector("button").click();
  }
});
