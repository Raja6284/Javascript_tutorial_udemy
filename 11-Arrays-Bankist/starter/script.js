'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  //.textContent = 0;
//innerHTML is same as textContent

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};



const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc,cur)=>acc+cur,0);
 
  labelBalance.textContent = `${acc.balance} EUR`;
}


const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov=>mov>0).reduce((acc,cur)=>acc+cur,0);  
  
  labelSumIn.textContent = `${incomes}E`;

  const out = acc.movements.filter(mov=>mov<0).reduce((acc,cur)=>acc+cur,0);
  labelSumOut.textContent = `${Math.abs(out)}E`;
  
  const interest = movements.filter(mov=>mov>0).map(deposit=>(deposit*acc.interest)/100).filter((int,i,arr)=>{
    //console.log(int,i,arr);
    return int >=1;
  }).reduce((acc,cur)=>acc+cur,0);
  labelSumInterest.textContent = `${interest}E`;
}


const createUsernames = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(name=>name[0]).join('');
  });
};

createUsernames(accounts);
//console.log(accounts);

//console.log(containerMovements.innerHTML)

const updateUI = function(acc){
  //display movements
  displayMovements(acc.movements);
  //display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
}

//Event handler
let currentAccount ;
//Event listener
btnLogin.addEventListener('click',function(e){
  //prevent from submitting
  e.preventDefault();
  
  currentAccount = accounts.find(acc=>acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //display ui and message

    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
    //updated UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
//clearing the input field  
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

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click',function(e){
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc=>acc.username===currentAccount.username);
    console.log(index);

    //delete account
    accounts.splice(index,1);

    //hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  //console.log('delete');
})

let sorted = false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted = !sorted;
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//let arr = ['a', 'b', 'c', 'd', 'e'];

//console.log(arr.slice(2)); //from 2 to last index
//console.log(arr.slice(2, 4)); //from 2(including) to 4th(excluding) index

// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));

//console.log(arr.slice());//creating a shallow copy, the same thing can be done by the spread operator

//SPLICE
//console.log(arr.splice(2));//do same as slice method but it mutate the original array

//console.log(arr);
//arr.splice(-1);
//console.log(arr);


// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j','i','h','g','f'];

//console.log(arr2.reverse());//it also mutate the original array
//console.log(arr2);


//CONCAT
//const letters = arr.concat(arr2);
// console.log(letters);

// console.log([...arr,...arr2]);

// console.log(letters.join('-'));


//arr.at(index) method to access the elements of the array
//const arr3 = [23,45,67];
// console.log(arr3[0]);
// console.log(arr3.at(0));

// console.log(arr3[arr3.length-1]);
// console.log(arr3.slice(-1));//it will be an array, but we need to print the last element
//console.log(arr3.slice(-1)[0]);

// console.log(arr3.at(-1));
// console.log('raja_k'.at(-1))

const moves = [200,340,-399,-454,222,444,-130];

for(const move of moves){
  if(move>0){
    //console.log(`you deposited ${move}`);
  }else{
    //console.log(`you withdrew ${Math.abs(move)}`);
  }
}
//console.log('forEach ____________');//call a function once for each array element

moves.forEach(function(move){
  if(move>0){
    //console.log(`you deposited ${move}`);
  }else{
    //console.log(`you withdrew ${Math.abs(move)}`);
  }
});

//break and continue statement does not work in forEach loop

//forEach with map and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function(value,key,map){
  //console.log(`${key}:${value}`)
});

const unique = new Set(['raja','raja','rja','raj','raj']);

//console.log(unique);

unique.forEach(function(value,_,map){
  //console.log(`${key}:${value}`);//for set there is no meaning of key
  //console.log(`${value}:${value}`);
})

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const Julias_data = [3, 5, 2, 12, 7];
const Kate_data = [4, 1, 15, 8, 3];

const checkDogs = function(dogsJulia,dogsKate){
  const shallowJulia = dogsJulia.slice();
  shallowJulia.splice(0,1);
  shallowJulia.splice(-2);

  //const dogs = shallowJulia.concat(dogsKate);

  dogs.forEach(function(dog,i){
    if(dog>=3){
      //console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
    }else{
      //console.log(`Dog number ${i+1} is still a puppy`);
    }
  })
  //console.log(shallowJulia);
};

//checkDogs(Julias_data,Kate_data);
//checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4]);


//MAP METHOD IN JAVASCRIPT
const dollar = [2,3,5,6,8,9];
const conversion = 80;

const converted = dollar.map(function(money){
  return money*conversion;
  //return 25;
});

//console.log(converted);

//using for of loop
const rupee = [];
for(const money of dollar)rupee.push(money*conversion);

//console.log(rupee);


const depositsFor = [];

for(const mov of movements){
  if(mov>0)
  depositsFor.push(mov);
}


//console.log(depositsFor);
//console.log('FILTER_______');

const withdrawl = movements.filter(function(mov){
  return mov<0;
})

//console.log(withdrawl);

//console.log('REDUCE______');
//accumlator is like snowball
const balance = movements.reduce(function(acc,cur,i,arr){
  //
  //console.log(`iteratin : ${i}-> ${acc}`);
  return acc+cur;
},0);//we set the initial value of accumulator to 0, we can set anything

//console.log(balance);

//maximum value of movements array using reduce method

const max = movements.reduce(function(acc,cur){
  if(acc>cur)
    return acc;
  else
    return cur;
},movements[0]);

//console.log(max);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// let humanAge = [];
// const calcAverageHumanAge = function(dogAge){
//     humanAge = dogAge.map(function(val){
//         if(val<=2)
//           return 2*val;
//         else 
//           return 16+2*val;
//     });
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(humanAge);

// const newDog = humanAge.filter(function(val){
//   return val>=18;
// })

// console.log(newDog);

// const average = newDog.reduce(function(acc,cur){
//   return acc+cur;
// },0);
// console.log(average/newDog.length);


//PIPELINE
const eurToUsd = 1.1;
//console.log(movements);

const totalDepositUSD = movements.filter(mov=>mov>0).map(mov=>mov*eurToUsd).reduce((acc,mov)=>acc+mov,0);

//console.log(totalDepositUSD);

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const calcAverageHumanAge = function(dogAge){
//     const average = dogAge.map(val=>val<=2?2*val:16+2*val).filter(mov=>mov>=18).reduce((acc,cur,i,arr)=>acc+cur/arr.length,0);
//     console.log(average);
// }

// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]
//   );


const firstWithdrawal = movements.find(mov=>mov<0);

//console.log(movements);
//console.log(firstWithdrawal);

//console.log(accounts);

const account = accounts.find(acc=>acc.owner === 'Jessica Davis');
//console.log(account);


//console.log(movements);
//EQUALITY
//console.log(movements.includes(-130));

//SOME: CONDITION
//console.log(movements.some(mov=>mov===-130));

const anyDeposits = movements.some(mov=>mov>0);
//console.log(anyDeposits);

//EVERY
//console.log(movements.every(mov=>mov>0));

console.log(account4.movements.every(mov=>mov>0));


//Separate callback
//const deposit = mov =>mov>0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));


const arr = [[1,2,3], [4,5,6],[7,8,9]];
//console.log(arr.flat());

const arrDeep = [[[1,2],3],[4,[5,6,7]],9,3];
//console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc=>acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc,mov)=>acc+mov,0);
// console.log(overalBalance);


//flat
const overalBalance = accounts.map(acc=>acc.movements).flat().reduce((acc,mov)=>acc+mov,0);
//console.log(overalBalance);


//flatmap
const overalBalance2 = accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+mov,0);
//console.log(overalBalance2);

const owners = ['jonas','zach','adam','martha'];
console.log(owners.sort());
console.log(owners);
 
//Numbers
console.log(movements);

//return < 0, A,B(keep oreder)
//return > 0, B,A(switch order)

//Ascending
// movements.sort((a,b)=>{
//   if(a>b) return 1;
//   if(a<b) return -1;
// });
movements.sort((a,b)=>a-b);
console.log(movements);

//Descending 
// movements.sort((a,b)=>{
//   if(a>b) return -1;
//   if(a<b) return 1;
// });
movements.sort((a,b)=>b-a);
console.log(movements);

console.log([1,2,3,4,5,6,7]);
console.log(new Array(1,2,3,4,5,6,7,8,9));

const x = new Array(7);
console.log(x);
x.fill(1);
console.log(x);

x.fill(50,3,5);
console.log(x);

//Array.from
const y = Array.from({length:7},()=>4);
console.log(y);

const z = Array.from({length:7},(cur,i)=>i+1);
console.log(z);

const z1 = Array.from({length:100},()=>Math.floor(Math.random() * 6)+1);
console.log(z1);


labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});