'use strict';

const fingSmallestIndex = (arr = []) => {
    let smallest = arr[0],
        smallestIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
};

const selectionSortAsc = (arr = []) => {
    let sortedArr = [],
        range = arr.length,
        smallest;

    for (let i = 0; i < range; i++) {
        smallest = fingSmallestIndex(arr);
        sortedArr.push(arr.splice(smallest, 1)[0]);
    }

    return sortedArr;
};

console.log(selectionSortAsc([3,6,12,1,22,0,56,4])); // [0,1,3,4,6,12,22,56]
