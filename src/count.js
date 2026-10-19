// Prints how many fruit data/fruit.txt lists: lines that are neither blank
// nor comments. Run from the repository root: node src/count.js
// With --list, each fruit name is printed on its own line after the count.
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const file = join(__dirname, '..', 'data', 'fruit.txt');
const lines = readFileSync(file, 'utf8').split(/\r?\n/);
const fruit = lines.map(line => line.trim()).filter(name => name !== '' && !name.startsWith('#'));
console.log(`data/fruit.txt lists ${fruit.length} fruit`);
if (process.argv.includes('--list')) {
  for (const name of fruit) console.log(name);
}
