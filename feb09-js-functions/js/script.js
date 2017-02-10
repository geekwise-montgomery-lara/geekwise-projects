// IIFE - Immediately Invoked Function Expression
// (function(){


    // Function Declaration
    function funDec(userMessage, userAge){
        // alert('This is from the Declaration');
        // console.log(userMessage, userAge);
    };
    // PARAMETERS & ARGUMENTS
    funDec('Hola Señor', 21);
    // funDec(); // Calling (aka Invoking, aka Running) the function
    var myNum; // Undefined variable

    // Function Expression
    var funcExp = function(){
        myNum = 3;

        // alert('This is from the Expression');
        // funDec();
    }; // Immediately invoke the function with ()
    // funcExp(); // funDec(); // Calling (aka Invoking, aka Running) the function

    // HOISTING - places all function DECLARATIONS and variable names to memory before calling (aka Invoking aka Running) scripts

    // SCOPE - a variable that exists ONLY within the function where it was created

    // RETURN

    function getFullName(a, b){
        return a + ' ' + b;
    };
    // console.log(getFullName('Monty', 'Lara'));




    function getUserName(){
        var userName = prompt("What's your name?");
        var userMsg = 'Hello ' + userName + ', hope you have a great day';
        return userMsg;
    };
    function alertUserName(){
        alert(getUserName());
    };
    alertUserName();


// })();
var what_is_the_meaning_of_life = 42;
