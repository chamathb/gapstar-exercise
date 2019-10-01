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
      let word, errorMessage = null;
      try{
        word = getRandomWordSync({ withErrors: true });
      } catch (e) {
        errorMessage = "It shouldn't break anything!";
      }
      const nonErrorPrintable = `${(i%3 ? '':'Fizz')+(i%5 ? '':'Buzz') || word}`;
        console.log( `${i}: ${(errorMessage != null)? errorMessage : nonErrorPrintable}`);
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
const getFormattedStringWithNumbersAndFizzBuzz = async(numberOfTimes, i) => {
  let word, errorMessage=null;
  try{
    word = await getRandomWord({ withErrors : true, slow : true });
  } catch (e) {
    errorMessage = "It shouldn't break anything!";
  }
  if(numberOfTimes > 0){
    const nonErrorPrintable = `${(i%3 ? '':'Fizz')+(i%5 ? '':'Buzz') || word}`;
    console.log(`${i}: ${(errorMessage != null)? errorMessage : nonErrorPrintable}`);
    return await getFormattedStringWithNumbersAndFizzBuzz(numberOfTimes - 1, i + 1);
  }
};


/**
 * uncomment to see first task
 */
//printNumbersWithRandomWords(100);

/**
 * second task and modifications with 4th task, error handling
 */
printNumbersWordsAndFizzBuzz(100);

/**
 * first task with asynchronous getRandomWord with support of recursion
 */
//getFormattedStringWithNumbers(100, 1);

/**
 * second task with asynchronous getRandomWord with support of recursion
 * modified to handle errors
 */
getFormattedStringWithNumbersAndFizzBuzz(100, 1);