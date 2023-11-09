// Write a JavaScript function that takes an array as input. This array can contain elements that are either numbers or arrays of numbers, but the arrays will not contain further nested arrays. The function should return a new array that is a flattened version of the input array, where all elements are at the root level.

// [1,2,3[4,5,6[7,8,9]]]=>[1,2,3,4,5,6]
const flattenArray = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];
        if (Array.isArray(ele)) {
            for (let j = 0; j < ele.length; j++) {
                newArr.push(arr[i][j]);
            }
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
flattenArray([1, 2, 3, [4, 5, 6], [7, 8, 9]]);
