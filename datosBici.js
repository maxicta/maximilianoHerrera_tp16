const { readFileSync } = require('fs');
let stockBicicletas = readFileSync('bicicletas.json', 'utf-8');

let bicis = JSON.parse(stockBicicletas);

module.exports = bicis;

//console.log(bicis);
