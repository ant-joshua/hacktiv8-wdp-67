function compareNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return false;
  } else if (firstNumber < secondNumber) {
    return true;
  } else {
    return -1;
  }
}

console.log(compareNumber(5, 8));
console.log(compareNumber(5, 3));
console.log(compareNumber(4, 4));
console.log(compareNumber(3, 3));
console.log(compareNumber(17, 2));
