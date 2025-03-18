const a = [1, 2, 1, 2];
const b = [1, 2, 3, 1];
const expected = [2, 4, 4, 2];
function sum(a, b) {
  return a + b;
}
function testSum(a, b, mess) {
  for (let i = 0; i < a.length; i++) {
    if (sum(a[i], b[i]) === expected[i]) {
      console.log("yes");
    } else {
      console.log("input:", a[i], b[i]);
      console.log("output:", expected[i]);
      console.log("Your output:", a[i] + b[i]);
    }
  }
}

testSum(a, b, "Lỗi hàm sum");
