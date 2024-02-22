 'use strict';

let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 500;
//const if = 70;

//NOT ALLOWED IN STRICT MODE
/*1.Using a variable, without declaring it, is not allowed:
2.Using an object, without declaring it, is not allowed:
3.Deleting a variable (or object) is not allowed.
4.Deleting a function is not allowed.
5.Duplicating a parameter name is not allowed:
etc
*/

//FUNCTIONS

function logger(){
    console.log('My name is Raja');
}

//calling /running /invoking function
logger();
logger();
logger();

//creating the function
function fruitProcessor(apple,banana){
    console.log(apple,banana);
    const juice =`Juice with ${apple} apples and ${banana} bananas`;
    return juice;
}

//calling the function
const juice1 = fruitProcessor(5,0);
console.log(juice1);
console.log(fruitProcessor(4,5));

const num = Number('44');

//function declaration

//calling the function before declaration
const age1 = calcAge1(1990);

function calcAge1(birthYear){
    return 2023 - birthYear;
}


//function expression
const calcAge2 = function(birthYear){
    return 2023 - birthYear;
}
const age2 = calcAge2(1990);

console.log(age1,age2);

//function declaration can be called before your define it, but this case is not true for function expression(hoisting)

//ARROW FUNCTION

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Raja')); console.log(yearsUntilRetirement(1980, 'Pratham'));

//FUNCTION CALLING OTHER FUNCTION

function marks_percent(x){
    return x*10;
}

function result(cgpa){
const marks = marks_percent(cgpa);
    console.log(`This semester cgpa is ${cgpa}`);
    return `Your marks in percentage is ${marks}%`;
}

console.log(result(8.5));

