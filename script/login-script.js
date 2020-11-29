var wrongUsername = document.getElementById("wrongUsername");
var modal = document.getElementById("loginmyModal");

function login() {
  var username = document.querySelector("#uname").value;
  var password = document.querySelector("#pass").value;
  console.log(username);
  var x = JSON.parse(localStorage.getItem("store"));

  document.getElementById("wrongUsername").innerHTML = "&nbsp;";

  if (username == x.username && password == x.pass) {
    window.location.href = "index.html";

    localStorage.setItem("login", true);
  } else {
    wrongUsername.innerHTML = "Invalid Username or Password";
  }
}
window.addEventListener("pageshow", function () {
  var isLoggedIn = localStorage.getItem("login") === "true";

  if (isLoggedIn) {
    window.location.href = "index.html";
  }
});
