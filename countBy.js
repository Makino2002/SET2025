function countBy(x, n) {
  let z = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += x;
    z.push(count);
  }
  return z;
}
// function countBy(x, n) {
//   return [...Array(n)].map((_, inx) => ++inx * x);
// }
console.log(countBy(1, 10));
