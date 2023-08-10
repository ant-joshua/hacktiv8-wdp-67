function isArithmeticProgession(numbers) {
  let diff = numbers[1] - numbers[0];
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] !== diff) {
      return false;
    }
  }
  return true;
}

console.log(isArithmeticProgession([1, 2, 3, 4, 5, 6])); // true

console.log(isArithmeticProgession([2, 4, 6, 12, 24])); // false

console.log(isArithmeticProgession([2, 4, 6, 8])); // true

console.log(isArithmeticProgession([2, 6, 18, 54])); // false

console.log(isArithmeticProgession([1, 2, 3, 4, 7, 9])); // false
