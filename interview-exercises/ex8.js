// Write a function that converts an array of strings into an array of objects with a property 'value' that contains the original string.

// [a, b, c] => [{value: a}, {value: b}, {value: c}]

function convertArrayToObjectArray(arr) {
    return arr.reduce((result, str) => {
        result.push({ value: str });
        return result;
    }, []);
}

const inputArray = ["a", "b", "c"];
const outputArray = convertArrayToObjectArray(inputArray);
console.log(outputArray);
