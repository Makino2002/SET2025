// bài này không kiên quan đến bài unit test
function inI(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += "I";
  }
  return result;
}
function unit(n) {
  let result = "";
  if (n < 4) {
    result = inI(n);
  } else if (n === 4 || n === 9) {
    if (n < 5) {
      result += "IV";
    } else {
      result += "IX";
    }
  } else if (n >= 5 && n < 9) {
    result += "V" + inI(n - 5);
  }
  return result;
}
function inX(n) {
  let result = "";
  n = Math.floor(n / 10);
  for (let i = 1; i <= n; i++) {
    result += "X";
  }
  return result;
}
function Chuc(n) {
  let result = "";
  let M = Math.floor(n / 10);
  result = inX(n) + unit(n - M * 10);
  //   if (n > 10 && n < 20) {
  //     result = "X" + unit(n - 10);
  //   } else if (n >= 20 && n < 30) {
  //     result = "XX" + unit(n - 20);
  //   } else if (n >= 30 && n < 40) {
  //     result = "XXX" + unit(n - 30);
  //   } else if (n >= 40 && n < 50) {
  //     result = "XL" + unit(n - 40);
  //   }
  return result;
}
console.log(unit(9));
console.log(Chuc(19));
console.log(Chuc(30));
