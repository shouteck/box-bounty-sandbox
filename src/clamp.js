// Limits n to the range min..max (both ends included): below min gives min,
// above max gives max, anything in between comes back unchanged.
// min must not be greater than max: that throws a RangeError.
// clamp(15, 0, 10) === 10
function clamp(n, min, max) {
  if (min > max) throw new RangeError('min must not be greater than max');
  if (n < min) return min;
  if (n > max) return max;
  return n;
}

module.exports = clamp;
module.exports.clamp = clamp;
