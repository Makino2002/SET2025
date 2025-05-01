const testCases = [
  {
    input: [
      [1, 2],
      [1, 3],
      [2, 1],
    ],
    expected: 8,
  },
  {
    input: [
      [1, 2],
      [1, 3],
      [2, 1],
    ],
    expected: 7,
  },
];

function calculateShoppingBudget(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    let priceItem = 1;
    for (let j = 0; j < list[i].length; j++) {
      priceItem *= list[i][j];
    }
    sum += priceItem;
  }
  return sum;
}

function testCalculateShoppingBudget(cases) {
  for (const { input, expected } of cases) {
    const result = calculateShoppingBudget(input);
    if (result === expected) {
      console.log("YES");
    } else {
      console.log("input:", input);
      console.log("expected:", expected);
      console.log("Your output:", result);
    }
  }
}

testCalculateShoppingBudget(testCases);
