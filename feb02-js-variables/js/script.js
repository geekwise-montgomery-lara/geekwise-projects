var what_is_the_meaning_of_life = 42

/*
var externalJavascript = 'wha da actual heck?';
*/
//multi line
var camelCase; //use This
var not_camel_case;
var camel_Case;
var $dollarCase;
var dollar$case;

//var 1stvariable = 'no no';
var firstVar;

//var var;
var variables;

var CaseCamel; //For constructor objects only
var SUPERUPPERCASE; //Definitely don't;


/*JAVASCRIPT OBJECTS
    Number
    String
    Boolean
    Array
    Objects
*/
var myNumberObject = 3;

var myNewNumberObject = myNumberObject.toString();

// console.log(myNumberObject);
// console.log(myNewNumberObject);
var myStringObject = 'this is a string object';
var myOtherStringObject = 'this is also a string object'
// var mynonWorkingStringObject = 'this wont work";
// var myPoorGrammar = 'David's BasketBall';
var myCorrectGrammar = "David's BasketBall";
var myOtherPoorGrammar = 'David\'s BasketBall';

// console.log(myStringObject, myOtherStringObject);


// BOOLEAN OBJECT
var myBooLeanTrue = false; // 0
var myBooLeanFalse = true; // 1

//FLOAT OBJECT
var myFloatObject = 3.1;

// ARRAY OBJECT (identified with square brackets)
var myArrayObject = ['red', 8, true, ['r', 'b', 'g']];
//console.log(myArrayObject[3]);

// OBJECT OBJECT (identified with curly brackets)
var myObjectObject = {
    make: 'Truck',
    model: 'Ranger XLT',
    color: 'Red',
    year: 1999,
    package: function(){
        alert(this.make);
    }
};
//console.log(MyObjectObject);

// JAVASCRIPT MATH
var a = 5;
var b = 10;
var c = a + b;
//console.log(c);

var d = a - b;
var e = a * b;
var f = a / b;
console.log(d, e, f);

var g = a % b; // modulus
console.log(g);
