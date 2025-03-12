function sum(numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum([1, 5.2, 4, 0, -1]));
