// Checks src/capitalize.js. Run from the repository root: node --test
const { test } = require('node:test');
const assert = require('node:assert/strict');
const capitalize = require('../src/capitalize');

test('upper-cases the first letter of each word', () => {
  assert.equal(capitalize('hello world'), 'Hello World');
});

test('leaves the rest of each word as it is', () => {
  assert.equal(capitalize('hELLO wORLD'), 'HELLO WORLD');
  assert.equal(capitalize('iPhone McDonald'), 'IPhone McDonald');
});

test('keeps spacing and punctuation unchanged', () => {
  assert.equal(capitalize('  one,two;three  '), '  One,Two;Three  ');
  assert.equal(capitalize('--- !!!'), '--- !!!');
});

test('treats an apostrophe as part of a word', () => {
  assert.equal(capitalize("don't stop"), "Don't Stop");
});

test('leaves a word that starts with a digit unchanged', () => {
  assert.equal(capitalize('3rd place'), '3rd Place');
});

test('handles accented letters', () => {
  assert.equal(capitalize('élan vital'), 'Élan Vital');
});

test('returns an empty string unchanged', () => {
  assert.equal(capitalize(''), '');
});

test('is also available as the named capitalize export', () => {
  const { capitalize: named } = require('../src/capitalize');
  assert.equal(named, capitalize);
  assert.equal(named('hello world'), 'Hello World');
});
