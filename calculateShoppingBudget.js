let list = [
  [2, 1],
  [1, 4],
  [2, 2],
];

function calculateShoppingBudget(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    let priceItem = 1;
    for (let j = 0; j < list[0].length; j++) {
      priceItem = list[i][j] * priceItem;
    }
    sum = sum + priceItem;
    // sum = sum + list[i][0] * list[i][1];
  }
  return sum;
}
