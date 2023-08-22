const input = [27, 38, 4, 43, 9, 82, 10];

function selectionSort(input) {
  let min = null;
  let n = input.length;

  for (let i = 0; i < n - 1; i++) {
    // Mencari elemen terkecil dari array yang belum diurutkan
    // Mencari elemen terkecil dari input[i] sampai input[n-1]
    min = i;

    for (let j = i + 1; j < n; j++) {
      // first loop
      // j = 1 , min = 0 , input[j] = 38 , input[min] = 27
      // j = 2 , min = 0 , input[j] = 4 , input[min] = 27
      if (input[j] < input[min]) {
        min = j;
      }
    }

    if (min !== i) {
      let tmp = input[i]; // 27
      input[i] = input[min]; // 4
      input[min] = tmp;
    }
    // 4,38,27,43,9,82,10 first loop
  }

  return input;
}

const sorted = selectionSort(input);
console.log(sorted);
