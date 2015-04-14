module.exports.addItem = function(item, array) {
    array.includes(item);
    array.push(item);
    return array
};

module.exports.reverseSortedList = function(array) {
  array.sort();
  array.reverse();
  return array
};