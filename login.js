// Simple hash function (demo encryption)
function hashPassword(password) {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    hash = (hash << 5) - hash + password.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

// Save demo user once
if (!localStorage.getItem("user")) {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: "admin",
      password: hashPassword("admin123")
    })
  );
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (
    user === savedUser.username &&
    hashPassword(pass) === savedUser.password
  ) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}
