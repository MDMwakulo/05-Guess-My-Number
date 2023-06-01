'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `🎉Correct Number!`;
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

const random = () => Math.trunc(Math.random() * 20 + 1);
const displayMessage = mssg =>
  (document.querySelector('.message').textContent = mssg);

let secretNumber = random(),
  score = 20,
  highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = `⛔ No number!`;
    displayMessage(`⛔ No number!`);

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = `🎉Correct Number!`;
    displayMessage(`🎉Correct Number!`);
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? `📈 Too high!` : `📉 Too low!`;
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = `💥 You lost the game!`;
      displayMessage(`💥 You lost the game!`);
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Click event for Again button
document.querySelector('.again').addEventListener('click', function () {
  // Initializing 'score' and 'secretNumber' variables
  (secretNumber = random()), (score = 20);

  // Restoring the initial message, number, score and guess input fields
  //   document.querySelector('.message').textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Restoring original background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
