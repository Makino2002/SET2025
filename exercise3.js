function exercise3() {
  let random = Math.floor(Math.random() * 10 + 1);
  console.log(random);

  while (true) {
    const input = parseInt(window.prompt("Nhập một số từ 1 đến 10:"), 10);
    console.log(input);
    console.log(random);

    if (random === input) {
      console.log("Chính xác!");
      break;
    } else if (input > random) {
      console.log("Nhỏ hơn");
    } else if (input < random) {
      console.log("Lớn hơn");
    }
  }
}

exercise3();
