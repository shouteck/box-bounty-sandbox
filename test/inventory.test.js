// The inventory note points the reader at src/count.js for the count.
// The count itself lives only in the script's output and is stated
// nowhere in the note. Run from the repository root: node --test
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const root = join(__dirname, '..');

test('docs/inventory.md points at src/count.js and states no count', () => {
  const run = spawnSync(process.execPath, [join(root, 'src', 'count.js')], { cwd: root, encoding: 'utf8' });
  assert.equal(run.status, 0, `count.js failed: ${run.stderr}`);
  assert.match(run.stdout, /lists \d+ fruit/, `could not read count.js output: ${run.stdout}`);
  const note = readFileSync(join(root, 'docs', 'inventory.md'), 'utf8');
  assert.match(note, /node src\/count\.js/, 'inventory.md does not point the reader at node src/count.js');
  const stated = /holds (\d+)(?:\s+\w+)? fruit|holds (\w+) fruit|\b\d+ fruit\b/.exec(note);
  assert.equal(stated, null, `inventory.md still states a count: ${stated && stated[0]}`);
});
