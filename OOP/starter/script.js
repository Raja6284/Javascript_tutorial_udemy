'use strict';

//arrow function will not work as constructor
const Person = function(firstName,birthYear){
        //Instances properties
        this.firstName = firstName;
        this.birthYear = birthYear;

        //never do this
        // this.calcAge = function(){
        //     console.log(2070 - this.birthYear);
        // };

};

// const raja = new Person('Raja',2003);
// console.log(raja);
// console.log(raja instanceof Person);
//1.New {} is created
//2.function is called, this={}
//3.{} linked to prototype
//4.function automatically return {}

//Prototypes

// console.log(Person.prototype);
Person.prototype.calcAge = function(){
    console.log(2070 - this.birthYear);
};

// raja.calcAge();
// console.log(raja.__proto__);
// console.log(raja.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(raja));
// console.log(Person.prototype.isPrototypeOf(Person));

// //.prototypeOfLinkedObjects

// Person.prototype.species = 'Home Saiens';
// console.log(raja.species);

// console.log(raja.hasOwnProperty('firstName'));
// console.log(raja.hasOwnProperty('species'));

// console.log(raja.__proto__);
// console.log(raja.__proto__.__proto__);
// console.log(raja.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);
// const arr = [3,4,5,2,3,5,6,4,2];

// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// //adding a new method to the array constructor
// Array.prototype.unique = function(){
//     return [...new Set(this)];
// }

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x+1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
//my own solution
// const Car = function(carName,speed){
//     this.name = carName;
//     this.speed = speed;
// }


// Car.prototype.accelerator=function(speed){
//     this.accSpeed = speed + 10;
//     console.log('the new speed is :',this.accSpeed);
// }
// Car.prototype.brake=function(speed){
//     this.brakSpeed = speed - 5;
//     console.log('the new speed is :',this.brakSpeed)
// }

// const bmw = new Car('BMW',120);
// console.log(bmw);

// bmw.accelerator(120);
// bmw.brake(120);

//sir ka soution
const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW',120);
const mercedes= new Car('Mercedes',85);

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();