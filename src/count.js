// Prints how many fruit data/fruit.txt lists: lines that are neither blank
// nor comments. Run from the repository root: node src/count.js
// With --list, each fruit name is printed on its own line after the count.
// With --names, only the fruit names are printed, one per line, no count.
const fruit = require('./fruit');

if (process.argv.includes('--names')) {
  for (const name of fruit) console.log(name);
} else {
  console.log(`data/fruit.txt lists ${fruit.length} fruit`);
  if (process.argv.includes('--list')) {
    for (const name of fruit) console.log(name);
  }
}
