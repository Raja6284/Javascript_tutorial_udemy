'use strict';

//arrow function will not work as constructor
// const Person = function(firstName,birthYear){
//         //Instances properties
//         this.firstName = firstName;
//         this.birthYear = birthYear;

//         //never do this
//         // this.calcAge = function(){
//         //     console.log(2070 - this.birthYear);
//         // };

//};

// const raja = new Person('Raja',2003);
// console.log(raja);
// console.log(raja instanceof Person);
//1.New {} is created
//2.function is called, this={}
//3.{} linked to prototype
//4.function automatically return {}

//Prototypes

// console.log(Person.prototype);
// Person.prototype.calcAge = function(){
//     console.log(2070 - this.birthYear);
// };

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

// //sir ka soution
// const Car = function(make,speed){
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }

// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const bmw = new Car('BMW',120);
// const mercedes= new Car('Mercedes',85);

// // bmw.accelerate();
// // bmw.accelerate();
// // bmw.accelerate();
// // bmw.brake();
// // bmw.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.accelerate();

//class expression
//const PersonCl = class{}

//class declaration
class PersonCl {
    constructor(fullName,birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //method will be added to .prototype property
    calcAge(){
        console.log(2070 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age(){
        return 2070 - this.birthYear;
    }

    //set a property that already exists
    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name` )
    }

        get fullName(){
            return this._fullName;
        }

        //static method
        static hey(){
            console.log('Hey there');
            console.log(this);
        }
    }


//Inheritance bteween "Classes": ES6 Classes

class StudentCl extends PersonCl {
    constructor(fullName,birthYear,course){
        //Always needs to happen first!
        super(fullName,birthYear);
        this.course = course;
    }

    introduce(){
        console.log(`My nae is ${this.fullName} and  study ${this.course}`);
    }

    //overwriting the method
    calcAge(){
        console.log(`I'm ${2080 - this.birthYear} years old, but as a student feel more like ${2080 - this.birthYear + 10}`);
    }
}

//const martha = new StudentCl('Martha Jones',2012);
// const martha = new StudentCl('Martha Jones',2012,'Computer Science');
// martha.introduce();
// martha.calcAge();

////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
  
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
  const steven = Object.create(PersonProto);
  
  const StudentProto = Object.create(PersonProto);
  StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
  };
  
  StudentProto.introduce = function () {
    // BUG in video:
    // console.log(`My name is ${this.fullName} and I study ${this.course}`);
    
    // FIX:
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };
  
  const jay = Object.create(StudentProto);
  jay.init('Jay', 2010, 'Computer Science');
  jay.introduce();
  jay.calcAge();
  

// const jessica  = new PersonCl('Jessica Davis',2003);
// console.log(jessica);
// console.log(jessica.age);
// jessica.calcAge();

//console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// }
//jessica.greet();

//1.Classes are Not hoisted
//2.Classes are first-class citizens
//3.Classes are executed in strict mode

// const account = {
//     owner: 'Jonas',
//     movements: [233,44,55,667],


//     get latest(){
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov){
//         this.movements.push(mov);
//     },
// };

// console.log(account.latest);
// account.latest = 35;
// console.log(account.movements);
//PersonCl.hey();

// const PersonProto = {
//     calcAge(){
//         console.log(2070 - this.birthYear);
//     },

//     init(firstName,birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
//};

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.naem = 'Steven';
// steven.birthYear = 2000;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);

// sarah.init('Sarah',2323);
// sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Carcl  {
    constructor(make,speed){
    this.make = make;
    this.speed = speed;
}

accelerate(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

brake(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS(){
        return this.speed/16;
    }

    set speedUS(speed){
        this.speed = speed*1.6;
    }
}

// const ford = new Carcl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();

// ford.speedUS = 50;
// console.log(ford);


//////////////////////////////////////
//Inheritance Between "classes":Constructor Fuctions

const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

};

Person.prototype.calcAge = function(){
    console.log(2080 - this.birthYear);
};

const Student = function(firstName,birthYear,course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    Person.call(this,firstName,birthYear);
    this.course = course;
}

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and study ${this.course}`);
}
const mike = new Student('Mike',2020, 'Computer Science');

//mike.introduce();

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/


class Account{
    constructor(owner,currency,pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    //public interface
    deposit(val){
        this.movements.push(val);
    }

    withdraw(val){
        this.deposit(-val);
    }
}

const acc1 = new Account ('Jonas','EUR', 1111);
console.log(acc1);

// acc1.movements.push(2344);
// acc1.movements.push(-353);
 acc1.deposit(34984);
 acc1.withdraw(3344);
 console.log(acc1);
console.log(acc1.pin);
