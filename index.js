// Code your solutions in this file
let birhdayNames = ["Ada", "Brendan", "Ali"];
let event = 'birthday';

function writeCards(birhdayNames, event) {
  for (let i = 0; i < birhdayNames.length; i++) {
    console.log(`Thank you, ${birhdayNames[i]} , for the wonderful ${event} gift!`);
  }

}
 

writeCards(birhdayNames, event)