let randomNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resultAreaImg = document.querySelector(".main-img");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let chances = 5;
let gameOver = false;
let history = [];

console.log(resultAreaImg);

chanceArea.textContent = `남은 기회 : ${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  randomNum = Math.floor(Math.random() * 100) + 1;

  console.log(`정답 : ${randomNum}`);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100사이의 숫자를 입력해 주세요";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해 주세요";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회 : ${chances}번`;
  history.push(userValue);

  if (userValue < randomNum) {
    resultAreaImg.src =
      "https://c.tenor.com/A-ozELwp694AAAAC/thumbs-thumbs-up-kid.gif";
    resultArea.textContent = "UP!!";
  } else if (userValue > randomNum) {
    resultAreaImg.src =
      "https://c.tenor.com/5VOxlkxi63gAAAAC/thumbsdown-ryanreynolds.gif";
    resultArea.textContent = "DOWN!!";
  } else if (userValue == randomNum) {
    resultAreaImg.src =
      "https://c.tenor.com/NVlG12ERFzwAAAAM/clapping-leonardo-dicaprio.gif";
    resultArea.textContent = "정답!!!";
    gameOver = true;
  }

  if (chances < 1) {
    gameOver = true;
    resultAreaImg.src =
      "https://media3.giphy.com/media/l4pLY0zySvluEvr0c/giphy.gif";
    resultArea.textContent = "실패 ㅠㅠ";
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  pickRandomNum();
  userInput.value = "";
  resultAreaImg.src = "https://t1.daumcdn.net/cfile/blog/99BF9D345ABA8C5811";

  resultArea.textContent = "이번엔 꼭 맞추세요!";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.textContent = `남은 기회 : ${chances}번`;
  history = [];
}

pickRandomNum();
