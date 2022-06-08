var numOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let btnHtml = this.innerHTML;
    playSound(btnHtml);
    addAnimation(btnHtml);
  });
}

// adding keyboard event listener to play sound on key strokes
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  addAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      break;

    case "a":
      let kick = new Audio("sounds/tom-2.mp3");
      kick.play();
      break;

    case "s":
      let snare = new Audio("sounds/tom-3.mp3");
      snare.play();
      break;

    case "d":
      let tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("sounds/crash.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("sounds/kick-bass.mp3");
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio("sounds/snare.mp3");
      tom4.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function addAnimation(btn) {
  let pressedBtn = document.querySelector("." + btn);
  pressedBtn.classList.add("pressed");

  // removing class 'pressed' to regain btn's previous look
  setTimeout(() => {
    pressedBtn.classList.remove("pressed");
  }, 100);
}
