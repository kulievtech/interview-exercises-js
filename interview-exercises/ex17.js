// Given a number. Sum up the digits
// 1234 => 10
// 4589 => 26
// 8978 => 32.
// COndition : Do not convert number to string and loop.

const sumDigits = (num) => {
    const numStr = String(num);
    let sum = 0;

    for (char of numStr) {
        sum += Number(char);
    }

    return sum;
};

console.log(sumDigits(1234));
console.log(sumDigits(4589));
console.log(sumDigits(8978));

const sumDigits2 = (number) => {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
};

console.log(sumDigits2(1234));
console.log(sumDigits2(4589));
console.log(sumDigits2(8978));
