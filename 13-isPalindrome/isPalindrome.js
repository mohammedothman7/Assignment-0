function isPalindrome(word) {
  // Insert code here;
  let stack = [];
  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  for (let j = 0; j < word.length; j++) {
    if (word[j] != stack.pop()) {
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
