// const input = [1, 2, 3, 4, 5, 6, 7, 8];
// const input = [27, 38, 4, 43, 9, 82, 10];

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

const search = 4;

function binarySearch(sortedArray, toFind) {
  var lowIndex = 0;
  var highIndex = sortedArray.length - 1;
  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (sortedArray[midIndex] === toFind) {
      return midIndex;
    } else if (sortedArray[midIndex] < toFind) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
    return null;
  }
}

const input = [27, 38, 4, 43, 9, 82, 10];
const sortArray = mergeSort(input);

const found = binarySearch(sortArray, search);
console.log(found);
