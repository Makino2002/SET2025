let word = ["o", "b", "l", "i", "e", "t", "a", "d", "n", "m"];

function hiddenWords(number) {
  let result = "";
  while (number) {
    let tmp = number % 10;
    result += word[tmp];
    number = Math.floor(number / 10);
  }
  let res = "";
  for (let i = result.length - 1; i >= 0; i--) {
    res += result[i];
  }
  return res;
}
