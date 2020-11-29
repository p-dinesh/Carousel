var slide = document.querySelector(".carousel-slide");
var image = document.querySelectorAll(".carousel-slide img");
var support_slide = document.querySelector(".support-slide");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

window.addEventListener("load", function () {
  var isLoggedIn = localStorage.getItem("login") === "true";
  localStorage.getItem("store");

  if (isLoggedIn) {
    document.querySelector(".login_btn").classList.add("hide");
    document.querySelector(".logout").classList.remove("hide");
    document.getElementById("welcome").innerHTML =
      "Hello, " + JSON.parse(localStorage.getItem("store")).username;
  }
});

function logout() {
  var logModal = document.getElementById("logoutmyModal");
  logModal.style.display = "block";
  setTimeout(function () {
    logModal.style.display = "none";
  }, 2000);

  localStorage.setItem("login", false);
  document.querySelector(".logout").classList.add("hide");
  document.querySelector(".login_btn").classList.remove("hide");

  document.getElementById("welcome").innerHTML = "";
}

setTimeout(logout, 600000);

let intervalId;

var counter = 1;
var imgwidth = image[0].clientWidth;

slide.style.transform = "translateX(" + -imgwidth * counter + "px)";

next.addEventListener("click", function () {
  if (counter >= image.length - 1) return;

  slide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slide.style.transform = "translateX(" + -imgwidth * counter + "px)";

  startAutoScroll();
});

prev.addEventListener("click", function () {
  if (counter <= 0) return;
  slide.style.transition = "transform 0.5s ease-in-out";
  counter--;

  slide.style.transform = "translateX(" + -imgwidth * counter + "px)";
  startAutoScroll();
});

slide.addEventListener("transitionend", function () {
  if (image[counter].id == "last-img") {
    console.log("trans-pte" + counter);

    slide.style.transition = "none";
    counter = image.length - 2;

    slide.style.transform = "translateX(" + -imgwidth * counter + "px)";
  } else {
  }

  if (image[counter].id == "first-img") {
    console.log("trans" + counter);
    slide.style.transition = "none";
    counter = image.length - counter;

    slide.style.transform = "translateX(" + -imgwidth * counter + "px)";
  } else {
  }
});

function startAutoScroll() {
  clearInterval(intervalId);

  intervalId = setInterval(function () {
    next.click();
  }, 3000);
}
startAutoScroll();

function support() {
  support_slide.style.display = "block";
}

function supportOut() {
  support_slide.style.display = "none";
}
