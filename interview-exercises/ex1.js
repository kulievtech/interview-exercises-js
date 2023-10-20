// Create a function that takes an array of numbers, and target number. Check if two numbers can be added and get the target sum. Do not use nested arrays, includes, indexOf methods. Use objects.

// [1, 4, 5, 7], 8 => true
// [1, 3, 7, 8, 0, 4], 7 => true

const checkSum = (arr, target) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        const difference = target - arr[i];

        if (obj[difference]) {
            return true;
        }
        obj[arr[i]] = true;
    }
    return false;
};

console.log(checkSum([1, 4, 5, 7], 8)); // true

// obj = {"7": true, "4":true, "3": true, "1": true}

console.log(checkSum([1, 4, 5, 6], 12)); // false

// obj = {"11": true, "8":true, "7": true, "6": true}

console.log(checkSum([1, 3, 7, 8, 0, 4], 7)); // true

// obj = {"6": true, "4":true, "0": true, "-1": true, "7": true, "3": true}

console.log(checkSum([1, 5, 5, 7], 10)); // true

// obj = {"9": true, "5":true, "5": true,     return true right after this}
