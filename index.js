const boxes = document.querySelectorAll(".beat-box-bass");
const snares = document.querySelectorAll(".beat-box-snare");
const hihats = document.querySelectorAll(".beat-box-hihat");
let beatTimeout = 250;

boxes.forEach((box) => {
  box.addEventListener("click", function handleClick(event) {
    if (box.classList.contains("box-active-bass")) {
      box.classList.remove("box-active-bass");
    } else {
      box.classList.add("box-active-bass");
    }
  });
});

snares.forEach((box) => {
  box.addEventListener("click", function handleClick(event) {
    if (box.classList.contains("box-active-snare")) {
      box.classList.remove("box-active-snare");
    } else {
      box.classList.add("box-active-snare");
    }
  });
});

hihats.forEach((box) => {
  box.addEventListener("click", function handleClick(event) {
    if (box.classList.contains("box-active-hihat")) {
      box.classList.remove("box-active-hihat");
    } else {
      box.classList.add("box-active-hihat");
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
  if (boxes[i].classList.contains("box-active-bass")) {
    var audio = new Audio("./sounds/Bass.mp3");
    audio.play();
  }
  if (snares[i].classList.contains("box-active-snare")) {
    var audio = new Audio("./sounds/Snare.mp3");
    audio.play();
  }
  if (hihats[i].classList.contains("box-active-hihat")) {
    var audio = new Audio("./sounds/Hi-Hat.mp3");
    audio.play();
  }
  boxes[i].classList.add("at-play");
  snares[i].classList.add("at-play");
  hihats[i].classList.add("at-play");
  setTimeout(() => {
    fun(i + 1);
  }, beatTimeout);
};

const handlePlay = () => {
  const beatTimeout = document.getElementById('beat-timeout').value;
  fun(0);
};

