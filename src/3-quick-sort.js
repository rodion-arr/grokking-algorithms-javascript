'use strict';

const quickSort = (arr = []) => {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivot = arr[0],
        arrSize = arr.length,
        less = [],
        greater = [];

        for (let i = 1; i < arrSize; i++) {
            if (arr[i] <= pivot) {
                less.push(arr[i]);
            } else {
                greater.push(arr[i]);
            }
        }

        return Array.prototype.concat(quickSort(less), [pivot], quickSort(greater));
    }
};

console.log(quickSort([3,6,12,1,22,0,56,4])); // [0,1,3,4,6,12,22,56]
