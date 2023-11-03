// Create a function that takes an array of numbers and returns the sum of all elements.

const sumOfElements = (arr) => {
    return arr.reduce((acc, num) => {
        return acc + num;
    }, 0);
};

console.log(sumOfElements([1, 2, 3, 4, 5]));
