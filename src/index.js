const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE
const printNumbersWithRandomWords = (numberOfTimes) => {
  if(!isNaN(numberOfTimes) && numberOfTimes > 0){
    for(var i=0; i <= numberOfTimes; i++) {
      let word = getRandomWordSync({ withErrors: false });
      console.log(`${i}: ${word}`)
    }
  } else {
    console.log('Positive number input is required')
  }
};

printNumbersWithRandomWords(100);