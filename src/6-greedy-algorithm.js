'use strict';
const setOperations = require('./set-operations');

let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = new Map();
stations.set('kone', new Set(["id", "nv", "ut"]));
stations.set('ktwo', new Set(["wa", "id", "mt"]));
stations.set('kthree', new Set(["or", "nv", "ca"]));
stations.set('kfour', new Set(["nv", "ut"]));
stations.set('kfive', new Set(["ca", "az"]));

const finalStations = new Set();

while (statesNeeded.size > 0) {
    let bestStation = null,
        statesCovered = new Set();

    for (let [station, states] of stations.entries()) {
        let covered = setOperations.intersection(statesNeeded, states);

        if (covered.size > statesCovered.size) {
            bestStation = station;
            statesCovered = covered;
        }
    }

    statesNeeded = setOperations.difference(statesNeeded, statesCovered);
    finalStations.add(bestStation);
}

console.log([...finalStations]); // [ 'kone', 'ktwo', 'kthree', 'kfive' ]
