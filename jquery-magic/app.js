// if (typeof jQuery == 'undefined') {
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!');
// }

const createElementWithText = (type, content) => {
  return $(`<${type}>`).text(`${content}`);
};

const houses = ['Hufflepuff', 'Gryffindor', 'Ravenclaw', 'Slytherin'];

const timeTable = [
  { day: 'Monday', dailyClasses: ['Transfiguration', 'Charms', 'Potions'] },
  { day: 'Tuesday', dailyClasses: ['Charms', 'Potions', 'History of Magic'] },
  {
    day: 'Wednesday',
    dailyClasses: ['Defence Against the Dark Arts', 'Astronomy'],
  },
  {
    day: 'Thursday',
    dailyClasses: ['Herbotology', 'Flying', 'Tranfiguration'],
  },
  { day: 'Friday', dailyClasses: ['Care of Magical Creatures', 'Divination'] },
];

$(() => {
  /* YEAR 1 */
  const $container = $('#container');
  //   console.log($container);
  const $h1 = $('<h1>').text('Hogwarts');

  $container.append($h1);

  /* YEAR 2 */
  const $name = createElementWithText('h2', 'Siew La');
  const $house = createElementWithText('h3', houses[1]);
  const $pet = createElementWithText('h4', 'Hedwig').addClass('Owl');
  const $wand = createElementWithText('h4', 'Elder Wand');
  $container.append($name, $house, $pet, $wand);

  /* YEAR 3 */
  $('#container').append(
    $('<ul>')
      .attr('storage', 'trunk')
      .append([
        $('<li>').text('butter beer'),
        $('<li>').addClass('secret').text('invisibility cloak'),
        $('<li>').addClass('secret').text('magic map'),
        $('<li>').addClass('secret').text('time turner'),
        $('<li>').addClass('owl').text('leash'),
        $('<li>').text("Bertie Bott's Every Flavor [Jelly] Beans"),
      ]),
  );

  /* YEAR 4 */
  const $timeTableName = createElementWithText('h5', 'Spring 2021');
  const $createTimeTable = $('<table>')
    .append($('<thead>'))
    .addClass('time-table');
  const $headerOne = createElementWithText('th', 'Day');
  const $headerTwo = createElementWithText('th', 'Classes');
  $createTimeTable.append($headerOne, $headerTwo);
  for (const dailySchedule of timeTable) {
    const $day = createElementWithText('td', dailySchedule.day);
    const $dailyClasses = createElementWithText(
      'td',
      dailySchedule.dailyClasses,
    );
    const $tableRow = $('<tr>').append($day, $dailyClasses);
    $createTimeTable.append($tableRow);
  }
  $container.append($timeTableName, $createTimeTable);

  /* YEAR 4 */
  // Break your wand! (select the element that contains your wand and remove it)
  $('h4').eq(1).remove();

  /* other solution */
  // $wand.remove();

  // Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
  $('ul').children().eq(0).remove();
  /* other solution */
  $('li').eq(0).remove();

  // Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
  // Make your new wand stand out by adding a color of indigo (or whatever color you like).
  // But do it with magic (jQuery): Don't add this css in your main.css file
  $wand.text('New Wand').css('color', 'green');
  $pet.after($wand);
  // Send your pet on a spy mission (remove your pet from the DOM,
  // put it somewhere else in your HTML).
  // Make sure your pet's leash stays in your trunk
  // (list item with the same class as your pet inside unordered list)
  $pet.remove();
  $('ul').append($pet);
  // Have your pet come back
  // (remove your pet from the DOM, put it back in its original location)
  $pet.remove();
  $house.after($pet);
});
