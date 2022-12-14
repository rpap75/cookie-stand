// #pragma: GLOBAL VARIABLES + WINDOW INTO DOM

'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let allStores = [];

let tableElem = document.getElementById('table');

let formStore = document.getElementById('formStore');

//#pragma: EVENT HANDLERS

function handleSubmit(event) {
  event.preventDefault();

  let location = event.target.storeLocation.value;

  let minCustPerHr = event.target.minCustPerHr.value;
  let maxCustPerHr = event.target.maxCustPerHr.value;
  let avgCookPerCust = event.target.avgCookPerCust.value;

  let newStore = new Store(location, minCustPerHr, maxCustPerHr, avgCookPerCust);
  newStore.rdmCookies();
  newStore.render();
  formStore.reset();
  document.getElementById('footerRow').remove();
  makeFooter();

}

// #pragma: HELPER FUNCTIONS - UTILITIES

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} function makeHeader() {

  let tableRow = document.createElement('tr');
  tableElem.appendChild(tableRow);

  let firstCell = document.createElement('td');
  firstCell.textContent = 'Location';
  firstCell.className = 'location';
  tableRow.appendChild(firstCell);

  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableData.className = 'hours';
    tableData.textContent = hours[i];
    tableRow.appendChild(tableData);
  }
  let lastCell = document.createElement('td');
  lastCell.className = 'dailyTotal';
  lastCell.textContent = 'Daily Total';
  tableRow.appendChild(lastCell);
}

function makeFooter() {
  let tableRow = document.createElement('tr');
  tableRow.className = 'footerRow';
  tableRow.id = 'footerRow';

  let tableHeader = document.createElement('th');
  tableHeader.className = 'hourlyTotal';
  tableHeader.textContent = 'Hour Total';
  tableRow.appendChild(tableHeader);

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    for (let j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookieNums[i];
    }

    let tdElement = document.createElement('th');
    tdElement.className = 'hourTotal';
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);

    grandTotal += hourlyTotal;
  }

  let totalElement = document.createElement('th');
  totalElement.className = 'grandTotal';
  totalElement.textContent = grandTotal;
  tableRow.appendChild(totalElement);

  tableElem.appendChild(tableRow);
}

// #pragma: CONSTRUCTOR FUNCTION

function Store(name, minCustomer, maxCustomer, avgCookie) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.total = 0;
  this.cookieNums = [];
  allStores.push(this);
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
    tableData.className = 'nums';
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

// #pragma: EXECUTABLE CODE

makeHeader();

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

makeFooter();

formStore.addEventListener('submit', handleSubmit);