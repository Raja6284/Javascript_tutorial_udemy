'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },


};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);

console.log(arr);

let [main, ,secondary] = restaurant.categories;

console.log(main,secondary);

//switch the value of main and secondary

// const temp = main;
// main = secondary;//Uncaught TypeError: Assingment to constant variable, int main and secondary were declared as const variable
// secondary = temp;

// console.log('after swithching the value:',main,secondary);

//switching values of arrays without using the third variable, used destracturing
[main,secondary] =  [secondary,main];
console.log('after swithching the value:',main,secondary);


console.log(restaurant.order(2,0));
console.log(restaurant.order(2,0)[0],restaurant.order(2,0)[1]);

const[starter,mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

const nested = [1,3,[4,5]];
const [i, ,j] = nested;
console.log(i,j);

// const [i,,[j,k]] = nested;
// console.log(i,j,k);


//Default values
// const [p,q,r] = [8,9];
// console.log(p,q,r);

const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);

