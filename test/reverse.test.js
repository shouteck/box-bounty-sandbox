// Checks src/reverse.js. Run from the repository root: node --test
const { test } = require('node:test');
const assert = require('node:assert/strict');
const reverse = require('../src/reverse');

test('reverses the characters of a word', () => {
  assert.equal(reverse('hello'), 'olleh');
});

test('keeps spaces and punctuation in their reversed places', () => {
  assert.equal(reverse('Hello, world!'), '!dlrow ,olleH');
});

test('returns empty and one-character text unchanged', () => {
  assert.equal(reverse(''), '');
  assert.equal(reverse('a'), 'a');
});

test('keeps characters outside the basic plane whole', () => {
  assert.equal(reverse('a\u{1F600}b'), 'b\u{1F600}a');
});

test('keeps a letter and its combining accent together', () => {
  assert.equal(reverse('e\u0301x'), 'xe\u0301');
});

test('keeps multi-code-point emoji together', () => {
  assert.equal(reverse('\u{1F1EF}\u{1F1F5}!'), '!\u{1F1EF}\u{1F1F5}');
});

test('is also available as a named export', () => {
  assert.equal(require('../src/reverse').reverse('abc'), 'cba');
});
