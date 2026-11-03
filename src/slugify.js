// Turns a string into a URL slug: lowercase ASCII letters and digits joined
// by single hyphens, with accents dropped and no leading or trailing hyphen.
// slugify('Crème Brûlée & Co.') === 'creme-brulee-co'
function slugify(text) {
  return String(text)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = slugify;
module.exports.slugify = slugify;
