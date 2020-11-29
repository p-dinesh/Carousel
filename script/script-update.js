var update = document.querySelector(".update-container");
var update_slide = document.querySelector(".update-cards");
var update_card = document.querySelectorAll(".update-card");
var update_img = document.querySelectorAll(".update-img");
var buy_now = document.querySelectorAll(".buynow");
var update_content = document.querySelectorAll(".detail");
var uc = document.querySelectorAll(".price");
var update_next = document.querySelector("#update_next");
var update_prev = document.querySelector("#update_prev");
var update_width = update.clientWidth;
var update_counter = 1;
var update_init = 0;
var update_calc = update_width / 4;
// next-button
update_next.addEventListener("click", function () {
  for (var i = 0; i <= update_init + 4; i++) {
    if (update_counter == 6) {
      break;
    }
    update_card[i].style.transform =
      "translateX(" + -update_calc * update_counter + "px)";
    update_card[i].style.transition = "transform 0.5s ease-in-out";
  }

  if (update_counter < 6) {
    update_counter++;
    update_init++;
  }
});

// previous-button
update_prev.addEventListener("click", function () {
  for (var i = update_init + 3; i >= 0; i--) {
    if (update_counter == 1) {
      break;
    }
    update_card[i].style.transform = "translateX(" + update_calc * 0 + "px)";
    update_card[i].style.transition = "transform 0.5s ease-in-out";
    console.log("dayta" + i);
  }

  if (update_counter > 1) {
    update_counter--;
    update_init--;
  }
  update_counter = 1;
  update_init = 0;
});

function over(k) {
  update_content[k].style.display = "none";
  uc[k].style.display = "none";
  buy_now[k].style.display = "block";
  update_card[k].style.border = "1px solid  #bbbfc3";
  update_card[k].style.borderRadius = "5px";
}

function out(l) {
  update_content[l].style.display = "block";
  uc[l].style.display = "block";
  buy_now[l].style.display = "none";
  update_card[l].style.border = "1px solid transparent";
}

// media query

if (window.matchMedia("(max-width: 770px)").matches) {
  var update_calc = update_width / 2;
} else {
}
if (window.matchMedia("(max-width: 350px)").matches) {
  var update_calc = update_width;
} else {
}
if (window.matchMedia("(max-width: 430px)").matches) {
  var update_calc = update_width;
} else {
}
