var what_is_the_meaning_of_life = 42;


var numberObject = 68;
var booLeanTrue = false;
var floatObject = 3.1;
var arrayObject = ['red', 8, true, 'chef boyardee'];
var objectObject = {
    make: 'car',
    model: 'Ranger',
    color: 'Red',
    year: 1999,
}
var stringObject = 'this is string I think';

// console.log(numberObject);
// console.log(booLeanTrue);
// console.log(floatObject);
// console.log(arrayObject);
// console.log(objectObject);
// console.log(stringObject);
//
// console.log(stringObject.indexOf('i', 3));
// console.log(arrayObject[3]);
// console.log(objectObject.year);

var numOne = 2;
var numTwo = new Number(5);

// console.log(numOne);
// console.log(numTwo);

var numThree = '3';
var numFour = '5.3';

console.log(parseInt(numThree));
console.log(parseFloat(numFour));

var numFive = 'Jeff'
console.log(parseInt(numFive));
console.log(parseFloat(numFive));

console.log(isNaN(numFive));

if(isNaN(numFive)){
    //alert("it's not a number");
}else{
    //alert (it is a number);
}

// parseInt
// parseFloat
// isNaN


//alert('WTF?!');
//var userLang = confirm('Do you speak it?');


//var formuoli = prompt('What is your favorite flavor of ravioli');
//console.log(formuoli);

// var speakIt = prompt('ENGLISH MOTHERF*CKER DO YOU SPEAK IT!?')
// var what = prompt('What?')
// var sayIt = prompt("SAY 'WHAT' AGAIN, I DARE YOU, I DARE YOU MOTHERF*CKER!")
//
// console.log(speakIt, what, sayIt);

// var people = prompt('What is your age?');
// console.log(parseInt(people));


/*------*/
// All 3 alerts (alert, prompt, confirm)
// console.log( parseInt(userAge))
// 4 objects (string, number, float, Boolean)
// 10 variable saves
// at least 5 confirms
// 1 if statement
// if(isNaN(numFive)){
    // alert("it's not a number");
// }else{
    // alert (it is a number);
// }

var name = prompt("what is your name?");
var intro = prompt("Welcome to my story " + name + ". What is your pet's name?");
