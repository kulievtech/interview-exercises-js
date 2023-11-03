// Construct a function that counts the number of vowels and consonants in a string.

const countVowels = (string) => {
    let vowelCount = 0;

    const vowels = "aeiou";

    for (const char of string) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return { vowels: vowelCount, consonants: string.length - vowelCount };
};

console.log(countVowels("Javascript"));
