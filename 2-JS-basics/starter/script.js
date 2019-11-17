/*
 * Variables and Data Types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// var 3years = 3; throws exception

*/

/*
 * Variables and Data Types
 */
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' 
+ job + '. Is he married? ' + isMarried);

// Variable mutation 
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' 
+ job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*
 * Basic Operators
 */
/*
// Math Operators
var year = 2019;
var ageJohn = 28;
var ageMark = 33;
var yearJohn = year - ageJohn;
var yearMark = year - ageMark;

console.log(yearJohn);
console.log(year + 2);
console.log(year / 10);

// Logical Operators
console.log(ageJohn > ageMark);

// typeof operator
console.log(typeof ageJohn);
console.log(typeof 'this');
var x;
console.log(typeof x);
*/

/*
 * Operators precedence
 */
/*
var now = 2019;
var yearJohn = 1989;
var fullAge = 19;

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

//multiple assignment
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
x++;
x--;
console.log(x);
*/