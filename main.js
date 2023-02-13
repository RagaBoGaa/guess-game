"use strict";

let myNum = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let imessage = document.querySelector(".message");
let myScore = document.querySelector(".score");
let myHighScore = document.querySelector(".highscore");
let reset = document.querySelector(".again");

let score = 20;
let highScore = 0;
let randomNum = Math.trunc(Math.random() * 20) + 1;

// Function to show messages
let gameMessage = function (message) {
  imessage.textContent = message;
};

checkBtn.addEventListener("click", function () {
  let guess = +document.querySelector(".guess").value;

  if (guess === "") {
    gameMessage(`👉 ${guess} is Invalid number!`);
  }
  //  When player wins
  if (guess === randomNum) {
    gameMessage(`🎉  YOU WIN!`);
    document.body.style.backgroundColor = "#60b347";
    // myNum.style = "width:30rem";
    myNum.textContent = randomNum;
    document.querySelector(".guess").readOnly = true;
    if (score > highScore) {
      highScore = score;
      myHighScore.textContent = highScore;
    }

    // When player lose
  } else if (guess !== randomNum) {
    if (score > 1) {
      guess > randomNum
        ? gameMessage(`👉 ${guess} is too high!`)
        : gameMessage(`👉 ${guess} is too low!`);
      score--;
      myScore.textContent = score;
    } else {
      gameMessage(`💥 You lost, Try again!`);
      myScore.textContent = 0;
      document.querySelector(".guess").readOnly = true;
    }
  }
});

reset.addEventListener("click", function () {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  gameMessage("Start Guessing ...");
  guess.readOnly = false;
  guess.value = "";
  myScore.textContent = score;
  myNum.textContent = "?";
  document.body.style.backgroundColor = "#222";
  myNum.style = "width:15rem";
});
