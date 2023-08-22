function hitungTotalDiskon(harga, diskon) {
  // 10 , 12.5
  return harga - harga * diskon;
}

function hitungTotalPajak(harga, pajak) {
  return harga * pajak;
}

function hitungTotalHarga(harga, diskon) {
  const totalDiskon = hitungTotalDiskon(harga, diskon);
  return totalDiskon + hitungTotalPajak(totalDiskon, 0.1); // pajak
}

const totalHarga = hitungTotalHarga(10000, 0.5);

console.log(totalHarga);

function removeSpace(text) {
  return text.split(" ").join("");
}

function reveseInput(text) {
  return text.split("").reverse().join("");
}

function updateVowel(text) {
  const vowels = ["a", "i", "u", "e", "o"];

  let newText = text.split("");

  const characterToNext = newText.map((item, index) => {
    if (vowels.includes(item)) {
      return newText[index + 1];
    }
    return item;
  });

  return characterToNext.join("");
}

// function encryptText(text) {
//   const removeSpaceText = removeSpace(text);
//   const reverseText = reveseInput(removeSpaceText);
//   const updateVowelText = updateVowel(reverseText);

//   return updateVowelText.toLowerCase();
// }

function allProperties(obj) {
  let result = [];
  let properties = Object.keys(obj);

  properties.forEach((property) => {
    result.push(`${property}: ${obj[property]}`);
  });

  return result;
}

let siswa = {
  nama: "Rahmat",
  kelas: "12",
  jurusan: "IPA",
};

console.log(allProperties(siswa));

const encryptText = function (text) {
  const removeSpaceText = removeSpace(text);
  const reverseText = reveseInput(removeSpaceText);
  const updateVowelText = updateVowel(reverseText);

  return updateVowelText.toLowerCase();
};

let text = "Hacktiv8 Indonesia";
const password = encryptText(text);
const decryptText = encryptText(password);
console.log(password);
