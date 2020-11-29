//highlight

var highlight_slide = document.querySelector(".highlight-slide");
var highlight_image = document.querySelectorAll(".highlight-slide img");
var btn_1 = document.querySelector(".btn1");
var btn_2 = document.querySelector(".btn2");
var btn_3 = document.querySelector(".btn3");
var btn_4 = document.querySelector(".btn4");
var button = document.querySelectorAll(".btn");
var highlight_counter = 1;
var highlight_imgwidth = highlight_image[0].clientWidth;

let highlightId;

btn_1.style.backgroundColor = "#ff1d9d";

function clk(c) {
  highlight_slide.style.transition = "transform 0.5s ease-in-out";
  highlight_counter = c;

  highlight_slide.style.transform =
    "translateX(" + -highlight_imgwidth * highlight_counter + "px)";

  for (var i = 0; i < highlight_image.length; i++) {
    if (i == c) {
      button[i].style.backgroundColor = "#ff1d9d";
    } else {
      button[i].style.backgroundColor = "white";
    }
  }
}
