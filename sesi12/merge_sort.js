const input = [27, 38, 4, 43, 9, 82, 10];

function mergeSort(input) {
  if (input.length <= 1) {
    return input;
  }

  const mid = Math.floor(input.length / 2);
  const left = input.slice(0, mid);
  const right = input.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
