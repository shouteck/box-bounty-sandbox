// Exports the list of fruit names in data/fruit.txt: lines that are neither
// blank nor comments, trimmed.
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const file = join(__dirname, '..', 'data', 'fruit.txt');
const lines = readFileSync(file, 'utf8').split(/\r?\n/);
const fruit = lines.map(line => line.trim()).filter(name => name !== '' && !name.startsWith('#'));

module.exports = fruit;
