const isEven = (num) => {
  return num % 2 === 0;
  // write code for numbers.isEven
};

const sum = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  // write code for numbers.sum
};

const comboSum = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      } else {
        return false;
      }
    }
  }
  // write code for numbers.comboSum
};

module.exports = {
  isEven,
  sum,
  comboSum,
};
