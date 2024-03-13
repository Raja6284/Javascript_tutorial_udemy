'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-03-10T17:01:17.194Z',
    '2024-03-12T23:36:17.929Z',
    '2024-03-13T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2024-02-10T14:43:26.374Z',
    '2024-02-12T18:49:59.371Z',
    '2024-02-13T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementsDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  //  const day = `${date.getDate()}`.padStart(2,0);
  //  const month = `${date.getMonth()}`.padStart(2,0);
  //  const year = date.getFullYear();

  //return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
  
};
const formatCur = function(value,locale,currency){
  return new Intl.NumberFormat(locale,{
    style:'currency',
    currency:currency,
  }).format(value);

}
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementsDate(date,acc.locale);

    const formattedMov = formatCur(mov,acc.locale,acc.currency);
    
    // new Intl.NumberFormat(acc.locale,{
    //   style:'currency',
    //   currency:acc.currency,
    // }).format(mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements_date">${displayDate}</div>
        <div class="movements__value">${formattedMov
        }</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
   
  labelBalance.textContent = formatCur(acc.balance,acc.locale,acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes,acc.locale,acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out),acc.locale,acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest,acc.locale,acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};


const startLogOutTimer = function(){

  const tick = function(){
    const min = String(Math.trunc(time/60)).padStart(2,0);
    const sec = String(Math.trunc(time%60)).padStart(2,0);

 //In each call, print the remaining time to UI
labelTimer.textContent = `${min}:${sec}`;

 //when 0 seconds, stop the timer and log out the user
 if(time === 0){
  clearInterval(timer);
  labelWelcome.textContent = 
  'Log in to get started';
  containerApp.style.opacity = 0;

 }

 //decrease 1s
  time--;
  };
  //set time to 5 minutes
  let time = 300;
  //call the timer every second
  tick();
  const timer = setInterval(tick,1000); 
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount,timer;

//FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current accoutn date and time
    //Experimenting API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', //'long' will print name of month in aplphabet
      year: 'numeric',
      //weekday:'long',
    };
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    //day/month/year
    // const now  = new Date();

    //  const day = `${now.getDate()}`.padStart(2,0);
    //  const month = `${now.getMonth()}`.padStart(2,0);
    //  const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2,0);
    // const min = `${now.getMinutes()}`.padStart(2,0);
    // labelDate.textContent =`${day}/${month}/${year}, ${hour}:${min}`;
    //day/month/year

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Timer
    if(timer)clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function(){
    // Add movement
    currentAccount.movements.push(amount);

    //Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    //reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//console.log(12 === 12.0);

//Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.33333
//Binary base 2 - 0 1

// console.log(0.1+0.2);
// console.log(0.1+0.2 === 0.3);

//conversion
// console.log(Number('23'));
// console.log(+'23');

//parsing
// console.log(Number.parseInt('30px',10));
// console.log(Number.parseFloat('2.5rem'));

// console.log(Number.parseInt('e23',10));

//check if value is NaN

// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(20));
// console.log(Number.isNaN(+'20x'));
// console.log(Number.isNaN(23/0));

//check if value is number
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(20));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(23/0));

// console.log(Number.isInteger(20));
// console.log(Number.isInteger(20.0));
// console.log(Number.isInteger('20.0'));

// console.log(Math.max(5,18,11,2));
// console.log(Math.max(5,'18',11,2));
// console.log(Math.max(5,'18px',11,2));

// console.log(Math.min(2,3,4,5,35,67,));

// const randomInt =(min,max)=>
//   Math.trunc(Math.random()*(max-min)+1)+min;

// console.log(randomInt(40,50));
// //Rounding integers

// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// console.log(Math.trunc(23.3));

// console.log(Math.trunc(-23.3));
// console.log(Math.trunc(-23.9));

// console.log((2.8).toFixed(0));
// console.log((45.95878945).toFixed(3));

// labelBalance.addEventListener('click',function(){
//   [...document.querySelectorAll('.movements__row')].forEach(function(row,i){
//     if(i%2 === 0){
//       row.style.backgroundColor = 'orangered';
//     }
//     if(i%3 === 0){
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

//NUMERIC SEPERATOR
//234,345,000,000
// const diameter = 234_345_000_000;
//console.log(diameter);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

//const PI = 3._1415;//it will throw error
// const PI = 3.14_15;
// console.log(PI);

// console.log(Number('230_000'));
// console.log(230_011);

// const now = new Date();
// console.log(now);

// console.log(new Date('Aug 022024 23:23:45'));
//console.log(new Date('December 24, 2023'));
//console.log(new Date(accoutn1.movementsDates[0]));

//month in javaScript is 0-based indexing
// console.log(new Date(2037,10, 19 ,15 ,45,6));

// console.log(new Date(0));
//console.log(new Date(3*24*60*60*1000));//3 days after the first unix date

//working with dates
// const future = new Date(2037,10, 19 ,15 ,45,6);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());//day of the week
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// console.log(future.toISOString());
// //Timesptamp is the number of milisecond that has been passed till the jan 1 , 1970
// console.log(future.getTime());

// console.log(new Date(2142238506000));

// console.log(Date.now());//gives the current time stamp
// future.setFullYear(2050);
//console.log(future);

// const future = new Date(2037, 10, 19, 15, 45, 6);
// console.log(Number(future));
//console.log(+future);

// const calcDaysPassed = (date1, date2)=>Math.abs(date2-date1)/(1000*60*60*24);

// const days1 = calcDaysPassed(new Date(2037,5,25),new Date(2037,5,15));
//console.log(days1);


const num = 38847857.23;

const options = {
  style:'unit',
  unit: 'mile-per-second',//any unit celcius, etc
  currency:'EUR',//currency is not determined by the loacale
  //useGrouping:false,//it will remove tehe seperator 

}
// console.log('US:  ', new Intl.NumberFormat('en-US',options).format(num));
// console.log('INDIA:  ', new Intl.NumberFormat('en-IN',options).format(num));
// console.log('GERMANY:  ', new Intl.NumberFormat('de-DE',options).format(num));
// console.log('SYRIA:  ', new Intl.NumberFormat('ar-SY',options).format(num));

// console.log(navigator.language,new Intl.NumberFormat(navigator.language,options).format(num));

//setTimeout
const ingredients = ['olives','spinch'];
const pizzaTimer = setTimeout((ing1,ing2)=>console.log(`Here is your pizza with ${ing1} and ${ing2}`),3000,...ingredients);

console.log('waiting.....');

if(ingredients.includes('spinch'))clearTimeout(pizzaTimer);

//setInterval
/*setInterval(function(){
  const now = new Date();
  console.log(now);
},1000);*/