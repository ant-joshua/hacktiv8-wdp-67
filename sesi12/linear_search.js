const input = [1, 2, 3, 4, 5, 6, 7, 8];
const search = 4;

function linearSearch(input, search) {
  let found = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === search) {
      found = true;
      return {
        found: found,
        index: i,
      };
    }
  }

  return {
    found: found,
    index: -1,
  };
}
