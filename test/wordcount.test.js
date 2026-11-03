// Checks src/wordcount.js. Run from the repository root: node --test
const { test } = require('node:test');
const assert = require('node:assert/strict');
const wordCount = require('../src/wordcount');

test('counts no words in empty or blank text', () => {
  assert.equal(wordCount(''), 0);
  assert.equal(wordCount('   '), 0);
});

test('counts words separated by spaces', () => {
  assert.equal(wordCount('hello world'), 2);
});

test('keeps apostrophes inside a word', () => {
  assert.equal(wordCount("don't stop"), 2);
});

test('treats punctuation as a separator', () => {
  assert.equal(wordCount('one,two;three'), 3);
});

test('counts digits as part of a word', () => {
  assert.equal(wordCount('abc123 def'), 2);
});

test('counts no words in punctuation only', () => {
  assert.equal(wordCount('--- !!!'), 0);
});

test('is also available as the named wordCount export', () => {
  const { wordCount: named } = require('../src/wordcount');
  assert.equal(named, wordCount);
  assert.equal(named('hello world'), 2);
});
