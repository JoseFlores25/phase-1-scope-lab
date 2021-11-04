// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}

const leastFavoriteCustomer = "Flores";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "No Allow Flores";
  return leastFavoriteCustomer;
}
