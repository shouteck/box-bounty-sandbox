// Checks src/truncate.js. Run from the repository root: node --test
const { test } = require('node:test');
const assert = require('node:assert/strict');
const truncate = require('../src/truncate');

test('returns text unchanged when it is shorter than max', () => {
  assert.equal(truncate('hello', 10), 'hello');
});

test('returns text unchanged when it is exactly max long', () => {
  assert.equal(truncate('hello', 5), 'hello');
});

test('cuts longer text to max characters ending in an ellipsis', () => {
  assert.equal(truncate('hello world', 5), 'hell\u2026');
  assert.equal(truncate('abcdef', 2), 'a\u2026');
});

test('leaves only the ellipsis when max is 1', () => {
  assert.equal(truncate('abcdef', 1), '\u2026');
});

test('returns an empty string unchanged', () => {
  assert.equal(truncate('', 3), '');
});

test('does not trim or look for word boundaries', () => {
  assert.equal(truncate('a b c d', 4), 'a b\u2026');
  assert.equal(truncate('  padded  ', 3), '  \u2026');
});

test('is also available as the named truncate export', () => {
  const { truncate: named } = require('../src/truncate');
  assert.equal(named, truncate);
  assert.equal(named('hello world', 5), 'hell\u2026');
});
