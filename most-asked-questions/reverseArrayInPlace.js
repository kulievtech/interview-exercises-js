function reverseArrayInPlace(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        const lastEleIdx = array.length - 1 - i;
        array[i] = array[lastEleIdx];
        array[lastEleIdx] = temp;
    }
    return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
