//currency
function mycallback(text, pattern) {
  var result = text.match(pattern);

  // console.log(result);
  return result;
}
function currency(input_str, pattern, mycallback) {
  var text = input_str;
  const c = mycallback(text, pattern);
  return c;
  //   console.log(result);
}

// currency(
//   "My eggs cost £3, bread cost £2, vodka cost £35",
//   /£?[0-9][0-9]?/g,
//   mycallback
// );

// replace a chacter
function mycallback1(text, pattern, replacement) {
  var result = text.replace(pattern, replacement);

  // console.log(result);
  return result;
}
function replacech(input_str, pattern, replacement, mycallback1) {
  var text = input_str;
  const c = mycallback1(text, pattern, replacement);
  return c;
  // console.log(c);
}
// replacech(
//   "My eggs cost £3, eggs cost £2, vodka cost £35",
//   /£/g,
//   "$",
//   mycallback1
// );
module.exports = { currency, mycallback, replacech, mycallback1 };
