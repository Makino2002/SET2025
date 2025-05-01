const testCases = [
  { a: 1, b: 1, expected: 2 },
  { a: 2, b: 2, expected: 4 },
  { a: 1, b: 3, expected: 4 },
  { a: 2, b: 1, expected: 2 },
];

function sum(a, b) {
  return a + b;
}

function testSum(cases, mess) {
  for (const { a, b, expected } of cases) {
    const result = sum(a, b);
    if (result === expected) {
      console.log("yes");
    } else {
      console.log(mess);
      console.log("input:", a, b);
      console.log("expected:", expected);
      console.log("Your output:", result);
    }
  }
}

testSum(testCases, "sum function error");
