/*
//* VALUES and VARIABELS

let js = "amazing";
// if (js === "amazing") alert("java script is fun");
console.log(40 + 8 + 23 - 10)

console.log("jonas")
console.log(23)

//* we assigned  a veriable (firstName) and declared that is equal to "jonas" (firstName = "jonas").
let firstName = "jonas"
console.log(firstName)



let javaScriptIsFun = true;
console.log(javaScriptIsFun)

// console.log(typeof true)
console.log(typeof javaScriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Jonas')



//* DATA TYPES

//* if we want to change the veriable we do it without "let" because let is already defined.
javaScriptIsFun = "YES!"
console.log(typeof javaScriptIsFun)

let year;
console.log(year)
console.log(typeof year)
year = 1991
console.log(typeof year)

console.log(typeof null)

let age = 30
age = 31

const birthYear = 1996
// birthYear = 1997
// const job;


var job = 'programmer'
job = 'teacher'

lastName = 'poris'
console.log(lastName)
*/


//* MATH OPERATORS
/*
const now = 2037
const ageTal = now - 1996
const ageSarah = now - 2018
console.log(ageTal, ageSarah)

console.log(ageTal * 2, ageTal / 10, 2 ** 3)
    //* 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Tal"
const lastName = "Poris"
console.log(firstName + " " + lastName)

//* ASSIGNMENT OPERATORS
let x = 10 + 5 //15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x)


//* COMPARISON OPERATORS
console.log(ageTal > ageSarah) // >, <, >=, <=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18
console.log(now - 196 > now - 2018)

const now = 2037
const ageTal = now - 1996
const ageSarah = now - 2018
console.log(now - 196 > now - 2018)

let x, y;
x = y = 25 - 10 - 5 // x = y = 10 , x = 10
console.log(x, y)

const averageAge = (ageTal + ageSarah) / 2
console.log(ageTal, ageSarah, averageAge)
*/




//* TK-1
/*
//  let country = "Israel";
//  let continent = "Middle East"
//  let population = 9000000

//  console.log(country)
//  console.log(continent)
//  console.log(population)

// const johnWeight = 92
// const johnHeight = 1.95

// const markWeight = 78
// const markHeight = 1.69

// const johnBmi = johnWeight / (johnHeight ** 2)
// const markBmi = markWeight / (markHeight ** 2)
// const markHigherBmi = markBmi > johnBmi
// console.log(markBmi, johnBmi, markHigherBmi)

const johnWeight = 85
const johnHeight = 1.76

const markWeight = 95
const markHeight = 1.88

const johnBmi = johnWeight / (johnHeight ** 2)
const markBmi = markWeight / (markHeight ** 2)
const markHigherBmi = markBmi > johnBmi
console.log(markBmi, johnBmi, markHigherBmi)
*/

//* STRINGS AND TEMPLATE LITERALS
/*
const firstName = 'Jonas'
const job = 'teacher!'
const birthYear = 1991;
const currentYear = 2023;


const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + " years old " + job
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}`
console.log(jonasNew)

console.log(`just a regular string...`)
*/


//* IF / ELSE STATEMENTS
/*
const age = 15;
const isOldEnough = age >= 18

if (isOldEnough) {
    console.log('sarah can start driving license🚗')
} else {
    const yearsLeft = 18 - age
    console.log(`sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2021

let century;
if (birthYear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century)
*/


//* TK-2
/*
const johnWeight = 85
const johnHeight = 1.76

const markWeight = 95
const markHeight = 1.88

const johnBmi = johnWeight / (johnHeight ** 2)
const markBmi = markWeight / (markHeight ** 2)


if (markBmi > johnBmi) {
    console.log(`Marks BMI ${markBmi} is higher then John's ${johnBmi}`)
} else {
    console.log(`John BMI ${johnBmi} is higher then Mark's BMI ${markBmi}`)
}
*/

//* TYPE CONVERSION 
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)

console.log(Number('jonas')) // NAN = not a number
console.log(typeof NaN)
console.log(String(23), 23)


//* TYPE COERCION
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' * '2')