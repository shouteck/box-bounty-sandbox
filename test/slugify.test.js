// Checks src/slugify.js. Run from the repository root: node --test
const { test } = require('node:test');
const assert = require('node:assert/strict');
const slugify = require('../src/slugify');

test('lowercases and joins words with hyphens', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('collapses runs of punctuation and spaces into one hyphen', () => {
  assert.equal(slugify('apples, pears  &  plums!'), 'apples-pears-plums');
});

test('trims leading and trailing separators', () => {
  assert.equal(slugify('  --Banana--  '), 'banana');
});

test('drops accents', () => {
  assert.equal(slugify('Crème Brûlée'), 'creme-brulee');
});

test('keeps digits', () => {
  assert.equal(slugify('Top 10 Fruit of 2026'), 'top-10-fruit-of-2026');
});

test('returns an empty string when nothing is left', () => {
  assert.equal(slugify(''), '');
  assert.equal(slugify('!!!'), '');
});

test('accepts non-string input', () => {
  assert.equal(slugify(42), '42');
});
