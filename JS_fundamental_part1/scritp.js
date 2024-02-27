// Linking a JavaScript File
let js = "amazing";
if(js==="amazing"){
    console.log("I will JavaScript");
}

//it is used to do single line comment
console.log(40 + 8 + 23 - 10);
console.log("Raja");

//firstName,first_name->types of writing multi-word variable name

//variable name can only contain letters, numbers, underscores and $
//don't use reserved JS keyword for naming of variable


//let firstName = "raja kumar";
//console.log(firstName);

//for real constant ,write it in uppercase
let PI = 3.14;

true;
console.log(true);//boolean
console.log('true')//string

let jsForFun = true;
console.log(typeof jsForFun);//boolean
console.log(typeof true);//boolean

jsForFun = "hi";
console.log(typeof jsForFun);//string
console.log(typeof 'ture');//string
console.log(typeof 23);//number
console.log(typeof "23");//string

let child;
console.log(child);//undefined
console.log( typeof child);//undefined

//this might be a bug
console.log(typeof null);//object

//let, const and var

let age = 20;
age = 21;

const birthDay = 2000;
//birthDay=2003;

//const job;

// var job = 'student';
// job='teacher';

//even without declaring the variable, just by assigning the value, it works, but it is not good idea

// lastName = 'kumar';
// console.log(lastName);

// var vs let in JavaScript
/*

*/


//OPERATOR IN JAVASCRIPT

//Arithmetic opertor
const now = 2023;
const agePratham = now - 2002;
const ageRaja = 2023 - 2003;
console.log(ageRaja);
console.log(agePratham);

console.log(ageRaja/2,agePratham*3);
console.log(2*3); //2 multiplied by 3
console.log(2**3); //2 to the power 3

const firstName = 'Raja';
const lastName = 'Kumar';

//concatenate string using + operator
console.log(firstName + ' ' + lastName);

//ASSIGNMENT OPERATOR
let x = 10 + 5;
console.log(x);
x+=10; //x = x + 10;
x*=4; //x = x * 4;
x++;
x--;
x--;
console.log(x);


//COMPARISON OPERATOR->it returns boolean valur , either true(1) or false(0)

console.log(ageRaja > agePratham);
console.log(ageRaja >= 18);

const isFullAge = ageRaja > 18;
console.log(typeof isFullAge);//boolean

//PRECEDENCE OF DIFFERENT OPERATOR


console.log(now - 2000 > now - 1990);
console.log(25-10-5);

let a,b;
a = b = 25-10-5;//10
console.log(a,b);//a=b=10;

const average = (ageRaja+agePratham)/2;
console.log(ageRaja,agePratham,average);


//STRING IN JS
const first_name = 'John';
const job = 'teacher';
const birthyear = 1990;
const year = 2023;

const john = "I'm " + first_name + ', a ' + (year-birthyear) + ' years old ' + job + '!';
console.log(john);

//TEMPLETE LITERALS,using backticks
const johnNew = `I'm ${first_name}, a ${year-birthyear} years old ${job}!`
console.log(johnNew);

console.log(`just a regular string using backticks`)

console.log(`string with \nmultiple \nlines`);

console.log(`string with \n\
multiple \n\
lines`);

console.log(`string
multiple
lines`);
  

// Taking Decisions: if / else Statements
/*const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

//TYPE CONVERSION AND COERCION

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

//5 falcy values: 0,'',undefined,null,NaN

console.log(Boolean(0))//false
console.log(Boolean(undefined))//false
console.log(Boolean(null))//fasle
console.log(Boolean(NaN))//false
console.log(Boolean(''))//false
console.log(Boolean({}))//true
console.log(Boolean('raja'))//true

//const money = 100;
const money = 0;//money is number
if(money){//type coercion will happen, boolean value will be used which is 'false' for 0
    console.log("Don't spend it at all");
}else{
    console.log("you should get a job!");
}

//let height = 0; //it will also execute else statement. This is a kind of bug
let height;
if(height){
    console.log("height is defined");
}else{
    console.log("height is undefined");
}

//COMPARISON OPERATOR
/*
1) == equal to (checks only value)
2)=== equal value and type
3)!= not equal to
4)!== not equal value or not equeal type
5)>,<,>=,<=,
6)?: ternary operator
*/


// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }


/*const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

// THE SWITCH STATEMENT
//this piece fo code can also be written by using if else condition
const day = 'wednesday';

switch(day){
    case 'monday':
        console.log("it is moday");
        console.log("dont want to go to college");
        break;

    case 'tuesday':
        console.log('it is tuesday');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('it is thursday');
        break;
        default:
            console.log('it is default');
    
}

//Statements and Expression

3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);


// The Conditional (Ternary) Operator

/*const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/
console.log("hi checking the server");