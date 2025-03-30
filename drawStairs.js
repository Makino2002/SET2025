function drawStairs(n) {
  // your code here
  let result = "";
  let space = "";
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result += "I";
    } else {
      space += " ";
      result += "\n" + space + "I";
    }
  }
  return result;
}

console.log(drawStairs(4));
