'use strict';

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

const weekDays = ['sum','mon','tue','wed','thu','fri','sat'];
const openingHours={
    [weekDays[4]]:{
        open:12,
        close:22,
    },
    [weekDays[3]]:{
        open:11,
        close:21,
    },
   [weekDays[6]]:{
        open:0,
        close:24,
    }
};


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    //ES6 ENHANCED OBJECT LITERALS
   // Hours,
   //openingHours:openingHours,
    openingHours,
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

const question = new Map([
    ['question','Which is the best programming language?'],
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    [4,'Python'],
    ['correct',3],
    [true,'correct'],
    [false,'try again'],
]);

// console.log(question);
// console.log(Object.entries(openingHours));

// //converting object ot map
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);
// console.log(question.get('question'));
// for(const [key,value] of question){
//     if(typeof key === 'number'){
//         console.log(`Answer : ${key} : ${value}`);
//     }
// }
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct')===answer));

// //convert a map to an array
// console.log(...question);
// //console.log([question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);
//MAP Fundamentals
// const rest = new Map();

// rest.set('name','barbeque');
// rest.set(1,'france');
// console.log(rest.set(2,'paris'));

// console.log()

// rest.set( 'categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open',11)
// .set('close',23)
// .set(true,'we are open')
// .set(false,'we are closed:')

// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 12;
// console.log(rest.get(time>rest.get('open') && time<rest.get('close')));

// rest.set(document.querySelector('h1'),'heading');
// //rest.clear();
// const arr = [1,2];
// rest.set(arr,'test');
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);

// //console.log(rest.get([1,2]));//didnt work
// console.log(rest.get(arr));

//SET
// const orderSet = new Set([
//     'pasta','pizza','pizza','risotto','pasta','pasta'
// ]);

// console.log(orderSet);

// console.log(new Set('raja'));
// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));

// orderSet.add('bread');
// orderSet.add('bread');
// orderSet.delete('risotto');
// //orderSet.clear();
// console.log(orderSet);
// //there is no indicies in set

// for(const order of orderSet)
// console.log(order);
// //example
// const staff = ['waiter','chef','waiter','manager','chef','waiter'];

// const staffUniq = [...new Set(staff)];
// console.log(staffUniq);

// console.log(new Set(['waiter','chef','waiter','manager','chef','waiter']).size);

// console.log(new Set('slfkslfklslfsf').size);
//console.log(restaurant);

//const days = ['sum','mon','tue','wed','thu','fri','sat'];

// for(const day of days){
//     //console.log(day);
//     const open = restaurant.openingHours[day]?.open ?? 'closed';//optional cahining and nullish operator is used is used
//     console.log(`On ${day}, we open at ${open}`);
// }

//METHODS
// console.log(restaurant.order?.(0,1)??'method does not exist');
// console.log(restaurant.orderRisotto?.(0,1)??'method does not exist');

//Arrays
// const users = [{name:'raja',email:'raja@.com',contact:'6284889521'}];

// console.log(users[0]?.name??'user array empty');


// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days:`;

// for(const day of properties){
//     openStr += `${day},`;
// }

// console.log(openStr);

// const values = Object.values(openingHours);
// console.log(values);

// const enteries = Object.entries(openingHours);
//console.log(enteries);

// for(const x of enteries){
//     console.log(x);
// }

// for(const [key,{open,close}] of enteries){
//     console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }
//for loop in javascript 
// const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

// for(const item of menu){
//     console.log(item);
// }

// for(const [i,el] of menu.entries()){
//     console.log(`${i+1}: ${el}`);
// }

//console.log([...menu.entries()]);

// const rest1 = {
//     name:'Capri',
//     numGuests:20,
// };

// const rest2 = {
//     name:'La Pizza',
//     owner:'brack obama',
// };
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1,rest2);

// rest1.numGuests ??=10;
// rest2.numGuests ??=10;

// console.log(rest1,rest2);

// rest1.owner &&= '<noone>';
// rest2.owner &&= '<noone>';

// console.log(rest1,rest2);


//DESTRUCTURING
//SPREAD, because on right side of =
// const arr = [1,2,...[4 ,5,6]];

// //REST, because on left side of =
// const[a,b,...others] = [1,2,3,4,5];
// console.log(a,b,others);

// const[one,,three,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];

// console.log(one,three,otherFood);

// //REST in objects

// const{sat,...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// //FUNCTIONS
// const add = function(...numbers){
//     console.log(numbers);
//     let sum = 0;
//     for(let i = 0; i<numbers.length; i++){
//         sum+=numbers[i];
//     }
//     console.log(sum);

// }
// add(2,3);
// add(5,3,7,2);
// add(3,4,5,6,7,2,9,6);

//  const x = [4,5,6,7,8];
//  add(...x);

// restaurant.orderPizza('mushroom','onion','potato','chili');
// restaurant.orderPizza('only mushroom');
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


//NULLISH COALESCING OPERATOR
// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);

// //Nullish operator: (NULL and undefined) but not(0 and '');
// const guestCorrect = restaurant.numGuests??10;
// console.log(guestCorrect);


// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/


// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
//SOLUTION OF CODING CHALLENGE_2
//1.
    // const goal = game.scored;
    // //console.log(goal);
    // for(const [i,el] of goal.entries()){
    //     console.log(`Goal ${i+1} : ${el}`);
    // }

//2
    // const odds = Object.values(game.odds);
    // let average = 0;
    // for(const odd of Object.values(game.odds)){
    //     average += odd;
    // }
    // average/=odds.length;
    // console.log(average);

//3-->it was difficult
    // for(const [team,odd] of Object.entries(game.odds)){
    //     //console.log(team,odd);
    //     const teamStr = team === 'x'?'draw':`victory ${game[team]}`;
    //     console.log(`Odd of ${teamStr} ${odd}`)
    // }
    
//SOLUTION OF CODING CHALLENGE_1
//   //1.
//   const[players1,players2] = game.players;
//   console.log(players1,players2);

//   //2.
//   const[gk,...fieldPlayers] = players1;
//   console.log(gk,fieldPlayers);

//   //3.
//   const allPlayers = [...players1,...players2];
//   console.log(allPlayers);

//   //4.
//   const players1Final = [...players1,'Thiago', 'Coutinho','Perisic'];
//   console.log(players1Final);

  //5, little bit difficult
  //const {odds:{team1, x:draw,team2}} = game;
  //console.log(team1,draw,team2);

//   //6
//   const printGoals = function(...players){
//     console.log(players);
//     console.log(`${players.length} goals were made`);
//   }

//   printGoals(...game.scored);

//   //7
//   team1<team2 && console.log('team1 is more likely to win');
//   team2<team1 && console.log('team2 is more likely to win');



// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

//1
//   const events = [...new Set(gameEvents.values())];
//   console.log(events);
//   //console.log(typeof events);

//   //2
//   gameEvents.delete(64);
//   console.log(gameEvents);

//   //3
//   const time = [...gameEvents.keys()];
//   console.log(time.pop());
//   console.log(`An event happened, on average, every ${time.pop()/gameEvents.size} minutes`);

// //4
//   for(const [min,events] of gameEvents){
//     //console.log(typeof key);

//     if(Number(min)<=45){
//         console.log(`[FIRST HALF] ${min} : ${events}`);
//     }else{
//         console.log(`[SECOND HALF] ${min} : ${events}`)
//     }
//   }


// const airline = ' Tap Air India';
// const plane = 'A320';

// const announcement = 'All passenger come bording door 23.bording door 23!';

// console.log(announcement.replace('door','gate'));
// console.log(announcement.replaceAll('door','gate'));
// console.log(announcement.replace(/door/g,'gate'));

// //practice exercise
// const checkBaggage = function(items){
//     const baggage = items.toLowerCase();
//     if(baggage.includes('knife')||baggage.includes('gun')){
//         console.log('you are not allowed on board');
//     }else{
//         console.log('you are welcome');
//     }
// }
// checkBaggage('I have a laptop,some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// //split and join
// console.log('a+very+nice+string'.split('+'));

// console.log('raja kumar'.split(' '));
// const[firstName,lastName] = 'rja kumar'.split(' ');
// console.log(firstName,lastName);

// const newName = ['Mr.',firstName,lastName.toUpperCase()].join('_');
// console.log(newName);

// //padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25,'+'));
// console.log('raja'.padStart(40,'-').padEnd(10,'-'));
// console.log('raja'.padEnd(30,'_').padStart(10,'-'));


// const maskCreditCard = function(number){
//     const str =number+'' ;
//     const last = str.slice(-4);
//     return last.padStart(str.length,'*');
// }

// console.log(maskCreditCard(329033165057));

// const message2 = 'Bad weather...All Departures Delayed....';

//console.log(message2.repeat(5));

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);

    for(const [i,row] of rows.entries()){
       const[first,second] = row.toLowerCase().trim().split('_');
       //console.log(first,second);

       const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
      console.log(`${output.padEnd(20,' ')}${'✅'.repeat(i+1)}`);

    }
})

