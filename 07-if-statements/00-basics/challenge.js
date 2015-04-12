module.exports.favoriteNumber = function(fav, guess) {
  if (guess > fav) {
    return "Too high";
  }
  else if (guess < fav) {
    return "Too low";
  }
  else {
    return "You got it!";
  }
};

module.exports.checkLock = function(first, second, third, fourth) {
  if ((first == 3 || first == 5 || first == 7) && (second == 2) && (4 < third && third < 101) && (fourth < 9 || fourth > 20)) {
    return "correct";
  }
  else {
    return "incorrect";
  } 
};

module.exports.canIGet = function(item, money) {
  if ((item === 'MacBook Air') && (money >= 999)) {
    return true;
  }
  if ((item === 'MacBook Pro') && (money >= 1299)) {
    return true;
  }
  if ((item === 'Mac Pro') && (money >= 2499)) {
    return true;
  }
  if ((item === 'Apple Sticker') && (money >= 1)) {
    return true;
  }
  if ((item !== 'MacBook Air') || (item !== 'MacBook Pro') || (item !== 'Mac Pro') || (item !== 'Apple Sticker')) {
    return false;
  }
};