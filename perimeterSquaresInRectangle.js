// function fib(n) {
//   if (n == 1) return 1;
//   if (n == 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// function perimeter(n) {
//   let sum = fib(n + 3) - 1;
//   return 4 * sum;
// }

// function fib(n) {
//     var a = 1, b = 1, tmp;
//     while (n-- > 0) {
//       tmp = a;
//       a = b;
//       b += tmp;
//     }
//     return a;
//   }

//   function perimeter(n) {
//       return 4 * (fib(n + 2) -1)
//   }
let memo = {};

function fib(n) {
  if (n in memo) return memo[n];
  if (n == 1 || n == 2) return 1;

  memo[n] = fib(n - 1) + fib(n - 2);
  return memo[n];
}

function perimeter(n) {
  let sum = 0;
  sum = fib(n + 3) - 1;

  return 4 * sum;
}

console.log(perimeter(5));
