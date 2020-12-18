if (typeof jQuery == 'undefined') {
  console.log('oops! I still have to link my jQuery properly!');
} else {
  console.log('I did it! I linked jQuery and this js file!');
}

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
});
