// Counts the words in text. A word is a run of one or more letters, digits or
// apostrophes (' or the typographic ’); anything else separates words.
// Letters and digits are matched in any script, not only ASCII.
// wordCount("don't stop") === 2
function wordCount(text) {
  const words = text.match(/[\p{L}\p{Nd}'\u2019]+/gu);
  return words ? words.length : 0;
}

module.exports = wordCount;
module.exports.wordCount = wordCount;
