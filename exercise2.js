function exercise2(arr) {
  arr.sort();
  console.log("Min" + arr[0]);
  console.log("Max" + arr[arr.length - 1]);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Average: " + sum / arr.length);
}
console.log(exercise2([3, 2, 1]));
