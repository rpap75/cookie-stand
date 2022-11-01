// #pragma: GLOBAL VARIABLES + WINDOW INTO DOM

'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let section = document.getElementById('sales');

let tableElem = document.getElementById('table');

// #pragma: HELPER FUNCTIONS - UTILITIES

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// #pragma: OBJECT LITERALS

function Store(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.total = 0;
  this.cookieNums = [];
}
Store.prototype.rdmCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let custNum = randomNum(this.minCustomer, this.maxCustomer);
    let cookieNum = Math.round(custNum * this.avgCookie);
    this.total += cookieNum;
    this.cookieNums.push(cookieNum);
  }
};
Store.prototype.render = function () {
  let tableRow = document.createElement('tr');
  tableElem.appendChild(tableRow);
  let city = document.createElement('th');
  city.textContent = this.name;
  tableRow.appendChild(city);

  for (let i = 0; i < this.cookieNums.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = this.cookieNums[i];
    tableRow.appendChild(tableData);
  }
  let totalRow = document.createElement('td');
  totalRow.textContent = this.total;
  tableRow.appendChild(totalRow);
};
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);
function makeHeader() {
  let tableRow = document.createElement('tr');
  tableElem.appendChild(tableRow);
  let firstCell = document.createElement('td');
  tableRow.appendChild(firstCell);
  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = hours[i];
    tableRow.appendChild(tableData);
  }
}
makeHeader();
makeFooter();
// #pragma: EXECUTABLE CODE

seattle.rdmCookies();
seattle.render();

tokyo.rdmCookies();
tokyo.render();

dubai.rdmCookies();
dubai.render();

paris.rdmCookies();
paris.render();

lima.rdmCookies();
lima.render();


