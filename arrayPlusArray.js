function arrayPlusArray(arr1, arr2) {
  // giải thích code:
  // reduce sẽ cho chúng ta duyệt qua các phần tử là ktr điều kiện xem acc > val hay không
  // nếu có thì acc = val, còn không thì acc là chính nó.
  // nếu sau arrow function chúng ta truyền vào giá trị ban đầu của val = 0;
  return (
    arr1.reduce((acc, val) => acc + val, 0) +
    arr2.reduce((acc, val) => acc + val, 0)
  ); //something went wrong
}
