

/*let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

var job = 'programmer';
job = 'teacher';
*/

//lastName = 'Schmedtmann';
//console.log('Schmedtmann');
// math operators
//const now = 2037;
//const ageJonas = now - 1991;
//const ageSarah = now - 2020;
//console.log(ageJonas, ageSarah);

/*console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Dog p';
console.log(firstName +  ' ' + lastName);
// assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);
*/

// comparison operators
//console.log(ageJonas > ageSarah); //  >, <, >=, <=
//console.log(ageSarah >= 18);
//const isFullAge = ageSarah >= 18;
//console.log(now - 1991 > now - 2020);

/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(now - 1991 > now - 2020);
let x, y;
x = y = 25 -10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/



//let markWeight = 78 ;
//let markHeight = 1.69;

//let johnWeight = 92 ;
//let johnHeight = 1.95 ;

/*let markWeight = 95 ;
let markHeight = 1.88;

let johnWeight = 85 ;
let johnHeight = 1.76 ;
*/



/*const markBmi = (markWeight) / (markHeight * markHeight);
const johnBmi = (johnWeight) / (johnHeight * johnHeight);
const markHigherBMI = markBmi > johnBmi;
console.log(markBmi, johnBmi, markHigherBMI);
*/

/*const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const Jonas = "I'm"  +  firstName + ',a' + (year - birthYear) + 'years old' + job + '!';
console.log(Jonas);
const jonasNew = `I'm ${firstName}, a ${(year - birthYear)} year old ${job}! `;
console.log(jonasNew);
console.log(`just a regular string`);
console.log(`String with \n\
multiple \n\
lines`);
console.log(`just a regular string
mutiple
lines`);
*/
/*const age = 15;


if(age >= 18){
    console.log('sarah is ready for liscence 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. wait another ${yearsLeft} years:`);
}
const birthYear = 2005;
let century;
if (birthYear >= 2000) {
    century = 21;
} else{
    century =20;
}
console.log(century);
*/

/*let markWeight = 78 ;
let markHeight = 1.69;

let johnWeight = 92 ;
let johnHeight = 1.95 ;

const markBmi = (markWeight) / (markHeight * markHeight);
const johnBmi = (johnWeight) / (johnHeight * johnHeight);
const markHigherBMI = markBmi > johnBmi;
*/
/*if (markHigherBMI) {
    console.log(`markBmi is higher than johnBmi`);
} else {
    console.log(`johnBmi is higher than markBmi`);
}*/


/*if ( markHigherBMI) {
    console.log(`Mark's${markBmi} BMI is higher than John's${johnBmi}`);
} else {
    console.log(`John's${johnBmi} BMI is higher than Mark's${markBmi}`);
}
*/
// type conversion

/*const inputYear = '1994';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23));

// type coercion
console.log('I am '  +  23 + 'years  old');
console.log('23' - '10' - 3);
console.log('23' / '10');
console.log('23' > '18');
let n = '1' + '1';
n = n - 1;
console.log(n);
*/
// 5 falsy values: 0, ', NaN, null, undefined
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('go get a job');
}
let height = 0 ;
if (height) {
    console.log('YAY height is defined');
} else {
    console.log('YAY height is undefined');
}
*/
 /*const age = '18';
 if (age === 18) console.log('you became an adult D: (strict)');
 if (age == 18) console.log('you became an adult D: (loose)');

 const favorite = Number(prompt(" what's your favorite number."));
 console.log(favorite);
 console.log(typeof favorite);
 if (favorite === 23) {
    console.log(' cool 23 is an amazing number!');
 } else if (favorite === 7) {
    console.log("7 is also an amazing number");
 } else if (favorite === 9){
    console.log('9 is an amazing number');
 }
 else {
    console.log('number is not 7 or 23 or 9');
 }
 if (favorite != 23) {
    console.log('why not 23');
 }
 */

 const hasDriversLicense = true; // A
 const hasGoodVision = true; // B
 console.log(hasDriversLicense && hasGoodVision);
 console.log(hasDriversLicense || hasGoodVision);
 console.log(!hasDriversLicense);

 /*if (hasDriversLicense && hasGoodVision) {
    console.log('sarah is able to drive');
 } else {
    console.log('someone else should drive');
 }
 */
 const isTired = false; // c
 console.log(hasDriversLicense && hasGoodVision && isTired);

 if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('sarah is able to drive');
 } else {
    console.log('someone else should drive');
 }

// bonus 1
 /*const dolphinsAverage = Number((97 + 112 + 101)/3);
 const koalasAverage = Number((109 + 95 + 123)/3);
 console.log(dolphinsAverage);
 console.log(koalasAverage);
 if (dolphinsAverage > koalasAverage) {
    console.log('winner is dolphins');
 } else if (dolphinsAverage === koalasAverage) {
    console.log('its a draw');
 } else {
    console.log('koalas is winner');
 }
 */
// bonus 2

 /*const dolphinsAverage = Number((97 + 112 + 80)/3);
 const koalasAverage = Number((109 + 95 + 50)/3);
 console.log(dolphinsAverage);
 console.log(koalasAverage);
 if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log('winner is dolphins');
 } else if (koalasAverage > dolphinsAverage && koalasAverage >=100) {
    console.log('winner is koalas');
 } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log('its a draw');
 } else {
    console.log('no team wins');
 }
 */
 /*const day = 'Thursday';
 switch (day) {
   case 'Monday': // day === Monday
      console.log('plan the course');
      console.log('go to code meetup');
      break;
   case 'Tuesday':
      console.log('prepare video tutorials');
      break;
   case 'Wednesday':
      console.log('good');
      break;
   case 'Thursday':
      console.log('bad');
      break;
   case 'Friday':
      console.log('freaky');
      break;
   case 'Saturday':
      
   case 'Sunday':
   
   default:
      console.log('invalid');
       
   
 }
 */

/*const day = 'Wednesday';

 
if (day === 'Monday') {
   console.log( 'plan the course');
}
else if (day === 'Tuesday') {
   console.log('prepare video tutorial');
}
else if (day === 'Thursday' || 'wednesday') {
   console.log('write code examples');
}
else if (day === 'Friday') {
   console.log('freaky');
} 
else if (day == 'Sunday' || 'saturday') {
   console.log('enjoy weekend');
}
*/

/*const age = 15;
//age >= 18 ? console.log('you drink wine 🚕') : console.log('you take water');

 const drink = age >= 18 ? 'wine' : 'Water';
 console.log('drink');

 let drink2;
 if (age >= 18) {
   drink2 = 'wine';
 } else {
   drink2 = 'water';
 }
 console.log(drink2);
 console.log(`I like to drink ${age >= 18 ? 'wine' : 'Water'}`);
 */

const bill = 430 ;
//const tip = 41.25;

//bill > 50 && < 300 ? console.log(bill * 15/100) : console.log(bill * 20/100);

const tip = bill >= 50 && bill <= 300 ? (bill * 15/100 ): (bill * 20/100);

console.log(` The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



 












 

 

 



 

 
















































