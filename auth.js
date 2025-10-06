// Authentication system
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

// Initialize authentication state
document.addEventListener("DOMContentLoaded", function () {
  updateAuthUI();
  loadGoogleAPI();
  loadFacebookSDK();
});

// Load Google API
function loadGoogleAPI() {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/gapi.js";
  script.onload = initializeGoogleAuth;
  document.head.appendChild(script);
}

// Initialize Google Auth
function initializeGoogleAuth() {
  gapi.load("auth2", function () {
    gapi.auth2.init({
      client_id: "your-google-client-id.apps.googleusercontent.com", // Replace with actual client ID
    });
  });
}

// Load Facebook SDK
function loadFacebookSDK() {
  window.fbAsyncInit = function () {
    FB.init({
      appId: "your-facebook-app-id", // Replace with actual app ID
      cookie: true,
      xfbml: true,
      version: "v18.0",
    });
  };

  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
}

// Google Sign In
function signInWithGoogle() {
  if (typeof gapi === "undefined") {
    showToast(
      "error",
      "Google Auth Error",
      "Google authentication is not available. Please try again later."
    );
    return;
  }

  const authInstance = gapi.auth2.getAuthInstance();
  if (!authInstance) {
    // Simulate Google login for demo
    simulateGoogleLogin();
    return;
  }

  authInstance
    .signIn()
    .then(function (googleUser) {
      const profile = googleUser.getBasicProfile();
      const user = {
        id: profile.getId(),
        firstName: profile.getGivenName(),
        lastName: profile.getFamilyName(),
        email: profile.getEmail(),
        provider: "google",
        createdAt: new Date().toISOString(),
        builds: [],
      };

      loginUser(user);
    })
    .catch(function (error) {
      showToast(
        "error",
        "Google Sign In Failed",
        error.error || "Please try again."
      );
    });
}

// Simulate Google login for demo
function simulateGoogleLogin() {
  const user = {
    id: "google_" + Date.now(),
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@gmail.com",
    provider: "google",
    createdAt: new Date().toISOString(),
    builds: [],
  };

  loginUser(user);
  showToast(
    "success",
    "Google Sign In",
    "Successfully signed in with Google (Demo)"
  );
}

// Facebook Sign In
function signInWithFacebook() {
  if (typeof FB === "undefined") {
    showToast(
      "error",
      "Facebook Auth Error",
      "Facebook authentication is not available. Please try again later."
    );
    return;
  }

  FB.login(
    function (response) {
      if (response.authResponse) {
        FB.api(
          "/me",
          { fields: "name,email,first_name,last_name" },
          function (profile) {
            const user = {
              id: profile.id,
              firstName: profile.first_name,
              lastName: profile.last_name,
              email: profile.email,
              provider: "facebook",
              createdAt: new Date().toISOString(),
              builds: [],
            };

            loginUser(user);
          }
        );
      } else {
        showToast("error", "Facebook Sign In Failed", "Please try again.");
      }
    },
    { scope: "email" }
  );
}

// Simulate Facebook login for demo
function simulateFacebookLogin() {
  const user = {
    id: "facebook_" + Date.now(),
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@facebook.com",
    provider: "facebook",
    createdAt: new Date().toISOString(),
    builds: [],
  };

  loginUser(user);
  showToast(
    "success",
    "Facebook Sign In",
    "Successfully signed in with Facebook (Demo)"
  );
}

// Common login function
function loginUser(user) {
  // Check if user already exists
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const existingUserIndex = users.findIndex((u) => u.email === user.email);

  if (existingUserIndex !== -1) {
    // Update existing user
    users[existingUserIndex] = { ...users[existingUserIndex], ...user };
    currentUser = users[existingUserIndex];
  } else {
    // Add new user
    users.push(user);
    currentUser = user;
  }

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  updateAuthUI();

  // Redirect to home page after a delay
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}

// Register functionality
function handleRegister(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  // Validate passwords match
  if (password !== confirmPassword) {
    showToast(
      "error",
      "Password Mismatch",
      "Passwords do not match. Please try again."
    );
    return;
  }

  // Check if user already exists
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const email = formData.get("email");

  if (users.find((user) => user.email === email)) {
    showToast(
      "error",
      "Account Exists",
      "An account with this email already exists."
    );
    return;
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: email,
    password: password, // In production, this should be hashed
    phone: formData.get("phone") || "",
    newsletter: formData.get("newsletter") === "on",
    provider: "email",
    createdAt: new Date().toISOString(),
    builds: [],
  };

  // Save user
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Log in the user
  currentUser = { ...newUser };
  delete currentUser.password; // Don't store password in current user
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  showToast(
    "success",
    "Account Created!",
    "Welcome to TechStore! You are now logged in."
  );

  // Redirect to home page after a delay
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}

// Login functionality
function handleLogin(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get("email");
  const password = formData.get("password");

  // Find user
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    showToast(
      "error",
      "Login Failed",
      "Invalid email or password. Please try again."
    );
    return;
  }

  // Log in the user
  currentUser = { ...user };
  delete currentUser.password; // Don't store password in current user
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  showToast(
    "success",
    "Welcome Back!",
    `Hello ${user.firstName}! You are now logged in.`
  );

  // Redirect to home page after a delay
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}

// Logout functionality
function logout() {
  // Sign out from Google if signed in
  if (typeof gapi !== "undefined" && gapi.auth2) {
    const authInstance = gapi.auth2.getAuthInstance();
    if (authInstance && authInstance.isSignedIn.get()) {
      authInstance.signOut();
    }
  }

  // Sign out from Facebook if signed in
  if (typeof FB !== "undefined") {
    FB.logout();
  }

  currentUser = null;
  localStorage.removeItem("currentUser");
  updateAuthUI();
  showToast("success", "Logged Out", "You have been successfully logged out.");

  // Redirect to home if on protected page
  if (window.location.pathname.includes("my-builds.html")) {
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  }
}

// Update authentication UI
function updateAuthUI() {
  const authLink = document.getElementById("auth-link");
  if (!authLink) return;

  if (currentUser) {
    authLink.innerHTML = `<i class="fas fa-user"></i> ${currentUser.firstName}`;
    authLink.onclick = showUserMenu;
  } else {
    authLink.innerHTML = "Login";
    authLink.onclick = () => (window.location.href = "login.html");
  }
}

// Show user menu
function showUserMenu(event) {
  event.preventDefault();

  // Remove existing menu
  const existingMenu = document.querySelector(".user-menu");
  if (existingMenu) {
    existingMenu.remove();
    return;
  }

  // Create user menu
  const menu = document.createElement("div");
  menu.className = "user-menu";
  menu.innerHTML = `
        <div class="user-menu-content">
            <div class="user-info">
                <div class="user-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-details">
                    <div class="user-name">${currentUser.firstName} ${
    currentUser.lastName
  }</div>
                    <div class="user-email">${currentUser.email}</div>
                    ${
                      currentUser.provider !== "email"
                        ? `<div class="user-provider">via ${currentUser.provider}</div>`
                        : ""
                    }
                </div>
            </div>
            <div class="user-menu-items">
                <a href="my-builds.html" class="menu-item">
                    <i class="fas fa-folder"></i> My Builds
                </a>
                <a href="#" class="menu-item" onclick="showToast('info', 'Profile', 'Profile page coming soon!')">
                    <i class="fas fa-user-cog"></i> Profile Settings
                </a>
                <a href="#" class="menu-item" onclick="showToast('info', 'Orders', 'Order history page coming soon!')">
                    <i class="fas fa-shopping-bag"></i> Order History
                </a>
                <div class="menu-divider"></div>
                <a href="#" class="menu-item logout" onclick="logout()">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </a>
            </div>
        </div>
    `;

  // Position menu
  const authLink = document.getElementById("auth-link");
  const rect = authLink.getBoundingClientRect();
  menu.style.position = "fixed";
  menu.style.top = rect.bottom + 10 + "px";
  menu.style.right = "1rem";
  menu.style.zIndex = "2000";

  document.body.appendChild(menu);

  // Close menu when clicking outside
  setTimeout(() => {
    document.addEventListener("click", function closeMenu(e) {
      if (!menu.contains(e.target) && e.target !== authLink) {
        menu.remove();
        document.removeEventListener("click", closeMenu);
      }
    });
  }, 100);
}

// Check if user is logged in
function isLoggedIn() {
  return currentUser !== null;
}

// Get current user
function getCurrentUser() {
  return currentUser;
}

// Save user build
function saveUserBuild(build) {
  if (!currentUser) {
    showToast("error", "Login Required", "Please log in to save builds.");
    return false;
  }

  // Update user's builds
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userIndex = users.findIndex((u) => u.id === currentUser.id);

  if (userIndex !== -1) {
    if (!users[userIndex].builds) {
      users[userIndex].builds = [];
    }

    // Check if build already exists (update) or create new
    const existingBuildIndex = users[userIndex].builds.findIndex(
      (b) => b.id === build.id
    );

    if (existingBuildIndex !== -1) {
      users[userIndex].builds[existingBuildIndex] = build;
      showToast("success", "Build Updated!", `${build.name} has been updated.`);
    } else {
      users[userIndex].builds.push(build);
      showToast(
        "success",
        "Build Saved!",
        `${build.name} has been saved to your account.`
      );
    }

    localStorage.setItem("users", JSON.stringify(users));

    // Update current user
    currentUser.builds = users[userIndex].builds;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    return true;
  }

  return false;
}

// Get user builds
function getUserBuilds() {
  if (!currentUser || !currentUser.builds) {
    return [];
  }
  return currentUser.builds;
}

// Delete user build
function deleteUserBuild(buildId) {
  if (!currentUser) return false;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const userIndex = users.findIndex((u) => u.id === currentUser.id);

  if (userIndex !== -1 && users[userIndex].builds) {
    users[userIndex].builds = users[userIndex].builds.filter(
      (b) => b.id !== buildId
    );
    localStorage.setItem("users", JSON.stringify(users));

    // Update current user
    currentUser.builds = users[userIndex].builds;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    return true;
  }

  return false;
}
