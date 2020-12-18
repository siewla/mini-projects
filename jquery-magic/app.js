// if (typeof jQuery == 'undefined') {
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!');
// }

const createElementWithText = (type, content) => {
  return $(`<${type}>`).text(`${content}`);
};

const houses = ['Hufflepuff', 'Gryffindor', 'Ravenclaw', 'Slytherin'];

$(() => {
  /* YEAR 1 */

  // Query for your div with the id of container and set it to a variable named $container
  // console.log $container
  const $container = $('#container');
  console.log($container);

  // Create an <h1> element and set it to a variable called $h1 and console log it
  // Add some text inside the h1 element. Example text: 'Hogwarts'
  const $h1 = $('<h1>').text('Hogwarts');

  $container.append($h1);

  /* YEAR 2 */
  // h2 element with your name
  const $name = createElementWithText('h2', 'Siew La');

  // h3 element with your house
  // ( )
  const $house = createElementWithText('h3', houses[1]);

  // h4 element with your pet's name
  // this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
  const $pet = createElementWithText('h4', 'Hedwig').addClass('Owl');

  // h4 element with your wand
  const $wand = createElementWithText('h4', 'Elder Wand');
  // (You can make it whatever you want. Need help coming up with one?
  // Here is one of many websites to help you find your wand playbuzz.com )
  $container.append($name, $house, $pet, $wand);

  // In your main.css add an attribute of font-family: fantasy;
  // to all elements that have a class that matches your pet's class
});
