// The inventory note must agree with what the counter prints.
// Run from the repository root: node --test
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const root = join(__dirname, '..');

test('docs/inventory.md states the count src/count.js prints', () => {
  const run = spawnSync(process.execPath, [join(root, 'src', 'count.js')], { cwd: root, encoding: 'utf8' });
  assert.equal(run.status, 0, `count.js failed: ${run.stderr}`);
  const printed = /lists (\d+) fruit/.exec(run.stdout);
  assert.ok(printed, `could not read count.js output: ${run.stdout}`);
  const note = readFileSync(join(root, 'docs', 'inventory.md'), 'utf8');
  const stated = /holds (\d+)(?:\s+\w+)? fruit|holds (\w+) fruit/.exec(note);
  assert.ok(stated, 'inventory.md does not state a fruit count');
  const words = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
  const statedCount = stated[1] !== undefined ? Number(stated[1]) : words[stated[2]];
  assert.equal(statedCount, Number(printed[1]), `inventory.md says ${stated[0].replace('holds ', '')} but count.js prints ${printed[1]}`);
});
