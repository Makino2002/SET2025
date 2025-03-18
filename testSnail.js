const input = [
  [
    [1, 2, 1],
    [1, 3, 2],
    [2, 1, 3],
  ],

  [
    [1, 2],
    [1, 3],
    [2, 1],
  ],
];

let expected = [
  [1, 2, 1, 2, 3, 1, 2, 1, 3],
  [1, 2, 3, 1, 2, 1],
];

function snail(array2D) {
  let result = [];
  let top = 0;
  let bottom = array2D.length;

  let left = 0;
  let right = array2D[0].length;

  while (left < right || top < bottom) {
    for (let i = left; i < right; i++) {
      result.push(array2D[left][i]);
    }
    top++;
    for (let i = top; i < bottom; i++) {
      result.push(array2D[i][right - 1]);
    }
    right--;
    for (let i = right - 1; i >= left; i--) {
      result.push(array2D[bottom - 1][i]);
    }
    bottom--;

    for (let i = bottom - 1; i >= top; i--) {
      result.push(array2D[i][left]);
    }
    left++;
  }

  return result;
}
function soSanh(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      return false;
    }
  }
  return true;
}
function testSnail(input, expected) {
  for (let i = 0; i < input.length; i++) {
    if (soSanh(snail(input[i]), expected[i])) {
      console.log("YES");
    } else {
      console.log("input:", input[i]);
      console.log("output:", expected[i]);
      console.log("Your output:", snail(input[i]));
    }
  }
}
console.log(testSnail(input, expected));
