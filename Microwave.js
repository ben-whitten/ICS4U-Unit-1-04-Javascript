/*
* The Microwave program implements an application that
* determines the time needed to reheat an item and quantity of which the user
* inputs.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-11-25 
*/

// Defining require and process
/*eslint no-undef: "error"*/
/*global require, process*/

// Constant variable.
const additionalTime = 0.5;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

try {

  // input
  var timeForOne;

  console.log();
  rl.question('Enter the item type you are reheating [sub] [pizza] [soup]:',
            (item) => {
  if (item == "sub") {
    timeForOne = 1;
  } else if (item == "pizza") {
    timeForOne = 0.75;
  } else if (item == "soup") {
    timeForOne = 1.75;
  } else {
    console.log();
    console.log(`Invalid Input.`);
    return;
  }

  console.log();
  rl.question('Enter the number of items you are reheating (1-3):',
              (quantity) => {

  if ((quantity > 3) || (quantity < 1)) {
    console.log();
    console.log(`Invalid Input.`);
    return;
  }

  // process
  var time = (timeForOne + additionalTime * timeForOne * (quantity - 1));

  // output
  console.log();
  console.log();
  console.log(`It will take ${time} minute(s) to reheat.`);

  rl.close();
  });
  });
} catch(err) {
  console.log();
  console.log(`An error has occurred.`);
}
