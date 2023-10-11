// Valid ["<section>", "</section>", "div", "</div"]

// Not Valid ["<a>", "<div>", "</a>", "</div"]

// write a function, that takes an array of html tags. Return true if they have valid order and snytax.

// const splitOpenTag = (arr) => {
//     const result = arr.map((tag) => {
//       return tag.split("<").join("")
//     })
//     return result;
// }

// console.log(splitOpenTag(["<section>", "</section>", "div", "</div"]));

// const splitCloseTag = (arr) => {
//   const call = splitOpenTag(arr);

//   const result = call.map((tag) => {
//     return tag.split(">").join("");
//   })
//   return result;
// }

// console.log(splitCloseTag(["<section>", "</section>", "div", "</div"]));

// const splitSlashTag = (arr) => {
//   const call = splitCloseTag(arr);

//   const result = call.map((tag) => {
//     return tag.split("/").join("");
//   })
//   return result;
// }

// console.log(splitSlashTag(["<section>", "</section>", "div", "</div"]));

// const isValidTag = (arr) => {
//   const call = splitSlashTag(arr);

//   for (let i = 0; i < call.length; i++) {
//     if (call[i] === call[i + 1]) {
//       return true;
//     }
//     return false;
//   }

// };

// console.log(isValidTag(["<section>", "</section>", "div", "</div"]));
// console.log(isValidTag(["<a>", "<div>", "</a>", "</div"]));

const splitOpenTag = (arr) => {
    const result = arr.map((tag) => {
        return tag.split("<").join("");
    });
    return result;
};

console.log(splitOpenTag(["<section>", "</section>", "div", "</div"]));

const splitCloseTag = (arr) => {
    const call = splitOpenTag(arr);

    const result = call.map((tag) => {
        return tag.split(">").join("");
    });
    return result;
};

console.log(splitCloseTag(["<section>", "</section>", "div", "</div"]));

const isValidTag = (arr) => {
    const call = splitCloseTag(arr);

    for (let i = 0; i < call.length; i++) {
        console.log(call[i]);
    }
};

console.log(isValidTag(["<section>", "</section>", "div", "</div"]));
// console.log(isValidTag(["<a>", "<div>", "</a>", "</div"]));

// const getOpeningTag = closingTag => {
//   return closingTag.slice(0, 1) + closingTag.slice(2);
// }
