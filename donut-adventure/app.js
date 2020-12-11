const randomlySelect = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

class Hero {
  constructor(name, weapons, catchPhrases, fightPhrase) {
    this.name = name;
    this.health = 100;
    this.weapons = weapons;
    this.catchPhrases = catchPhrases;
    this.fightPhrase = fightPhrase;
  }

  announceHealth() {
    return this.health;
  }

  talkRandom() {
    alert(randomlySelect(this.catchPhrases));
  }

  fight(enemy) {
    const choosenWeapon = randomlySelect(this.weapons);
    enemy.health -= choosenWeapon.damage;
    alert(enemy.health);
  }
}

const dougie = new Hero(
  'Dougie',
  [
    {
      name: 'sprinkleSpray',
      damage: 5,
    },
    {
      name: 'sugarShock',
      damage: 10,
    },
  ],
  ["i'm fresher than day old pizza", "you can't count my calories"],
  "i'm ready to rumble",
);

const pizzaRat = new Hero(
  'Pizza Rat',
  [
    {
      name: 'pepperoniStars',
      damage: 5,
    },
    {
      name: 'cheeseGrease',
      damage: 10,
    },
  ],
  ["i'm youtube famous", "i'm more dangerous than an uncovered sewer"],
  "i'm gonna flatten you like a slice of pepperoni!",
);

// console.log(dougie);
// console.log(pizzaRat);

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  checkWin() {
    if (this.player1.health <= 0) {
      alert('player2 win');
    }
    if (this.player2.health <= 0) {
      alert('player1 win');
    }
  }
}

const newGame = new Game(dougie, pizzaRat);
document
  .querySelector('#talk-sass')
  .addEventListener('click', () => dougie.talkRandom());

document
  .querySelector('#talk-smack')
  .addEventListener('click', () => pizzaRat.talkRandom());

document
  .querySelector('#dougie-fight')
  .addEventListener('click', () => dougie.fight(pizzaRat));

document
  .querySelector('#pizzarat-fight')
  .addEventListener('click', () => pizzaRat.fight(dougie));
