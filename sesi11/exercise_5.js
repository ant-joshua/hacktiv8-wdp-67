function threeStepsAB(text) {
  var result = false;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === "a" && text[i + 4] === "b") {
      result = true;
    }
  }
  return result;
}

console.log(threeStepsAB("lane borrowed"));

console.log(threeStepsAB("you are boring"));
