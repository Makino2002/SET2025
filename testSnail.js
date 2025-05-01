const testCases = [
  {
    input: [
      [1, 2, 1],
      [1, 3, 2],
      [2, 1, 3],
    ],
    expected: [1, 2, 1, 2, 3, 1, 3, 1, 2],
  },
  {
    input: [
      [1, 2],
      [1, 3],
      [2, 1],
    ],
    expected: [1, 2, 3, 1, 2, 1],
  },
];

function snail(array2D) {
  let result = [];
  let top = 0;
  let bottom = array2D.length;
  let left = 0;
  let right = array2D[0].length;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      result.push(array2D[top][i]);
    }
    top++;

    for (let i = top; i < bottom; i++) {
      result.push(array2D[i][right - 1]);
    }
    right--;

    if (top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        result.push(array2D[bottom - 1][i]);
      }
      bottom--;
    }

    if (left < right) {
      for (let i = bottom - 1; i >= top; i--) {
        result.push(array2D[i][left]);
      }
      left++;
    }
  }

  return result;
}

function compareArrays(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, idx) => val === b[idx]);
}

function testSnail(testCases) {
  for (const { input, expected } of testCases) {
    const result = snail(input);
    if (compareArrays(result, expected)) {
      console.log("YES");
    } else {
      console.log("FAIL");
      console.log("input:", input);
      console.log("expected:", expected);
      console.log("Your output:", result);
    }
  }
}

testSnail(testCases);
