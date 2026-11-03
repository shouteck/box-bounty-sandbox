// Upper-cases the first character of each word and leaves everything else as
// it is. A word is a run of letters, digits or apostrophes (' or ’), so
// "don't" stays one word; a word that starts with a digit is unchanged.
// capitalize("hello wORLD, don't") === "Hello WORLD, Don't"
function capitalize(text) {
  return String(text).replace(/[\p{L}\p{N}'’]+/gu, word => {
    const first = String.fromCodePoint(word.codePointAt(0));
    return first.toUpperCase() + word.slice(first.length);
  });
}

module.exports = capitalize;
module.exports.capitalize = capitalize;
