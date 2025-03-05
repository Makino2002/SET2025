function exercise1(n) {
  let i = 1;

  while (i <= n) {
    console.log("bảng cữu chương: " + i);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
    i++;
  }
}
exercise1(3);
