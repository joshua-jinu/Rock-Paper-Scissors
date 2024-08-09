const play = document.getElementById('play-button');
const initialScreen = document.getElementById('initial-screen');
const gameScreen = document.getElementById('game-screen');
const rockLogo = document.getElementById('rock');
const paperLogo = document.getElementById('paper');
const scissorsLogo = document.getElementById('scissors');
const selectedLogo = document.getElementById('selectedLogo');
const computerLogo = document.getElementById('computerLogo');
const computerChoices = [
  'https://github.com/Kalvium-Program/Rock-Paper-Scissors-Solution/blob/main/assets/rock-hand.png?raw=true',
  'https://github.com/Kalvium-Program/Rock-Paper-Scissors-Solution/blob/main/assets/paper-hand.png?raw=true',
  'https://github.com/Kalvium-Program/Rock-Paper-Scissors-Solution/blob/main/assets/scissors-hand.png?raw=true',
];
const scoresElement = document.getElementById('scores');
var gameOverMessage = document.querySelector('.gameOverMessage');
var playAgainButton = document.querySelector('.playAgainButton');

const scoresText = scoresElement.textContent;
const scoresArray = scoresText.split('-');

var playerScore = parseInt(scoresArray[0].trim());
var computerScore = parseInt(scoresArray[1].trim());

play.onclick = () => {
  initialScreen.style.display = 'none';
  gameScreen.style.display = 'block';
};

function updateScores(selectedLogo, computerLogo) {
  var selectedLogoName = selectedLogo.src.split('?')[0].split('/').pop();
  var computerLogoName = computerLogo.src.split('?')[0].split('/').pop();

  if (
    selectedLogoName == 'rock-hand.png' &&
    computerLogoName == 'scissors-hand.png'
  ) {
    playerScore += 1;
  } else if (
    selectedLogoName == 'rock-hand.png' &&
    computerLogoName == 'paper-hand.png'
  ) {
    computerScore += 1;
  } else if (
    selectedLogoName == 'paper-hand.png' &&
    computerLogoName == 'rock-hand.png'
  ) {
    playerScore += 1;
  } else if (
    selectedLogoName == 'paper-hand.png' &&
    computerLogoName == 'scissors-hand.png'
  ) {
    computerScore += 1;
  } else if (
    selectedLogoName == 'scissors-hand.png' &&
    computerLogoName == 'paper-hand.png'
  ) {
    playerScore += 1;
  } else if (
    selectedLogoName == 'scissors-hand.png' &&
    computerLogoName == 'rock-hand.png'
  ) {
    computerScore += 1;
  } else {
    // It's a tie, no one scores
  }

  scoresElement.textContent = playerScore + ' - ' + computerScore;

  if (playerScore === 5 || computerScore === 5) {
    var winner =
      playerScore === 5 ? 'You won the game!' : 'Computer won the game!';

    // Hide the rock, paper, and scissors buttons
    rockLogo.style.visibility = 'hidden';
    paperLogo.style.visibility = 'hidden';
    scissorsLogo.style.visibility = 'hidden';

    // Update the gameOverMessage and playAgainButton with the winner and a Play Again button
    gameOverMessage.textContent = winner;
    playAgainButton.style.display = 'block'; // Show the button
    playAgainButton.onclick = function () {
      location.reload();
    };
  }
}
// Challenge :- Add event listeners to rock, paper and scissors logo such that When the rock logo/ paper or scissors logo is clicked, this code sets the player's chosen image to a rock and displays it, then randomly selects and displays an image for the computer's choice, and updates the scores based on the choices.

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    if (btn.id == 'rock') selectedLogo.src = computerChoices[0];
    else if (btn.id == 'paper') selectedLogo.src = computerChoices[1];
    else if (btn.id == 'scissors') selectedLogo.src = computerChoices[2];

    selectedLogo.style.display = 'block';
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    computerLogo.src = computerChoices[randomIndex];
    computerLogo.style.display = 'block';
    updateScores(selectedLogo, computerLogo);
  });
});
