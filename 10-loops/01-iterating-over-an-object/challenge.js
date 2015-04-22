module.exports.getKeys = function(object) {
  var array = Object.keys(object);
  return array
}
module.exports.getValues = function(object) {
  var array = [];
  for (var property in object) {
    array.push(property, object[property]);
  }
  return array
}

module.exports.objectToArray = function(object) {
  var array = [];
  for (var property in object) {
    array.push(property + " is " + object[property]);
  }
  return array
}