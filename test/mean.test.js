// Checks src/mean.js. Run from the repository root: node --test
const { test } = require('node:test');
const assert = require('node:assert/strict');
const mean = require('../src/mean');

test('averages the numbers', () => assert.equal(mean([1, 2, 3, 4]), 2.5));
test('an empty array is NaN', () => assert.ok(Number.isNaN(mean([]))));
