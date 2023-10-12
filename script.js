'use strict';
// const highscore = document.querySelector('.highscore');
// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;

// document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', () => {
//   console.log(document.querySelector('.score').textContent);

//   if (!document.querySelector('.guess').value) {
//     document.querySelector('.message').textContent = 'No number';
//   } else if (document.querySelector('.guess').value > secretNumber) {
//     document.querySelector('.message').textContent = 'too high';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (document.querySelector('.guess').value < secretNumber) {
//     document.querySelector('.message').textContent = 'too low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'Correct Number';
//     document.querySelector('.score').textContent = score;

//     document.querySelector('.highscore').textContent = score;
//   }

//   if ((score = 0)) {
//     document.querySelector('.message').textContent = 'You lost!';
//     document.querySelector('.highscore').textContent = 0;
//   }
// });

// document.querySelector('.again').addEventListener('click', () => {
//   document.querySelector('.score').textContent = score;
// });

//Correction sans factorisation

// let secretNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// let highscore = 0;
// document.querySelector('.highscore').textContent =
//   localStorage.getItem('highscore') || 0;

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!document.querySelector('.guess').value) {
//     document.querySelector('.message').textContent = 'No number';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('.score').textContent = score;
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//       localStorage.setItem('highscore', highscore);
//     }
//     document.body.style.background = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.message').textContent = 'Too low!';
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Game over!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.message').textContent = 'Too high!';
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Game over!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// Correction avec factorisation

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.highscore').textContent =
  localStorage.getItem('highscore') || 0;

const displayMessage = message => {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!document.querySelector('.guess').value) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      localStorage.setItem('highscore', highscore);
    }
    document.body.style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too low!' : 'Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');

  document.body.style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
