let fund = 0;
let day = 0;

const tools = {
  teeth: {
    name: 'Teeth',
    owned: true,
    cost: 0,
    earning: 1,
    unlocked: true,
  },
  scissors: {
    name: 'Rusty Scissors',
    owned: false,
    cost: 5,
    earning: 5,
    unlocked: false,
  },
  oldLawnmover: {
    name: 'Old-Timey Push Lawnmover',
    owned: false,
    cost: 25,
    earning: 50,
    unlocked: false,
  },
  batteryLawnmover: {
    name: 'Battery-powered Lawnmower',
    owned: false,
    cost: 250,
    earning: 100,
    unlocked: false,
  },
  starvingStudents: {
    name: 'Team of Starving Students',
    owned: false,
    cost: 500,
    earning: 250,
    unlocked: false,
  },
};

const updateDay = () => {
  document.getElementById('day').innerHTML = day;
};

const updateFund = () => {
  document.getElementById('fund').innerHTML = fund;
  unlockedTools();
  checkWin();
};

const initializeGame = () => {
  day = 0;
  fund = 0;
  resetTools();
  updateDay();
  updateFund();
};

const resetTools = () => {
  let keys = Object.keys(tools);
  for (const key of keys) {
    tools[key].owned = false;
    tools[key].unlocked = false;
    const divUnlock = document.querySelectorAll('.remove-lock');
    divUnlock.forEach((item) => item.classList.remove('remove-lock'));
  }
  tools['teeth'].owned = true;
};

const unlockedTools = () => {
  let keys = Object.keys(tools);
  for (const key of keys) {
    if (tools[key].owned === false && fund >= tools[key].cost) {
      tools[key].unlocked = true;
      const divUnlock = document.getElementById('lock-' + key);
      divUnlock.classList.add('remove-lock');
    }
  }
};

const buyTool = (tool, action) => {
  if (action === 'Y') {
    fund -= tools[tool].cost;
    tools[tool].owned = true;
    const divUnlock = document.getElementById('bought-' + tool);
    divUnlock.classList.add('remove-lock');
    alert(
      `You just purchased ${tools[tool].name}, it can generate $ ${tools[tool].earning} per day.`,
    );
  } else if (action === 'N') {
    alert('Please click to buy againif you change your mind.');
  } else {
    alert('Invalid entry');
  }
};

const toolClicked = (toolname) => {
  if (tools[toolname].owned) {
    fund += tools[toolname].earning;
    day++;
    updateDay();
    updateFund();
  } else if (tools[toolname].unlocked) {
    const answerBuyOrNot = prompt(
      `You do not own ${tools[toolname].name}, do you want to buy them at $ ${tools[toolname].cost}?`,
      'Y/N',
    );
    buyTool(toolname, answerBuyOrNot);
  } else {
    alert(`Please work harder to earn ${tools[toolname].name}`);
  }
};

const checkWin = () => {
  if (fund >= 1000) {
    alert(`You earned more than $1000. You Won.
           You earned $${fund} in ${day} days.
           ~~~~~ Congratulations ~~~~~`);
    initializeGame();
  }
};
