var min = function (list) {
  // giải thích code:
  // reduce sẽ cho chúng ta duyệt qua các phần tử là ktr điều kiện xem acc > val hay không
  // nếu có thì acc = val, còn không thì acc là chính nó.
  // nếu sau arrow function chúng ta để trống thì acc = list[0];
  return list.reduce((acc, val) => {
    return acc > val ? val : acc;
  });
};

var max = function (list) {
  return list.reduce((acc, val) => {
    return acc < val ? val : acc;
  });
};

console.log(min([-10, 2, 4, 3, -20, 5]));
console.log(max([-10, 2, 4, 3, -20, 5]));
