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
