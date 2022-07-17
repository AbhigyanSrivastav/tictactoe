console.log("Tic Tac Toe");

let music = new Audio("music.mp3");
let audioGameOver = new Audio("gameover.mp3");
let audioTurn = new Audio("ting.mp3");
let boxes = document.querySelectorAll(".box");
let boxTexts = document.querySelectorAll(".boxText");
let turnText = document.querySelector(".turn");
let turn = "X";
let winner = null;
let gameOver = false;
let gif = document.getElementById("img");
let reset = document.getElementById("reset");

//Function for changing turns
function changeTurn() {
  turn = turn === "X" ? "O" : "X";
}

//FUnction to check win
function checkWin() {
  wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[1]].innerText === boxTexts[e[2]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      winner = boxTexts[e[0]].innerText;

      audioTurn.muted = true;
      audioGameOver.play();

      gameOver = true;
      
      
    } else {
      audioTurn.play();
    }
  });
}


boxes.forEach((box) => {
  let boxText = box.querySelector(".boxText");
  
  box.addEventListener("click", clicked=(e) => {
      if (!gameOver) {
      audioTurn.currentTime=0;
      if (boxText.innerText == "") {
        boxText.innerText = turn;
        changeTurn();
        checkWin();
        if (!gameOver) {
          turnText.innerText = "Turn For " + turn;
        } else {
          turnText.innerText = winner + " Won ";
          img.style.width = "10vw";
          
        }
      }
    }
    });
   
});

function removeTurn() {
  boxTexts.className=""
}

reset.addEventListener("click", () => {
  boxTexts.forEach((e) => {
    e.innerText = "";
  });

  turn = "X";
  gameOver = false;
  audioTurn.muted = false;
  turnText.innerText = "X will start";
  img.style.width = "0";
});
