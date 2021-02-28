module.exports = function reverse (n) {
  return (''+n).replace('-','').split('').reverse().join('')
}
