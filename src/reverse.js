// Returns text with its characters in reverse order. Characters are what a
// reader sees (grapheme clusters), so emoji, flags and accented letters built
// from several code points stay whole instead of being split apart.
// reverse('hello') === 'olleh'
const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });

function reverse(text) {
  return Array.from(segmenter.segment(text), (s) => s.segment).reverse().join('');
}

module.exports = reverse;
module.exports.reverse = reverse;
