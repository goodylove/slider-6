// decleration of variables
let slider = document.querySelectorAll(".slider");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

// counter
let position = 0;

// next
right.addEventListener("click", () => {
  position += 1;
  if (position > slider.length - 3) {
    position = 0;
  }
  if (position === 3) {
    right.style.opacity = "0.4";
  } else {
    right.style.opacity = "1";
  }
  slider.forEach((p) => {
    p.style.transform = `translateX(-${position}00%)`;
  });
});

// previous
left.style.opacity = "0.4";

left.addEventListener("click", () => {
  if (position == 0) {
    position = 4;
  } else {
    left.style.opacity = "1";
  }

  position = position - 1;

  slider.forEach((p) => {
    p.style.transform = `translateX(-${position}00%)`;
  });
});

function activateSlider() {
  slider.forEach((p) => {
    p.style.transform = `translateX(-${position}00%)`;
  });
  position++;

  if (position > slider.length - 3) {
    position = 0;
  }
}
setInterval(() => {
  activateSlider();
}, 9000);
