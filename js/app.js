'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// #pragma: GLOBAL VARIABLES + WINDOW INTO DOM

let section = document.getElementById('sales');
// console.log(section);

// #pragma: HELPER FUNCTIONS - UTILITIES

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// #pragma: OBJECT LITERALS

let seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  total: 0,
  cookieNums: [],
  rdmCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      let custNum = randomNum(this.minCustomer, this.maxCustomer);
      let cookieNum = Math.round(custNum * this.avgCookie);
      this.total += cookieNum;
      this.cookieNums.push(cookieNum);
    }
  },
  displayResults: function () {
    let city = document.createElement('h2');
    city.textContent = this.name;
    section.appendChild(city);

    let list = document.createElement('ul');
    section.appendChild(list);

    for (let i = 0; i < this.cookieNums.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookieNums[i]} cookies`;
      list.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.total}`;
    list.appendChild(totalLi);
  }
};

let tokyo = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  total: 0,
  cookieNums: [],
  rdmCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      let custNum = randomNum(this.minCustomer, this.maxCustomer);
      let cookieNum = Math.round(custNum * this.avgCookie);
      this.total += cookieNum;
      this.cookieNums.push(cookieNum);
    }
  },
  displayResults: function () {
    let city = document.createElement('h2');
    city.textContent = this.name;
    section.appendChild(city);

    let list = document.createElement('ul');
    section.appendChild(list);

    for (let i = 0; i < this.cookieNums.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookieNums[i]} cookies`;
      list.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.total}`;
    list.appendChild(totalLi);
  }
};

let dubai = {
  name: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  total: 0,
  cookieNums: [],
  rdmCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      let custNum = randomNum(this.minCustomer, this.maxCustomer);
      let cookieNum = Math.round(custNum * this.avgCookie);
      this.total += cookieNum;
      this.cookieNums.push(cookieNum);
    }
  },
  displayResults: function () {
    let city = document.createElement('h2');
    city.textContent = this.name;
    section.appendChild(city);

    let list = document.createElement('ul');
    section.appendChild(list);

    for (let i = 0; i < this.cookieNums.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookieNums[i]} cookies`;
      list.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.total}`;
    list.appendChild(totalLi);
  }
};

let paris = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  total: 0,
  cookieNums: [],
  rdmCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      let custNum = randomNum(this.minCustomer, this.maxCustomer);
      let cookieNum = Math.round(custNum * this.avgCookie);
      this.total += cookieNum;
      this.cookieNums.push(cookieNum);
    }
  },
  displayResults: function () {
    let city = document.createElement('h2');
    city.textContent = this.name;
    section.appendChild(city);

    let list = document.createElement('ul');
    section.appendChild(list);

    for (let i = 0; i < this.cookieNums.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookieNums[i]} cookies`;
      list.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.total}`;
    list.appendChild(totalLi);
  }
};

let lima = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  total: 0,
  cookieNums: [],
  rdmCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      let custNum = randomNum(this.minCustomer, this.maxCustomer);
      let cookieNum = Math.round(custNum * this.avgCookie);
      this.total += cookieNum;
      this.cookieNums.push(cookieNum);
    }
  },
  displayResults: function () {
    let city = document.createElement('h2');
    city.textContent = this.name;
    section.appendChild(city);

    let list = document.createElement('ul');
    section.appendChild(list);

    for (let i = 0; i < this.cookieNums.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookieNums[i]} cookies`;
      list.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.total}`;
    list.appendChild(totalLi);
  }
};

// #pragma: EXECUTABLE CODE

seattle.rdmCookies();
// console.log(seattle);
seattle.displayResults();

tokyo.rdmCookies();
// console.log(tokyo);
tokyo.displayResults();

dubai.rdmCookies();
// console.log(dubai);
dubai.displayResults();

paris.rdmCookies();
// console.log(paris);
paris.displayResults();

lima.rdmCookies();
// console.log(lima);
lima.displayResults();