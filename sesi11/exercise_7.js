function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) if (num % i == 0) return false;
  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false

function listPrime(angkaPertama, angkaKedua) {
  let result = [];
  for (let i = angkaPertama; i <= angkaKedua; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(listPrime(1, 5)); // [2, 3, 5]
console.log(listPrime(5, 10)); // [5, 7]
console.log(listPrime(10, 20)); // [11, 13, 17,19]
