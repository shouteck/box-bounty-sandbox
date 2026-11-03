// Checks src/clamp.js. Run from the repository root: node --test
const { test } = require('node:test');
const assert = require('node:assert/strict');
const clamp = require('../src/clamp');

test('returns n unchanged when it is inside the range', () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test('returns min when n is below the range', () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test('returns max when n is above the range', () => {
  assert.equal(clamp(15, 0, 10), 10);
});

test('keeps n when it equals either end', () => {
  assert.equal(clamp(0, 0, 10), 0);
  assert.equal(clamp(10, 0, 10), 10);
});

test('works with negative and fractional bounds', () => {
  assert.equal(clamp(-7.5, -5.5, -1), -5.5);
  assert.equal(clamp(0.25, 0, 1), 0.25);
});

test('returns the single value when min equals max', () => {
  assert.equal(clamp(42, 7, 7), 7);
});

test('throws a RangeError when min is greater than max', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
});

test('is also available as a named export', () => {
  assert.equal(require('../src/clamp').clamp(15, 0, 10), 10);
});
