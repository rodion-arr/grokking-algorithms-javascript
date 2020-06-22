'use strict';

const binarySearch = (arr = [], searchItem) => {
    let low = 0,
    hight = arr.length - 1,
    mid,
    guess;

    while (low <= hight) {
        mid = Math.floor((low + hight) / 2);
        guess = arr[mid];

        if (guess === searchItem) {
            return mid;
        }

        if (guess > searchItem) {
            hight = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
};

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 4)); // 3
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 1)); // 0
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 10)); // null
