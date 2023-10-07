// Your Create a function, it takes a string. It would consist only digits and letters, both, or one of them. They will in order, it means, you will not mixed ones: X12X
// Output XXXX1234567
// 4 letters 7 numbers

// Input. 123 => ZZZZ1230000
// Input. A => ZZZA0000000
// Input. B12 => ZZZB1200000
// Input AB => ZZAB0000000
// Input AAB123 => ZAAB1230000

const matchIt = (string) => {
    let letterCount = 0;
    let numCount = 0;
    const numbers = "1234567890";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let givenLetter = "";
    let givenNumbers = "";

    let result = "";

    for (let i = 0; i < string.length; i++) {
        if (numbers.includes(string[i])) {
            numCount++;
            givenNumbers += string[i];
        } else if (letters.includes(string[i])) {
            letterCount++;
            givenLetter += string[i];
        }
    }

    console.log(letterCount, numCount);
    console.log(givenLetter, givenNumbers);
};

matchIt("AAB123");
