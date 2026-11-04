// The average of an array of numbers; NaN for an empty one.
function mean(numbers) {
  if (numbers.length === 0) return NaN;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

module.exports = mean;
module.exports.mean = mean;
