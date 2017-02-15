var str = "MontGomERy LaRA";
var modStr = str.substr(1, 4);
// var userName = prompt('What is your name?').trim();


// console.log(str, modStr);

// toLowerCase - lowercase string
// toUpperCase - uppercase string
// substr() - get characters from starting index upto & including ending index
// trim() - removes excess spaces before & after
// .length - get total number of charachters
// .charAt() - get character specified index



function userNames(){
    return prompt("What is your name?").trim();
};
function upperLower(){
    var changeName = userNames();
     // var fullName = changeName.charAt(0, 0).toUpperCase() + changeName.substr(1, changeName.length).toLowerCase();
    var firstLetter = changeName.charAt(0, 0);
    var capLetter = firstLetter.toUpperCase();
    var lastLetter = changeName.substr(1, changeName.length);
    var lowerLetter = lastLetter.toLowerCase();

    var fullName = capLetter + lowerLetter;
    alertName(fullName);
};
// upperLower();
function alertName(name){
    alert(name);
};
// function upperLower(){
//     var upName = userName.toUpperCase(1, 0);
//     var lowName = upName.toLowerCase(2, 10);
// };
//
// function alertName(){
//     alert(lowName);
// };
// alertName()
var voidBtn = document.getElementById('void');
var extBtn = document.getElementById('external');
var content = document.getElementById('content');
var btnName = prompt('What is your name?');

extBtn.addEventListener('click', function(){
    content.textContent = btnName;
    // content.style.fontFamily = 'Comic Sans MS';
    // content.style.color = "Yellow";
    // content.style.fontSize = "2.6em";
    // content.style.textAlign = 'center';
});

voidBtn.addEventListener('click', function(){
    content.textContent = '';
});


function changeColor(){
  var randNum = Math.random();
  console.log(randNum);
  var randHue = randNum * 360;
  console.log(randHue);
  var roundHue = Math.floor(randHue);
  console.log(roundHue);
  var addOne = roundHue + 1;
  console.log(addOne);
  document.body.style.backgroundColor = 'hsl('+ addOne +', 50%, 50%)';
  // var randNum = Math.floor(Math.random() * 360) + 1;
  // console.log(randNum);
  // document.body.style.backgroundColor = 'red';
};







var what_is_the_meaning_of_life = 42;
