function buynow() {
  var isLoggedIn = localStorage.getItem("login") === "true";

  if (isLoggedIn) {
    window.location.href = "cart.html";
  } else {
    window.location.href = "login.html";
  }
}
