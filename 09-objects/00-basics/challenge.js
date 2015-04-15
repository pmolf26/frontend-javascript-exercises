module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var course = {
      title:courseTitle,
      duration:courseDuration,
      students:courseStudents
      }
  return course
};

module.exports.addProperty = function(object, newProp, newValue) {
  var Empty = {};
  if (object == Empty) {
    object.newProp = newValue;
    return object
  }
  else {
    return object
  }
};

module.exports.formLetter = undefined;

module.exports.canIGet = undefined;