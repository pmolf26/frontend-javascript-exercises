module.exports.newArray = function(one, two, three, four) {
  var array = [one, two, three, four];
  return array
};

module.exports.firstAndLast = function(array) {
  var lastElementIndex = array.length - 1;
  var changedArray = [array[0], array[lastElementIndex]];
  return  changedArray
};