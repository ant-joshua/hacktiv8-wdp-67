function urutHuruf(kata) {
  var arr = kata.split("");
  var arrSort = arr.sort();
  var result = arrSort.join("");
  return result;
}

console.log(urutHuruf("halo")); // 'ehllo'

console.log(urutHuruf("qwerty")); // 'eqrtwy'

console.log(urutHuruf("javascript")); // 'aacijprstv'
