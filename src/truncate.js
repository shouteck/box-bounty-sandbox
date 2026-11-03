// Shortens text to at most max characters (as String.prototype.length counts
// them). Longer text keeps its first max - 1 characters and ends in a single
// ellipsis, so the result is exactly max long; no trimming or word breaks.
// truncate('hello world', 5) === 'hell…'
function truncate(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1) + '\u2026';
}

module.exports = truncate;
module.exports.truncate = truncate;
