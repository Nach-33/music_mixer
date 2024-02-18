const boxes = document.querySelectorAll(".beat-box-bass");
const snares = document.querySelectorAll(".beat-box-snare");
const hihats = document.querySelectorAll(".beat-box-hihat");

boxes.forEach((box) => {
  box.addEventListener("click", function handleClick(event) {
    if (box.classList.contains("box-active")) {
      box.classList.remove("box-active");
    } else {
      box.classList.add("box-active");
    }
  });
});

snares.forEach((box) => {
  box.addEventListener("click", function handleClick(event) {
    if (box.classList.contains("box-active")) {
      box.classList.remove("box-active");
    } else {
      box.classList.add("box-active");
    }
  });
});

hihats.forEach((box) => {
  box.addEventListener("click", function handleClick(event) {
    if (box.classList.contains("box-active")) {
      box.classList.remove("box-active");
    } else {
      box.classList.add("box-active");
    }
  });
});

const fun = (i) => {
  if (i > 0) {
    boxes[i - 1].classList.remove("at-play");
    snares[i - 1].classList.remove("at-play");
    hihats[i - 1].classList.remove("at-play");
  }
  i = i % boxes.length;
  if (boxes[i].classList.contains("box-active")) {
    var audio = new Audio("./sounds/Bass.mp3");
    audio.play();
  }
  if (snares[i].classList.contains("box-active")) {
    var audio = new Audio("./sounds/Snare.mp3");
    audio.play();
  }
  if (hihats[i].classList.contains("box-active")) {
    var audio = new Audio("./sounds/Snare.mp3");
    audio.play();
  }
  boxes[i].classList.add("at-play");
  snares[i].classList.add("at-play");
  hihats[i].classList.add("at-play");
  setTimeout(() => {
    fun(i + 1);
  }, 100);
};

const handlePlay = () => {
  fun(0);
};

