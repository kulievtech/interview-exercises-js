// Create a function that takes an array of numbers, and target number. Check if two numbers can be added and get the target sum. Do not use nested arrays, includes, indexOf methods. Use objects.

// [1, 4, 5, 7], 8 => false
// [1,3,7,8,0,4], 7 => true

const arrayInput1 = [1, 4, 5, 7];
const numberInput1 = 8;

const arrayInput2 = [1, 3, 7, 8, 0, 4];
const numberInput2 = 7;

const checkSum = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];

        if (number + arr[i + 1] === num) {
            return true;
        }
    }
    return false;
};

console.log(checkSum(arrayInput1, numberInput1));
console.log(checkSum(arrayInput2, numberInput2));
