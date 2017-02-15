var  what_is_the_meaning_of_life = 42;


var useName = function userNames(){
    //return prompt("What is your name?").trim();
}();
function upperLower(){
    var changeName = useName;
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


var btnOne = document.getElementById('btnOne');
var btnTwo = document.getElementById('btnTwo');
var div = document.getElementById('content');

btnOne.addEventListener('click', function(){
    userFirstName = prompt("What's your first name?");
    // No var keyword makes it global

    console.log(parseInt(userFirstName));
    if(isNaN(userFirstName)){
        btnTwo.disabled = false;
        btnOne.disabled = true;
    }else{
        alert('Please type your name');
    }

});
btnTwo.addEventListener('click', function(){
    var userLastName = prompt("What's your last name?");
    // userLastName is SCOPED to this function, not accessible globally
    if(isNaN(userLastName)){
        btnOne.disabled = false;
        btnTwo.disabled = true;
        div.textContent = userFirstName + ' ' + userLastName;
    }else{
        alert("Please type your name!")
    }
});
