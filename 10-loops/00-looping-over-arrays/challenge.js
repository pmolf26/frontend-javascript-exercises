module.exports.sumNumbers = function(array) {
  if (array.length == 0) {
    return 0
  }
  var Total = 0;
  for (var counter = 0; counter < array.length; counter++) {
    Total = Total + array[counter];
  };
  return Total
}
module.exports.splitAndLowerCaseString = function(inputString) {
  var array = inputString.split(",");
  var changedString ="";
  for (var counter = 0; counter < array.length; counter++) {
   changedString = array[counter];
   array.splice(counter, 1, changedString.toLowerCase());
  };  
      return array
}
module.exports.addIndex = function(array) {
  newArray = [];
  for (var counter = 0; counter < array.length; counter++) {
    var newString = counter + " is " + array[counter];
    newArray.push(newString);
  }
  return newArray
}
