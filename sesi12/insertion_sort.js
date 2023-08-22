const input = [27, 38, 4, 43, 9, 82, 10];

function insertion_sort() {
  for (let i = 1; i < input.length; i++) {
    let key = input[i];
    let j = i - 1;
    while (j >= 0 && input[j] > key) {
      input[j + 1] = input[j];
      j = j - 1;
    }
    input[j + 1] = key;
  }
  return input;
}

const sorted = insertion_sort(input);
console.log(sorted);
