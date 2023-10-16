// const janjian = new Promise((resolve, reject) => {
//   const janji = true;
//   if (janji) {
//     resolve("Janji ditepati");
//   } else {
//     reject("Ingkar janji");
//   }
// });

// // janjian
// //   .then((response) => console.log(response))
// //   .catch((response) => console.log(response));

// async function getJanjian() {
//   const result = await janjian;

//   return result;
// }

// const result = getJanjian();
// console.log(result);

function printAsync() {
  return new Promise((resolve, reject) => {
    let nilai = 100;

    if (nilai < 80) {
      resolve("Nilai anda kurang dari 80");
    } else if (nilai > 80) {
      resolve("Nilai anda lebih dari 80");
    } else {
      reject("Nilai anda sama dengan 80");
    }
  });
}

async function printNilai(urutan) {
  const result = await printAsync();

  console.log(result + " dari async");
  console.log(urutan);

  return result;
}

printNilai(1);
printNilai(2);
printNilai(3);
printNilai(4);
printNilai(5);
printNilai(6);

// function printSync() {
