// Prints how many fruit data/fruit.txt lists: lines that are neither blank
// nor comments. Run from the repository root: node src/count.js
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const file = join(__dirname, '..', 'data', 'fruit.txt');
const lines = readFileSync(file, 'utf8').split(/\r?\n/);
const count = lines.filter(line => line.trim() !== '' && !line.trimStart().startsWith('#')).length;
console.log(`data/fruit.txt lists ${count} fruit`);
