// ================= LOGIN =================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Example: simple check (you can replace with real validation later)
    if (email && password) {
      // Save the user (store email as "loggedInUser")
      localStorage.setItem("loggedInUser", email);

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Please enter both email and password.");
    }
  });
}

// ================= DASHBOARD PROTECTION =================
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("loggedInUser");
  const isDashboard = window.location.pathname.includes("dashboard.html");

  if (isDashboard) {
    if (!user) {
      // Not logged in -> send back to login
      window.location.href = "login.html";
      return;
    }

    // Show user info
    const userName = document.getElementById("userName");
    const userDisplay = document.getElementById("userDisplay");

    if (userName) userName.textContent = user;
    if (userDisplay) userDisplay.textContent = `👤 ${user}`;

    // ================= LOGOUT =================
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
      });
    }
  }
});


    // Chart Example
    const ctx = document.getElementById('bookingChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Flights', 'Hotels', 'Tours'],
        datasets: [{
          label: 'Bookings',
          data: [12, 19, 7],
        }]
      }
    });
// ================= SIGNUP =================
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some((user) => user.username === newUsername);

    if (userExists) {
      document.getElementById("signupError").textContent =
        "Username already exists!";
    } else {
      users.push({ username: newUsername, password: newPassword });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! You can now login.");
      window.location.href = "login.html";
    }
  });
}
