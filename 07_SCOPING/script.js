'use strict';

// function calAge(birthYear){
//     const age = 2070 - birthYear;
//     console.log(firstName);
   
//     function printage(){
//         const output = `your age is ${age} , born in ${birthYear}`;
//         console.log(output);
    
// if(birthYear>=2000 && birthYear <= 2005){
//     var millenial = true;
//     const firstName = "pratham";

//     //output = 'New outpt';
//     const str = `you are a milleneal ${firstName}`;
//     console.log(str);

//     function add(a,b){
//         return a+b;
//     }
// }

//add(2+3);
//console.log(str);
// console.log(millenial);
// }
//     printage();
//     return age;
// }

// const firstName = 'Raja';
// const lastName = 'Kumar';
// console.log(age);
//calAge(2003);

//The this keyword practice

// console.log(this);//this will show window object

// const calAge = function(birthYear){
//     console.log(2070-birthYear);
//     console.log(this);

// }
// const calcAgeArrow= birthYear=>{
//     console.log(2070-birthYear);
//     console.log(this);//this will show window object
// }
// calAge(2003);
// calcAgeArrow(2005);


// const raja = {
//     year:2003,
//     calAge: function(){
//         console.log(this);//this will not show the function actually it will show the 'raja' object
//         console.log(2075-this.year);
//     },

// }

// raja.calAge(2002);

// const matilda = {
//     year:2022,
// }

// matilda.calAge = raja.calAge;

// const f = raja.calAge;
// matilda.calAge();
//this keyword always point to the object which is calling the method
//f();

// var firstName  = 'Matilda';
// const raja = {
//     year:2003,
//     firstName:'king',
//     calAge: function(){
//         console.log(this);//this will not show the function actually it will show the 'raja' object
//         console.log(2075-this.year);

//         const self = this;
//         const isMillenial = function(){
//             console.log(self);
//             console.log(this.year >= 2000 && this.year <= 2005);
//         }
//         isMillenial();
//     },

//    greet: ()=>{
//     console.log(this);
//     console.log(`hey ${this.firstName}`)},
// };

// raja.greet();//it will print "hey undefined", because an arrow function does not get its `this` keyword

// console.log(this.firstName);

// let age = 30;
// let oldage = age;
// age = 56;
// console.log(age);
// console.log(oldage);

// const me = {
//     name : 'Raja',
//     age : 20,
// };

// const friend = me;
// friend.age = 30;
// console.log('friends:',friend);
// console.log('me:' , me);

let lastName = 'williams';
let oldLastName = lastName;

lastName = 'davis';
console.log(lastName,oldLastName);

const jessica = {

    firstName: 'Jessica',
    lastName: 'williams',
    age :27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'davis';

console.log('before married:', jessica);
console.log('after married:',marriedJessica);

//marriedJessica = {};

const jessica2 ={
    firstName:'Jessica',
    lastName:'Williams',
    age:27,
    family:['alice','bob'],
};

const jessicaCopy = Object.assign({},jessica2);

jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('mary');
jessicaCopy.family.push('john');

console.log('before married:', jessica2);
console.log('after married:',jessicaCopy);
