var what_is_the_meaning_of_life = 42;
var myArr = ['red', 'orange', 'yellow'];
var newArray = [];

var addBtn = document.getElementById('addObj');
var removeBtn = document.getElementById('remObj');

addBtn.addEventListener('click', function(){
    // alert('It notices...');
    askForColor();
});
removeBtn.addEventListener('click', function(){
    // alert('It notices me!');
    // var re = /ab+c/;
    // console.log(re);
    //
    // var myRe = /d(b+)d/g;
    // var myArray = myRe.exec('cdbbdsbz');
    // console.log(myArray);
});
function askForColor(){
    var userColor = prompt("What's your favorite color?").trim();
    console.log(userColor);
    console.log(!userColor);
    if (userColor !== null && userColor.trim() !== '' ){
      var userColorCheck = userColor.toLowerCase().trim();
      if( !isNaN(parseInt(userColorCheck)) ){
          askForColor();
      }else{
          // alert('You chose a color! huzzah!');
          newArray.push(userColorCheck);
          console.log(newArray);
      }
    }else{
        alert('Well fine then... go');
    }

    // && === and
    // || === or



    /*
    if( !isNaN(parseInt(userColor)) ){
        alert('You typed a number bozo');
        askForColor();
    }else if(userColor === ''){
        alert('You typed blank');
    }else{
        alert('You typed a string');
    }
    */

    // '4' !== 4

    /*
    if( isNaN(parseInt(userColor)) ){
        alert('Nerd');
    }else{
        alert('Dumbass')
    }
    */
    //isNaN to eliminate numbers
}
