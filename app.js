// Assignment 1

var inputNum1 = +prompt('Input a number to check whether it is divisible by 3 or not');

if(inputNum1 % 3 === 0){
    console.log('The number is divisible by 3 and the answer is ' + inputNum1 / 3);
}
else{
    console.log('Number is not divisible by 3.');
}

// Assignment 2

var inputNum2 = +prompt('Input a number to check whether it is an even number or odd number');

if(inputNum2 % 2 === 0){
    console.log('It is an Even number');
}
else {
    console.log('It is an Odd number');
}

// Assignment 3

var age = +prompt('Enter your age');

if(age > 18){
    console.log('Old enough');
}
else{
    console.log('Too young');
}

// Assignment 4

var username = prompt('Enter your name');

if(username === "jawad"){
    alert('Welcome to my website ' + username);
}
else{

}

// Assignment 5

var inputNum3 = +prompt('Input a number to check whether it is divisible by 3 or not');

if(inputNum3 % 3 !== 0){
    console.log('Number is not divisible by 3');
}
else {
    console.log('Number is divisible by 3');
}

// Assignment 6


// Assignment 7


// Assignment 8

var time = prompt('Input time in 24 hours clock format i.e 19:00');

if(time >= '00:00' && time < '12:00'){
    console.log('Good Morning!');
}
else if(time >= '12:00' && time < '17:00'){
    console.log('Good Afternoon!');
}
else if(time >= '17:00' && time < '21:00'){
    console.log('Good Evening!');
}
else if(time >= '21:00' && time < '23:59'){
    console.log('Good Night!');
}
else{

}

// Assignment 9

var year = +prompt('Enter any year to check whether it is a leap year or not');

if(year % 4 === 0){
    console.log(year + ' is a leap year');
}
else{
    console.log(year + ' is not a leap year');
}

// Assignment 10

var correctPassword = 'hellojavascript';

var enterPassword = prompt('Enter Password "Hint:hellojavascript"');

if(enterPassword === null || enterPassword === ''){
    console.log('Please enter password');
}
else{
    if(enterPassword === correctPassword){
        console.log('Correct! The password you entered matches the original password');
    }
    else{
        console.log('Incorrect password');
    }
}

// Assignment 11

var firstName = 'Fahad';

if(firstName === 'Fahad'){
    console.log('Hello Fahad!');
}
else{
    console.log('You are not Fahad');
}

// Assignment 12

var greeting;

var hour = 13;

if(hour < 18){
    greeting = 'Good day';
    console.log(greeting);
}
else{
    greeting = 'Good evening';
    console.log(greeting);
}

// Assignment 13

var int1 = prompt('Enter first integer');
var int2 = prompt('Enter second integer');

if(int1 === null || int1 === '' || int2 === null || int2 === ''){
    console.log('Enter values');
}
else{
    if(int1 > int2){
        console.log(int1 + ' is greater than ' + int2);
    }
    else if(int2 > int1){
        console.log(int2 + ' is greater than ' + int1);
    }
    else{
        console.log(int1 + ' is equal to ' + int2);
    }
}

// Assignment 14

var inputNum4 = prompt('Enter a number:');

if(inputNum4 === null || inputNum4 === ''){
    console.log('Enter a number');
}
else{
    if(inputNum4 > 0){
        console.log('The number is positive');
    }
    else if(inputNum4 < 0){
        console.log('The number is negative');
    }
    else{
        console.log('The number is zero');
    }
}

// Assignment 15

var hour = prompt('Input time in 24 hours clock format i.e 19:00');

if(hour >= '06:00' && hour <= '09:00'){
    console.log('Breakfast is served.');
}
else if(hour >= '11:00' && hour <= '13:00'){
    console.log('Time for lunch.');
}
else if(hour >= '17:00' && hour <= '20:00'){
    console.log("It's dinner time.");
}
else{
    console.log("Sorry, you'll have to wait, or go get a snack.")
}

// Assignment 16 (not working)

var variable = prompt('Write something');

if(typeof(variable) === 'string'){
    console.log('Type of ' + variable + ' is string');
}
else if(typeof(variable) === 'number'){
    console.log('Type of ' + variable + ' is number');
}
else if(typeof(variable) === 'boolean'){
    console.log('Type of ' + variable + ' is boolean');
}
else if(typeof(variable) === 'undefined'){
    console.log('Type of ' + variable + ' is undefined');
}
else{

}

