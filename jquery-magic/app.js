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

  /* YEAR 3 */

  // Following what you did in previous years,
  //add the following into an unordered list
  //(with the attribute of storage and a value of trunk):

  // list items of
  // butter beer
  // invisibility cloak (add a class of secret)
  // magic map (add a class of secret)
  // time turner (add a class of secret)
  // leash (for your pet, be sure to give this list element the same class as you gave your pet)
  // Bertie Bott's Every Flavor [Jelly] Beans.
  // append the unordered list to your container div
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
  // In your main.css file, give the items with a class of secret an attribute of opacity: 0.5;
  // In your main.css file, remove the bullet points from the list items
});
