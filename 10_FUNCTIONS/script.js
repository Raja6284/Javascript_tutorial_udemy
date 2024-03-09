'use strict';
// const bookings = [];

// const createBooking = function(flightNum,numPassenger=1,price=0){


//     const booking = {
//         flightNum,
//         numPassenger,
//         price,
//     };

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LHI235');
// createBooking('Boyeing',200,1500);
// createBooking('Indigo',50)

// const flight = 'LIH23';
// const raja = {
//     name:'Raja kumar',
//     passport:902387595
// }

// const checkIn = function(flightNum,passenger){
//     flightNum = 'LDH99';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 348993598305){
//         alert('checked in');
//     }else{
//         console.log('Wrong Passport!');
//     }
// }

// checkIn(flight,raja);
// console.log(flight);
// console.log(raja);

// const newPassport = function(person){
//     person.passport =Math.trunc(Math.random()*100000000);
// };

// console.log(newPassport(raja));

// const oneWord = function(str){
//     return str.replace(/ /g,'').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const[first,...others] = str.split(' ');

//     return [first.toUpperCase(),...others].join(' ');
// }

// //Higher-Order function

// const transformer = function(str,fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string:${fn(str)}`);
//     console.log(`Trnsformed by:${fn.name}`);
// }

// transformer('Javascript is the best language',upperFirstWord);
// transformer('Javascript is the best language',oneWord);


// //JS always uses callback function
const youClicked = function(){
    console.log('YOU clicked');
}

document.body.addEventListener('click',youClicked);

//READ ABOUT FUNCTION RETURNING FUNCTION

//THE CALL AND APPLY METHODS

//THE BIND METHOD

//partial application
//  const addTax = (rate,value)=>value+value*rate;

//  console.log(addTax(0.1,200));

//  //IIEF->if you need to execute a function only once

//  (function(){
//     console.log('This will never run again');
//  })();

//  (()=>console.log('This will also never run again'))();

//  {
//     const isPrivate = 23;
//     var notPrivate = 34;
//  }

//  //console.log(isPrivate);
//  console.log(notPrivate);


//CLOSURES

const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
}; 

const booker = secureBooking();
booker();
booker();
booker();