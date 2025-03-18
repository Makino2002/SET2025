const input = [
  [
    [1, 2],
    [1, 3],
    [2, 1],
  ],
  [
    [1, 2],
    [1, 3],
    [2, 1],
  ],
];
const expected = [8, 7];
function calculateShoppingBudget(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    let priceItem = 1;
    for (let j = 0; j < list[0].length; j++) {
      priceItem = list[i][j] * priceItem;
    }
    sum = sum + priceItem;
  }
  return sum;
}

function testCalculateShoppingBudget(input, expected) {
  for (let i = 0; i < input.length; i++) {
    if (calculateShoppingBudget(input[i]) === expected[i]) {
      console.log("YES");
    } else {
      console.log("input:", input[i]);
      console.log("output:", expected[i]);
      console.log("Your output:", calculateShoppingBudget(input[i]));
    }
  }
}
testCalculateShoppingBudget(input, expected);
