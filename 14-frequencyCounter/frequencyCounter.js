function frequencyCounter(word) {
  // Insert code here;
  let map = {};
  for (let i = 0; i < word.length; i++) {
    if (!map[word.charAt(i)]) {
      map[word.charAt(i)] = 1;
    } else {
      map[word.charAt(i)]++;
    }
  }

  return map;
}

// Do not edit this line;
module.exports = frequencyCounter;
