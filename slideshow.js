var slide = document.getElementsByClassName("slide");
var right_slide_button = document.querySelector(".slide-button-2");
var left_slide_button = document.querySelector(".slide-button-1");
var pin = document.getElementsByClassName("pin-t");

right_slide_button.addEventListener("click", slideLeft);
left_slide_button.addEventListener("click", slideRight);
for (let i = 0; i < pin.length; i++) {
  pin[i].addEventListener("click", function() {
    changeSlide(i);
    changeColor();
  });
}

let width_t = 0;
let width_size = slide[0].clientWidth;
let check_color = Math.round(slide.length / 2) - 1;
changeColor();

// ===============================================
function slideRight() {
  if (width_t != width_size * (Math.round(slide.length / 2) - 1)) {
    width_t += width_size;
    let str = "translate(" + width_t + "px)";
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = str;
    }
    check_color -= 1;
  } else {
    width_t = -1 * width_size * (Math.round(slide.length / 2) - 1);
    let str = "translate(" + width_t + "px)";
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = str;
    }
    check_color = slide.length - 1;
  }
  console.log(check_color);
  changeColor();
}
// ===============================================
function slideLeft() {
  if (width_t != -1 * width_size * (Math.round(slide.length / 2) - 1)) {
    width_t -= width_size;
    let str = "translate(" + width_t + "px)";
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = str;
    }
    check_color += 1;
  } else {
    width_t = width_size * (Math.round(slide.length / 2) - 1);
    let str = "translate(" + width_t + "px)";
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = str;
    }
    check_color = 0;
  }
  console.log(check_color);
  changeColor();
}
// ================================================
function changeColor() {
  for (let i = 0; i < pin.length; i++) {
    if (i == check_color) {
      pin[i].style.backgroundColor = "#ffad42";
    } else {
      pin[i].style.backgroundColor = "#ffdf87";
    }
  }
}
// ================================================
function changeSlide(index) {
  check_color = index;
  let center_index = Math.round(slide.length / 2) - 1;
  let target = center_index - index;
  let target_lo = width_size * target;
  width_t = target_lo;
  let str = "translate(" + target_lo + "px)";
  console.log(target_lo);
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.transform = str;
  }
}
// ================================================
