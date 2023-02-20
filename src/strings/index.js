const split = (str, delim) => {
  return str.split(delim);
  // write code for strings.split
};

const pairs = (str) => {
  let results = [];
  for (let i = 0; i < str.length; i += 2) {
    const pair = str[i] + str[i + 1];
    results.push(pair);
  }
  return results;
  // write code for strings.pairs
};

const reverse = (str) => {
  return str.split("").reverse().join("");
  // write code for strings.reverse
};

module.exports = {
  split,
  pairs,
  reverse,
};
