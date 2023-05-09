
const options = ["piedra", "papel", "tijera"];
let playerScore = 0;
let computerScore = 0;
let winStreak = 0;
let record = 0;


const playerOptions = document.querySelectorAll("img");
const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");
const resultText = document.querySelector("#result > p:first-child");
const winStreakText = document.getElementById("record");


function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}


function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Empate";
  } else if (
    (playerChoice === "piedra" && computerChoice === "tijera") ||
    (playerChoice === "papel" && computerChoice === "piedra") ||
    (playerChoice === "tijera" && computerChoice === "papel")
  ) {
    return "Ganaste";
  } else {
    return "Perdiste";
  }
}


function updateScore(result) {
  if (result === "Ganaste") {
    playerScore++;
    winStreak++;
    if (winStreak > record) {
      record = winStreak;
      winStreakText.textContent = record;
    }
  } else if (result === "Perdiste") {
    computerScore++;
    winStreak = 0;
  }
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  resultText.textContent = `Último resultado: ${result}`;
}
function getUsername() {
  const nameInput = document.getElementById("name");
  return nameInput.value.trim() || "Usuario Anónimo";
}

function handlePlayerChoice() {
  const playerChoice = this.id;
  const computerChoice = computerPlay();
  const result = playRound(playerChoice, computerChoice);
  updateScore(result);
}


playerOptions.forEach((option) => {
  option.addEventListener("click", handlePlayerChoice);
});

