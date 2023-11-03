const sortedArray = (arr1, arr2) => {
    const sortArr = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length) {
        if (arr1[i] < arr2[j]) {
            sortArr.push(arr1[i]);
            i++;
        } else {
            {
                sortArr.push(arr2[j]);
                j++;
            }
        }
    }
    return sortArr;
};

console.log(sortedArray([1, 4, 6, 10, 100], [3, 4, 11, 12, 101]));
