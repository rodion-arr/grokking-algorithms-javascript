'use strict';

const isSeller = (name = '') => name.indexOf('m') === 0;

/**
 * @param {String} searchStart 
 * @param {Map} graph 
 */
const bfs = (searchStart, graph) => {
    let queue = [...graph.get(searchStart)];
    const searched = [];
    
    while (queue.length > 0) {
        let person = queue.shift();

        if (searched.indexOf(person) < 0) {
            if (isSeller(person)) {
                console.log(`${person} is a seller`);
                return true;
            } else {
                searched.push(person);
                queue = [...queue, ...graph.get(person)];
            }
        }
    }

    return false;
};

const graph = new Map();
graph.set('you', ['alice', 'bob', 'claire']);
graph.set('bob', ['anuj', 'peggy']);
graph.set('alice', ['peggy']);
graph.set('claire', ['thom', 'jonny']);
graph.set('anuj', []);
graph.set('peggy', []);
graph.set('thom', []);
graph.set('jonny', ['mr.Seller']);

bfs('you', graph); // mr.Seller is a seller
