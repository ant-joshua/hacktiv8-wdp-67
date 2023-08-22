let kata = "1 jam sama dengan 60 menit, dan juga sama dengan 3600 detik";
let pola = /\d+/g;

// console.log(pola.exec(kata));
// console.log(pola.exec(kata));
// console.log(pola.exec(kata));

// for (const iterator of pola.exec(kata)) {
//   console.log(iterator);
// }
// console.log(pola.exec(kata));

let hasil;

while ((hasil = pola.exec(kata)) !== null) {
  console.log(hasil);
}
