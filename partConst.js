function partConst(n, k, number) {
  let results = [];
  let stack = [[[], 0, 1]];

  while (stack.length > 0) {
    let [path, sum, start] = stack.pop();
    if (path.length === k) {
      if (sum === n) results.push([...path]);
      continue;
    }
    for (let num = start; num <= n; num++) {
      if (num === number) {
        continue;
      }
      if (sum + num <= n) {
        stack.push([[...path, num], sum + num, num]);
      }
    }
  }

  return results.length;
}

console.log(partConst(10, 3, 2));
