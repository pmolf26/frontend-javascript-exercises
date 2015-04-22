module.exports.reversePlusOne = function (array) {
  array.reverse();
  array.unshift(1);
  return array
};

module.exports.plusesEverywhere = function(array) {
  var pluses = array.join([separator = '+']);
  return pluses
};

module.exports.arrayQuantityPlusOne = function(array) {
  var plusOne = array.length + 1;
  return plusOne
}