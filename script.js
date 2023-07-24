document.addEventListener("DOMContentLoaded", function () {
  let counter = 0;
  let gameStarted = false;
  let timer;

  const startButton = document.getElementById("startButton");
  const counterDisplay = document.getElementById("counter");
  const timerDisplay = document.getElementById("timer");

  startButton.addEventListener("click", function () {
    if (!gameStarted) {
      gameStarted = true;
      counter = 0;
      counterDisplay.textContent = "回数: " + counter;
      startButton.disabled = true;
      timer = setInterval(function () {
        const timeLeft = parseFloat(timerDisplay.textContent);
        const updatedTime = (timeLeft - 0.1).toFixed(1);
        timerDisplay.textContent = updatedTime;
        if (updatedTime <= 0) {
          clearInterval(timer);
          endGame();
        }
      }, 100);
    }
  });

  document.addEventListener("click", function () {
    if (gameStarted) {
      counter++;
      counterDisplay.textContent = "回数: " + counter + " 回";
    }
  });

  function endGame() {
    gameStarted = false;
    clearTimeout(timer);
    alert(`タイムアップ！\n回数: ${counter} 回\n速度: ${counter / 10} 回/秒`);
    timerDisplay.textContent = "10.0";
    startButton.disabled = false;
  }
});