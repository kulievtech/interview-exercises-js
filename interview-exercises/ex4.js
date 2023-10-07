// Input [1, 6, 3, 9, 0, -10, 100]
// [100, 9]
// Create a function that takes an array of numbers. Return two largest one in array [firstLargest, secondLargest];

const twoLargestNumbers = (array) => {
    let firstLargest = 0;
    let secondLargest = 0;

    for (const num of array) {
        if (num > firstLargest) {
            firstLargest = num;
        }
    }

    for (const num of array) {
        if (num > secondLargest && num < firstLargest) {
            secondLargest = num;
        }
    }

    return [firstLargest, secondLargest];
};

console.log(twoLargestNumbers([1, 6, 3, 9, 0, -10, 100]));
