// Write a function that removes duplicates from an array.

const removeDuplicates = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
};

console.log(removeDuplicates([1, 2, 3, 3, 10, 12, 10, 20, 20]));

// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

const removeDuplicates2 = (array) => {
    let unique = [];

    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        if (!unique.includes(number)) {
            unique.push(number);
        }
    }
    return unique;
};

console.log(removeDuplicates2([1, 2, 3, 3, 10, 12, 10, 20, 20]));
