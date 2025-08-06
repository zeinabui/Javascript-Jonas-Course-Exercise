/*
alert("Hello World!")

let js = 'Amazing'
console.log (js);

if (js === 'Amazing')
alert("Javascript is Fun!")

js = 'Boring'
if (js === 'Amazing')
alert("Javascript is Fun!")

let sum = 40 + 5 + 9;
console.log (sum);


console.log ("Zeinab");
console.log(24);

let myName = 'Zeinab';
console.log (myName);


// We can't use numbers at the first of variable names and & signc but we can start it with $ 

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////

//////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'UX/UI Designer';
job = 'mentor'

lastName = 'Zeinab';
console.log(lastName);
////////////

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2025;
const ageZeinab = now - 2000;
const ageZuhal = now - 2001;
console.log(ageZeinab, ageZuhal);

console.log(ageZeinab * 2, ageZuhal / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2



const firstName = 'Zeinab';
const lastName = 'Hosseini';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageZeinab > ageZuhal); // >, <, >=, <=
console.log(ageZuhal >= 18);

const isFullAge = ageZuhal >= 18;

console.log(now - 2000 > now - 2001);

////////////////////////////////////
// Operator Precedence
const now = 2025;
const ageZeinab = now - 2000;
const ageZuhal = now - 2001;

console.log(now - 2000 > now - 2001);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageZeinab + ageZuhal) / 2;
console.log(ageZeinab, ageZuhal, averageAge);
*/

////////////////////////////////

// Coding Challenge #1 To be added 

///////////////////
// Taking Decisions: if / else Statements
const age = 15;

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

///////////////////////////

// Coding Challenge #2 To be added


// Fundementals part2
 
'use strict';

/*
/////
// Activating Strict Mode  .... It helps to identify errors early
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


////////     template literal = `some string ${expression}`
// Functions
function logger() {
  console.log('My name is Zeinab Hosseini');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1 To be added


/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Zeinab';
const zeinab = [firstName, 'Hosseini', 2037 - 1991, 'mentors', friends];
console.log(zeinab);
console.log(zeinab.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // End of an Array
console.log(friends);
console.log(newLength);

friends.unshift('John');  // Beggining of an Array 
console.log(friends);

// Remove elements
friends.pop(); // End of an Array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Beggining of an Array 
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}



///////////////////////////////////////
// Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);




///////
// Introduction to Objects
Object literal syntax ................. properity : value

const zeinabArray = [
  'Zeinab',
  'Hosseini',
  2025 - 2000,
  'mentor',
  ['Zuhal', 'Setara', 'Parwana']
];

const zeinab = {
  firstName: 'Zeinab',
  lastName: 'Hosseini',
  age: 2025 - 2000,
  job: 'mentor',
  friends: ['Zuhal', 'Setara', 'Parwana']
};


///////////////////////////////////////
// Dot vs. Bracket Notation for accessing properities (returning)

const zeinab = {
  firstName: 'Zeinab',
  lastName: 'Hosseini',
  age: 2025 - 2000,
  job: 'mentor',
  friends: ['Zuhal', 'Setara', 'Parwana']
};

console.log(zeinab);

console.log(zeinab.lastName);  //Dot
console.log(zeinab['lastName']); /// Bracket

const nameKey = 'Name';
console.log(zeinab['first' + nameKey]);
console.log(zeinab['last' + nameKey]);

// console.log(zeinab.'last' + nameKey)

const interestedIn = prompt('What do you want to know about zeinab? Choose between firstName, lastName, age, job, and friends');

if (zeinab[interestedIn]) {
  console.log(zeinab[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

zeinab.location = 'Afghanistan';
zeinab['insta'] = '@zeinab2art';
console.log(zeinab);

// Challenge
// "Zeinab has 3 friends, and her best friend is called Zuhal"
console.log(`${zeinab.firstName} has ${zeinab.friends.length} friends, and her best friend is called ${zeinab.friends[0]}`);

*/

