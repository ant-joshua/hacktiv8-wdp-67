function threeStepsAB(text) {
  var result = false;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === "a" && text[i + 4] === "b") {
      result = true;
    }
  }
  return result;
}

let text = "lane borrowed";
console.log(text[1]);
console.log(text[1 + 4]);

// console.log(threeStepsAB("lane borrowed"));

// console.log(threeStepsAB("you are boring"));
