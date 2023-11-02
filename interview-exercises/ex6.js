// Create a function, that takes a string, each char of string is brace, <(){}[]>. You have to return true if Braces are valid, otherwise false.
// "{}[()]" => Valid
// "[}" => Not Valid
// "[{]}" => No Valid
// "{{}}[()](" => Not Valid

const isValidBraces = (string) => {
    const arr = [];

    const openingBraces = "{([<";
    const closingBraces = "})]>";

    for (let i = 0; i < string.length; i++) {
        if (openingBraces.includes(string[i])) {
            arr.push(string[i]);
        } else {
            const lastPart = arr.pop();
        }
    }
    return arr.length === 0;
};

console.log(isValidBraces("<(){}[]>"));
console.log(isValidBraces("{}[()]"));
console.log(isValidBraces("[{]}"));
console.log(isValidBraces("{{}}[()]("));
