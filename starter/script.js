/*let js = "amazing";
console.log(40 + 20 + 13 + 5 - 30);
console.log(23);

let firstName = "jonas";
console.log(firstName);
let _firstWord = "free";
let $secondSss8s = "sex";
let PI = 3.14565;
let myFirstJob = 'programmer';
let mySecondJob = 'scientist';

console.log(myFirstJob);
console.log(mySecondJob);

let country = "india";
let continent = 'asia';
let population = "1400000000";

console.log(country);
console.log(continent);
console.log(population);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);           /*undefined is both the value of empty variable and data type of the value

year = 1991;
console.log(typeof year);

console.log(typeof null);   

let age = 30;
age = 32;      // here the value  of the variable age gets mutated d/changed to 32

const birthyear = 1991;
//birthyear = 1990;    // here the value doesnt get mutated however it remains the same and may show error 

//const job;         // cosnt variable shouldnt be empty thats an error

var job = 'prograammer';     // var is just an older way to the let so you should not use  it
job = 'teacher';

lastName = 'schmidt';
console.log(lastName);*/
// MATHEMATICAL OPERATORS 
/* const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah,);    // can add multiple varible values at one console 

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);   //2 **3 = 2*2*2

const firstName = 'jonas';
const lastName = 'schmedtmann';
console.log(firstName + ' ' + lastName);     // in js strings ccan be added

// ASSIGNMENT OPERATOR

let x = 10 + 5;  //15
x += 10; // x=x+10
x *= 4;  //x=x*4
console.log(x);

// comparison operator

console.log(ageJonas > ageSarah);   // itll display true if thtas true
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);   // precedence order

console.log(25 - 10 - 5);    // left to right operatoin

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);      // substraction operator has a higher precendence than assignment operator


const averageAge = (ageJonas + ageSarah) / 2;     //divison operator has more precedence than our addition so we gotta use ()
console.log(ageJonas, ageSarah, averageAge);