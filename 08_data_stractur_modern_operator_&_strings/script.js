// 'use strict';

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     order: function(starterIndex,mainIndex){
//         return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
//     },


// };

// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);

// console.log(arr);

// let [main, ,secondary] = restaurant.categories;

// console.log(main,secondary);

// //switch the value of main and secondary

// // const temp = main;
// // main = secondary;//Uncaught TypeError: Assingment to constant variable, int main and secondary were declared as const variable
// // secondary = temp;

// // console.log('after swithching the value:',main,secondary);

// //switching values of arrays without using the third variable, used destracturing
// [main,secondary] =  [secondary,main];
// console.log('after swithching the value:',main,secondary);


// console.log(restaurant.order(2,0));
// console.log(restaurant.order(2,0)[0],restaurant.order(2,0)[1]);

// const[starter,mainCourse] = restaurant.order(2,0);
// console.log(starter,mainCourse);

// const nested = [1,3,[4,5]];
// const [i, ,j] = nested;
// console.log(i,j);

// // const [i,,[j,k]] = nested;
// // console.log(i,j,k);


// //Default values
// // const [p,q,r] = [8,9];
// // console.log(p,q,r);

// const [p=1,q=1,r=1] = [8,9];
// console.log(p,q,r);


//Destracturing Objects:

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     openingHours:{
//         thu:{
//             open:12,
//             close:22,
//         },
//         fri:{
//             open:11,
//             close:21,
//         },
//         sat:{
//             open:0,
//             close:24,
//         }
//     },

//     order: function(starterIndex,mainIndex){
//         return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
//     },

//     orderDelivery:function({starterIndex=1,mainIndex=1,time='20:00',address}){
//         console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//     },

// };

// restaurant.orderDelivery({
//     time:'20:30',
//     address:'hossainpr,koldata,107',
//     mainIndex:2,
//     starterIndex:3,
// }); 



// const {name,openingHours,categories} = restaurant;

// console.log(name,openingHours,categories);

// const{
//     name:restaurantName,
//     openingHours:hours,
//     categories:tags,
// } = restaurant;

// console.log(restaurantName,hours,tags);

// //setting the default values 
// const {
//     menu = [], starterMenu : starters = [],
// } = restaurant;

// console.log(menu,starters);

// //Mutating variables

// let a = 111;
// let b = 999;
// const obj = {a:23,b:4,c:25};

// //{a,b} = obj;  this will show error

// ({a,b} = obj);
// console.log(a,b);

// //Nested Objects
// const{fri:{open:o,close:c}} = openingHours;
// //console.log(fri);
// console.log(open,close);
// console.log(o,c);



const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:21,
        },
        sat:{
            open:0,
            close:24,
        }
    },

    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },

    orderDelivery:function({starterIndex=1,mainIndex=1,time='20:00',address}){
        console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta:function(ing1,ing2,ing3){
        console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
    },

    orderPizza:function(mainIngredient,...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    }

};

//DESTRUCTURING
//SPREAD, because on right side of =
const arr = [1,2,...[4 ,5,6]];

//REST, because on left side of =
const[a,b,...others] = [1,2,3,4,5];
console.log(a,b,others);

const[one,,three,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];

console.log(one,three,otherFood);

//REST in objects

const{sat,...weekdays} = restaurant.openingHours;
console.log(weekdays);

//FUNCTIONS
const add = function(...numbers){
    console.log(numbers);
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    console.log(sum);

}
add(2,3);
add(5,3,7,2);
add(3,4,5,6,7,2,9,6);

 const x = [4,5,6,7,8];
 add(...x);

restaurant.orderPizza('mushroom','onion','potato','chili');
restaurant.orderPizza('only mushroom');
//SPREAD OPERATOR(...)
// const arr = [7,8,9];
// const badArr = [0,1,arr[0],arr[1],arr[2]];

// console.log(badArr);

// let newArr = [1,2,arr];
// console.log(newArr);

// newArr = [1,2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu , 'kadhi'];

// console.log(newMenu);
// console.log(...newMenu);

// //TWO MOST INPORTANT USES OF SPREAD OPERATOR

// //creating a shallow copy
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

// console.log(menu);
// console.log(...menu);

// //Iterables arrays,strings,sets, maps but NOT objects

// const str = 'raja';
// const letters = [...str,' ','k.'];
// console.log(letters);
// console.log(...letters);
// console.log(...str);
// //console.log(`${str} kumar`);

// const ingredients = 
// [
//     // prompt("Let's make pasta! ingredient 1?"),
//     // prompt("Let's make pasta! ingredient 2?"),
//     // prompt("Let's make pasta! ingredient 3?")
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = {foundIn:1991,...restaurant,founder:'raja',};

// console.log('new restaurant is :',newRestaurant);
// //console.log(...newRestaurant);

