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

  checkWin(enemy) {
    if (enemy.health <= 0) {
      alert(`${this.name} won`);
    }
    if (this.health <= 0) {
      alert(`${enemy.name} won`);
    }
  }

  updateHealthBar(enemy) {
    document.querySelector(
      `.${enemy.name}-health`,
    ).style.width = `calc(${enemy.health}%)`;
    document.querySelector(`#${enemy.name}-health`).innerHTML = enemy.health;
  }

  fight(enemy) {
    const choosenWeapon = randomlySelect(this.weapons);
    enemy.health -= choosenWeapon.damage;

    alert(this.fightPhrase);
    alert(
      `${this.name} used ${choosenWeapon.name} that deteriorating ${enemy.name}'s health by ${choosenWeapon.damage}.`,
    );
    this.updateHealthBar(enemy);
    this.checkWin(enemy);
  }
}

const dougie = new Hero(
  'dougie',
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
  'pizzarat',
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
