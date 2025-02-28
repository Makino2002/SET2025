let weight = 64;
let height = 1.9;
function BMI(weight, height) {
  return weight / height ** 2;
}
// Calculate Simple Interest
console.log("BMI: " + BMI(weight, height));

let Principal = 100000;
let Rate = 3.875;
let Time = 5;
function calculatorSimpleInterest(Principal, Rate, Time) {
  return Principal * (1 + Rate * Time);
}
console.log(
  "Calculating Simple Interest: " +
    calculatorSimpleInterest(Principal, Rate, Time)
);

let USD = 10;
function convertCurrency(USD) {
  return USD * 25000;
}
console.log(USD + " USD = " + convertCurrency(USD) + " VND");

function CalculateTime(seconds) {
  let hours = 0;
  let minutes = 0;
  if ((seconds) => 60) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;
    if ((minutes) => 60) {
      hours = Math.floor(minutes / 60);
      minutes = minutes - hours * 60;
    }
  }
  return `${hours}:${minutes}:${seconds}`;
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
}
let seconds = 3 * 60 * 60 + 4 * 60 + 30;
console.log(seconds + "Giây => " + CalculateTime(seconds));
