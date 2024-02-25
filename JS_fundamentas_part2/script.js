//  'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriverLicense) console.log('I can drive');

// // const interface = 'Audio';
// // const private = 500;
// //const if = 70;

// //NOT ALLOWED IN STRICT MODE
// /*1.Using a variable, without declaring it, is not allowed:
// 2.Using an object, without declaring it, is not allowed:
// 3.Deleting a variable (or object) is not allowed.
// 4.Deleting a function is not allowed.
// 5.Duplicating a parameter name is not allowed:
// etc
// */

// //FUNCTIONS

// function logger(){
//     console.log('My name is Raja');
// }

// //calling /running /invoking function
// logger();
// logger();
// logger();

// //creating the function
// function fruitProcessor(apple,banana){
//     console.log(apple,banana);
//     const juice =`Juice with ${apple} apples and ${banana} bananas`;
//     return juice;
// }

// //calling the function
// const juice1 = fruitProcessor(5,0);
// console.log(juice1);
// console.log(fruitProcessor(4,5));

// const num = Number('44');

// //function declaration

// //calling the function before declaration
// //const age1 = calcAge1(1990);

// // function calcAge1(birthYear){
// //     return 2023 - birthYear;
// // }


// //function expression
// const calcAge2 = function(birthYear){
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(1990);

// //console.log(age1,age2);

// //function declaration can be called before your define it, but this case is not true for function expression(hoisting)

// //ARROW FUNCTION

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Raja')); console.log(yearsUntilRetirement(1980, 'Pratham'));

// //FUNCTION CALLING OTHER FUNCTION

// function marks_percent(x){
//     return x*10;
// }

// function result(cgpa){
// const marks = marks_percent(cgpa);
//     console.log(`This semester cgpa is ${cgpa}`);
//     return `Your marks in percentage is ${marks}%`;
// }

// console.log(result(8.5));

// const friend1 = 'Pratham';
// const friend2 = 'Sagar';
// const friend3 = 'Satyanshu';

// const friends = ['pratham','sagar','satyansu'];

// console.log(friends);

// const years = new Array(1900,1901,1902,1903);

// //array is 0 based
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = 'pramod';
// console.log(friends);
// //friends = ['raja','sagar'];

// const firstName = 'raja';

// const raja = [firstName,'kumar',1900-2000,friends];

// console.log(raja);
// console.log(raja.length);

// function calcAge(birthYear){
//     return 2023 - birthYear;
// }

// const year = [1901,1906,1917,1938,1958] ;

// const age1 = calcAge(year[0]);
// const ag2 = calcAge(year[1]);
// const ag3 = calcAge(year[year.length - 1]);

// console.log(age1,ag2,ag3);

// const ages = [calcAge(year[0]),calcAge(year[1]),calcAge(year[year.length - 1])];

// console.log(ages);

//ARRAY METHODS

const friends = ['raja','deepak','pramod'];
console.log(`original array is`, friends);
//add elements at the end of the array
let newLength = friends.push('saurav');
console.log(friends,newLength);

//add element at the beginning of the array
newLength = friends.unshift('suraj');
console.log(friends,newLength);

//pop menthod

//removing last element of the array
let popped = friends.pop();
console.log(friends,popped);

//removing first element of the array
popped = friends.shift();
console.log(friends,popped)

console.log(friends.indexOf('pramod'));
console.log(friends.indexOf('kumar'));

console.log(friends.includes('pramod'));

friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));

if(friends.includes('deepak')){
    console.log('You hav a friend whose name is deepak');
}

//practice code for the exeercise of array

/**

const calcTip = function( bill){
    if(bill > 50 && bill < 300){
        return (0.15*bill);
    }else{
        return (0.20*bill);
    }
}

console.log(calcTip(100));

const bills = new Array(125,555,44);

const tips = new Array(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]));

const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bills,tips,totals);
 */

//aray
// const rajaArray = [
//     'rja',
//     'kumar',
//     2037-1991,
//     ['pramaod','deepak','suraj']
// ];


//OBJECT: it contains key value pair
// const raja = {
//     firstName:'rja',
//     lastName:'kumar',
//     birthyear:2003,
//     age:2037-1991,
//     job:'student',
//     friends:['pramaod','deepak','suraj']
// }

// console.log(raja);

// //DOT Vs BRACKET NTOATION
// console.log(raja.lastName);
// console.log(raja['lastName']);

// const nameKey = 'Name';
// console.log(raja['first'+nameKey]);//thsi method doesnt work wiht dot notation
// console.log(raja['last'+nameKey]);

//const interestedIn= prompt('what do you want to know about Raja? choose betwwen firstName,lastName,age,job and friends:');

//console.log(raja[interestedIn]);//the value of interested in will be replaced by what the user enter in the prompt

// if(raja[interestedIn]){
//     console.log(raja[interestedIn]);
// }else{
//     console.log('wrong request! choose betwwen firstName,lastName,age,job and friends: ');
// }

// raja.location = 'kokata';
// raja['twitter'] = '@raja_berlin';

// console.log(raja);


//try to print this in console:
//rja has 3, and his best freind is called suraj
// console.log(`${raja.firstName} has ${raja.friends.length}, and his best freind is called ${raja.friends[2]}`);

//OBJECT METHODS

const raja = {
    firstName:'rja',
    lastName:'kumar',
    birthyear:2003,
    age:2037-1991,
    job:'student',
    friends:['pramaod','deepak','suraj'],
    hasDriverLicense:true,

    // calcAge:function(birthyear){
    //     return 2024-birthyear;
    // }

    // calcAge:function(){
    //     //console.log(this);
    //     return 2024-this.birthyear;
    // }

    calcAge:function(){
        this.age=2024-this.birthyear;
        return this.age;
    },

    getSummary :function(){
        return `${raja.firstName} is a ${this.calcAge()}-year old student and he has ${this.hasDriverLicense?'a':'no'} driver's license`;
    }


}

// console.log(raja.calcAge(2003));
// console.log(raja['calcAge'](2003));

console.log(raja.age);//46
console.log(raja.calcAge());

console.log(raja.age);
console.log(raja.age);

//challenge 2
//"raja is a 21-year old student, and he has a/no driver's license"

console.log(raja.getSummary());


//ITERATIN:THE FOR LOOP

console.log('lifting weight repetation 1');

//for loop keeps running while condition is true
for(let rep=5; rep<=10; rep++){
    console.log('increasing',rep);
}

const rajaArray = [
    'rja',
    'kumar',
    2037-1991,
    ['pramaod','deepak','suraj'],
    true,
    'true'
];
const types = [];

for(let i = 0; i<rajaArray.length; i++){
    console.log(rajaArray[i],typeof(rajaArray[i]));

    //filling types array
    // types[i] = typeof(rajaArray[i]);

    types.push(typeof(rajaArray[i]));
}

console.log(types);

const years = [2000,2001,2002,2003,2004,2005];

const ages = [];

for(let i = 0; i<years.length;i++){
    ages.push(2075-years[i]);
}

console.log(ages);

//break and continue steatement can also be used in for loop

//traversing the arry in reverse order

for(let i = rajaArray.lnegth-1; i>=0; i--){
    console.log(i,rajaArray[i]);
}

//calling one for loop in another for loop

//  WHILE LOOP

let rep =1;

while(rep<=10){
    //console.log(`while running for ${rep} times`);
    rep++;
}

let dice = Math.trunc(Math.random()*6)+1;


while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;//reassingning the value
    if(dice==6){
        console.log(`loop is about to end..`)
    }
}

const x = 23;