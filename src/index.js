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
    console.log('Positive number input is required');
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
      console.log( `${i}: ${(i%3 ? '':'Fizz')+(i%5 ? '':'Buzz') || word}`);
    }
  } else {
    console.log('Positive number input is required');
  }
};

/**
 * @description prints 1 to `numberOfTimes` with use of getRandomWord
 * @param numberOfTimes
 * @param i - index
 * @returns {Promise.<void>}
 */
const getFormattedStringWithNumbers = async(numberOfTimes, i) => {
  const word = await getRandomWord({ withErrors : false, slow : true });
  if(numberOfTimes > 0){
    console.log(`${i}: ${word}`);
    return await getFormattedStringWithNumbers(numberOfTimes - 1, i +1);
  }
};

/**
 * @description prints 1 to `numberOfTimes` with use of getRandomWord with FizzBizz
 * @param numberOfTimes
 * @param i - index
 * @returns {Promise.<void>}
 */
const getFormattedStringWithNumbersAndFizzBizz = async(numberOfTimes, i) => {
  let word, errorMessage=null;
  try{
    word = await getRandomWord({ withErrors : true, slow : true });
  } catch (e) {
    errorMessage = "It shouldn't break anything!";
  }
  if(numberOfTimes > 0){
    const nonErrorPrintable = `${(i%3 ? '':'Fizz')+(i%5 ? '':'Buzz') || word}`;
    console.log(`${i}: ${(errorMessage != null)? errorMessage : nonErrorPrintable}`);
    return await getFormattedStringWithNumbersAndFizzBizz(numberOfTimes - 1, i + 1);
  }
};


//printNumbersWithRandomWords(100);

//printNumbersWordsAndFizzBuzz(100);

//getFormattedStringWithNumbers(100, 1);

//getFormattedStringWithNumbersAndFizzBizz(100, 1);