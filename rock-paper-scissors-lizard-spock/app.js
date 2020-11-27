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
  if (userChoice.toLowerCase() === computerChoice) return 'It is a Tie';

  const splitResult = results.map((result) => result.split(' '));

  for (let i = 0; i < splitResult.length; i++) {
    if (
      splitResult[i][0].toLowerCase() === userChoice &&
      splitResult[i][2].toLowerCase() === computerChoice
    )
      return [splitResult[i], 'User Wins'];
    if (
      splitResult[i][0].toLowerCase() === computerChoice &&
      splitResult[i][2].toLowerCase() === userChoice
    )
      return [splitResult[i], 'Computer Wins'];
  }
};

console.log(getResults(getRandomChoice(choices), getRandomChoice(choices)));
