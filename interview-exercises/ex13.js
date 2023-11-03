//Implement the FizzBuzz algorithm: for numbers from 1 to n, print 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, and 'FizzBuzz' for multiples of both.

const fizzBuzz = (numbers) => {
    for (let num = 0; num < numbers; num++) {
        if (num % 15 === 0) {
            console.log("FizzBUzz");
        } else if (num % 3 === 0) {
            console.log("Fizz");
        } else if (num % 5 === 0) {
            console.log("Buzz");
        }
    }
};

fizzBuzz(15);
