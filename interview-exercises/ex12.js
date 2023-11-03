// Create a function that checks if a given string is a palindrome (the same forwards and backwards).
// Input: hello => output: false
// Input: rotetor => output: true

const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("rotetor"));
console.log(isPalindrome("hello"));

console.log(isPalindrome("racecar"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("money"));
