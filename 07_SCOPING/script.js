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

console.log(this);//this will show window object

const calAge = function(birthYear){
    console.log(2070-birthYear);
    console.log(this);

}
const calcAgeArrow= birthYear=>{
    console.log(2070-birthYear);
    console.log(this);//this will show window object
}
calAge(2003);
calcAgeArrow(2005);


const raja = {
    year:2003,
    calAge: function(){
        console.log(this);//this will not show the function actually it will show the 'raja' object
        console.log(2075-this.year);
    },

}

raja.calAge(2002);

const matilda = {
    year:2022,
}

matilda.calAge = raja.calAge;

const f = raja.calAge;
matilda.calAge();
//this keyword always point to the object which is calling the method
//f();


