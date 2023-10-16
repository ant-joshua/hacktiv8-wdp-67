function main() {
  function calculate(nilai_1, nilai_2) {
    return new Promise((resolve, reject) => {
      const result = nilai_1 - nilai_2;
      if (result > 0) {
        resolve(result);
      } else {
        reject("Nilai kurang dari 0");
      }
    });
  }

  calculate(50, 40)
    .then((response) => console.log(response))
    .catch((response) => console.log(response, 50, 40));
  calculate(10, 20)
    .then((response) => console.log(response))
    .catch((response) => console.log(response, 10, 20));
  calculate(20, 30)
    .then((response) => console.log(response))
    .catch((response) => console.log(response, 20, 30));
}

main();
