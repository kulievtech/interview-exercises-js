// Input {} => Valid
// Input {{{}}{}} => Valid
// Input { => Not Valid
// Input } => Not Valid
// Input {{}}{ => Not Valid
// Input '' => Not Valid

// Create a Function that takes braces as string, and returns true if braces are valid, otherwise false.

// Hint. Use Array, push, and pop methods

const isValidCurlyBraces = (braces) => {
    const arr = [];
    let openingCount = 0;
    let closingCount = 0;

    for (let i = 0; i < braces.length; i++) {
        arr.push(braces[i]);

        if (braces[i] === "{") {
            openingCount++;
        } else if (braces[i] === "}") {
            closingCount++;
        }
    }

    if (arr.length === 1) {
        return false;
    }

    if (openingCount !== closingCount) {
        return false;
    }
};

console.log(isValidCurlyBraces("{"));
console.log(isValidCurlyBraces("{}}"));
console.log(isValidCurlyBraces("{}"));

