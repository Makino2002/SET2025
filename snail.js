const array2D = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function snail(array2D) {
  const result = [];
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
    console.log(bottom, top, left, right);
  }

  return result;
}
