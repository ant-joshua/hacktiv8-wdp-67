function gcd(firstNumber, secondNumber) {
  var temp;
  while (secondNumber != 0) {
    temp = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = temp;
  }
  return firstNumber;
}

// TEST CASES
console.log(gcd(12, 16)); // 4
// iterasi 1
// temp = 16
// secondNumber = 12 % 16 = 12
// firstNumber = 16
// iterasi 2
// temp = 12
// secondNumber = 16 % 12 = 4
// firstNumber = 12
// iterasi 3
// temp = 4
// secondNumber = 12 % 4 = 0
// firstNumber = 4

console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99)); // 11
console.log(gcd(24, 36)); // 12
console.log(gcd(17, 23)); // 1
