const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE
/**
 * @description prints 1 to `numberOfTimes` with use of randomWordSync
 * @param numberOfTimes - accepts positive integer
 */
const printNumbersWithRandomWords = (numberOfTimes) => {
  if(!isNaN(numberOfTimes) && numberOfTimes > 0){
    for(let i = 1; i <= numberOfTimes; i++) {
      const word = getRandomWordSync({ withErrors: false });
      console.log(`${i}: ${word}`)
    }
  } else {
    console.log('Positive number input is required')
  }
};

/**
 * @description prints 1 to `numberOfTimes` with use of randomWordSync and FizzBuzz
 * @param numberOfTimes - accepts positive integer
 */
const printNumbersWordsAndFizzBuzz = (numberOfTimes) => {
  if(!isNaN(numberOfTimes) && numberOfTimes > 0){
    for(let i=1; i <= numberOfTimes; i++) {
      const word = getRandomWordSync({ withErrors: false });
      console.log( `${i}: ${(i%3 ? '':'Fizz')+(i%5 ? '':'Buzz') || word}`)
    }
  } else {
    console.log('Positive number input is required')
  }
};


//printNumbersWithRandomWords(100);

printNumbersWordsAndFizzBuzz(100);