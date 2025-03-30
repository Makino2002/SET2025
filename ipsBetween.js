function ipsBetween(start, end) {
  const ipStart = start.split(".").map(Number);
  const ipEnd = end.split(".").map(Number);
  let result = 0;

  for (let i = 0; i < 4; i++) {
    result += (ipEnd[i] - ipStart[i]) * 256 ** (3 - i);
  }
  return result;
}
console.log(ipsBetween("10.0.0.10", "10.0.1.0"));
