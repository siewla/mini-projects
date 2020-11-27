function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

let userScore = 0;
let compScore = 0;

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const results = [
  'Scissors cuts Paper',
  'Paper covers Rock',
  'Rock crushes Lizard',
  'Lizard poisons Spock',
  'Spock smashes Scissors',
  'Scissors decapitates Lizard',
  'Lizard eats Paper',
  'Paper disproves Spock',
  'Spock vaporizes Rock',
  'Rock crushes Scissors',
];

const getRandomChoice = (arr) => {
  randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const getResults = (userChoice, computerChoice) => {
  userChoice = userChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  // console.log(userChoice, computerChoice);
  if (userChoice.toLowerCase() === computerChoice)
    return ['It is a Tie', 'Tie'];

  const splitResult = results.map((result) => result.split(' '));

  for (let i = 0; i < splitResult.length; i++) {
    if (
      splitResult[i][0].toLowerCase() === userChoice &&
      splitResult[i][2].toLowerCase() === computerChoice
    ) {
      updateUserScore();
      return [results[i], 'User Wins'];
    }

    if (
      splitResult[i][0].toLowerCase() === computerChoice &&
      splitResult[i][2].toLowerCase() === userChoice
    ) {
      updateCompScore();
      return [results[i], 'Computer Wins'];
    }
  }
};

const updateUserScore = () => {
  userScore++;
  document.getElementById('user-score').innerHTML = userScore;
};

const updateCompScore = () => {
  compScore++;
  document.getElementById('comp-score').innerHTML = compScore;
};

const resetGame = () => {
  userScore = 0;
  compScore = 0;
  document.getElementById('user-score').innerHTML = userScore;
  document.getElementById('comp-score').innerHTML = compScore;
  resultsDiv.innerHTML = '';
};

// console.log(getResults(getRandomChoice(choices), getRandomChoice(choices)));

const mainGame = () => {
  const choicesDOM = document.querySelectorAll('.choices');
  const resultsDiv = document.querySelector('.results');

  choicesDOM.forEach((choice) =>
    choice.addEventListener('click', (event) => {
      // document.querySelector('.results-container').style.display = 'block';
      resultsDiv.innerHTML = '';
      const userMove = event.target.id;
      const computerMove = getRandomChoice(choices);
      const results = getResults(userMove, computerMove);
      const firstResultText = document.createElement('h1');
      firstResultText.setAttribute('id', 'first-result-text');
      const secondResultText = document.createElement('h1');
      secondResultText.setAttribute('id', 'second-result-text');
      const yourMove = document.createElement('h1');
      yourMove.setAttribute('id', 'your-move');
      const opponentMove = document.createElement('h1');
      opponentMove.setAttribute('id', 'computer-move');
      firstResultText.innerHTML = results[0];
      secondResultText.innerHTML = results[1];
      yourMove.innerHTML = `Your Choice: ${userMove}`;
      opponentMove.innerHTML = `Computer\'s Choice: ${computerMove}`;
      resultsDiv.append(
        yourMove,
        opponentMove,
        firstResultText,
        secondResultText,
      );
    }),
  );

  document.querySelector('#reset-button').addEventListener('click', () => {
    resetGame();
  });
};

ready(function () {
  mainGame();
});
