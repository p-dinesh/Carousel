var item = document.querySelector(".item-container");
var item_slide = document.querySelector(".item-cards");
var item_card = document.querySelectorAll(".item-card");
var item_next = document.querySelector("#item_next");
var item_prev = document.querySelector("#item_prev");
var item_width = item.clientWidth;
var item_counter = 1;
var init = 0;
var calc = item_width / 4;

let itemId;

console.log("calc" + calc);
console.log("item-width" + item_width);

// next-slide
item_next.addEventListener("click", function () {
  for (var i = 0; i <= init + 4; i++) {
    if (item_counter == 6) {
      break;
    }
    item_card[i].style.transform = "translateX(" + -calc * item_counter + "px)";
    item_card[i].style.transition = "transform 0.5s ease-in-out";
  }
  if (item_counter < 6) {
    item_counter++;
    init++;
    console.log("init" + init);
    console.log("item-counter-next" + item_counter);
  }

  itemAutoScroll();
});

// previous-slide
item_prev.addEventListener("click", function () {
  console.log("check" + init);
  for (var i = init + 3; i >= 0; i--) {
    console.log("i" + i);
    if (item_counter == 1) {
      break;
    }

    item_card[i].style.transform = "translateX(" + calc * 0 + "px)";
    item_card[i].style.transition = "transform 0.5s ease-in-out";
  }
  if (item_counter > 1) {
    item_counter--;
    init--;
  }
  item_counter = 1;
  init = 0;
});

function itemAutoScroll() {
  clearInterval(itemId);

  itemId = setInterval(function () {
    item_next.click();
  }, 5000);
}
itemAutoScroll();

// media-query

if (window.matchMedia("(max-width: 770px)").matches) {
  var calc = item_width / 2;
} else {
}
if (window.matchMedia("(max-width: 350px)").matches) {
  var calc = item_width;
} else {
}
if (window.matchMedia("(max-width: 430px)").matches) {
  var calc = item_width;
} else {
}
