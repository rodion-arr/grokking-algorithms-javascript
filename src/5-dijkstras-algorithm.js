'use strict';

// the graph
const start = new Map();
start.set('a', 6);
start.set('b', 2);

const a = new Map();
a.set('fin', 1);

const b = new Map();
b.set('a', 3);
b.set('fin', 5);

const graph = new Map();
graph.set('start', start);
graph.set('a', a);
graph.set('b', b);
graph.set('fin', new Map());

// the costs table
const costs = new Map();
costs.set('a', 6);
costs.set('b', 2);
costs.set('fin', Infinity);

// the parents table
const parents = new Map();
parents.set('a', 'start');
parents.set('b', 'start');
parents.set('fin', null);

const processed = [];

/**
 * @param {Map} costs 
 */
const findLowestCostNode = (costs) => {
    let lowestCost = Infinity,
    lowestCostNode = null;

    for (let [node, cost] of costs) {
        if (cost < lowestCost && processed.indexOf(node) < 0) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }

    return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node !== null) {
    let currentNodeCost = costs.get(node),
        neighbors = graph.get(node);

    for (let [n, costToNextNeighbor] of neighbors) {
        let currentNeighborCost = costs.get(n);
        let newCostToNextNeighbor = currentNodeCost + costToNextNeighbor;

        if (currentNeighborCost > newCostToNextNeighbor) {
            costs.set(n, newCostToNextNeighbor);
            parents.set(n, node);
        }
    }

    processed.push(node);
    node = findLowestCostNode(costs);
}

// Lowest costs to vertices from 'start' --> Map { 'a' => 5, 'b' => 2, 'fin' => 6 }
console.log(costs);
