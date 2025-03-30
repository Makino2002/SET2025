function score(dice) {
  let counts = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < dice.length; i++) {
    counts[dice[i] - 1]++;
  }

  let points = 0;

  if (counts[0] >= 3) {
    points += 1000;
    counts[0] -= 3;
  }
  points += counts[0] * 100;

  for (let i = 1; i < counts.length; i++) {
    if (counts[i] >= 3) {
      points += (i + 1) * 100;
      counts[i] -= 3;
    }
  }

  points += counts[4] * 50;

  return points;
}
