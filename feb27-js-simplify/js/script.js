var what_is_the_meaning_of_life = 42;

var login = document.getElementById('login');
var loginForm =
'<form>' +
    '<h1>Please Login</h1>' +
    '<label>' +
        '<span>Username</span>' +
        '<input type="text" placeholder="Username">' +
    '</label>' +
    '<label>' +
        '<span>Password</span>' +
        '<input type="password" placeholder="Password">' +
    '</label>' +
    '<label>' +
        '<span></span>' +
        '<input type="submit" value="Enter">' +
    '</label>' +
'</form>';
login.innerHTML = loginForm;

document.querySelector('input[type="submit"]').addEventListener('click', function(e){
    e.preventDefault();
    getFormVals();
});
var form = document.querySelector('#login form');
function getFormVals(){
    var formInputs = [];
    for(var i = 0; i < form.length - 1; i++){
        formInputs.push(form.elements[i].value);
    }
    console.log( dropCapInputs(formInputs));
    console.log( upCapInputs(formInputs));
}
function dropCapInputs(arr){
    if(arr.constructor === Array){
      arr.forEach(function(e, i){
          arr[i] = arr[i].toLowerCase();
      });
      return arr;
    }else{
        alert('Jive Turkey');
    }
}
function upCapInputs(lwr){
    if(lwr.constructor === Array){
      lwr.forEach(function(e, i){
          lwr[i] = lwr[i].toUpperCase();
      });
      return lwr;
    }else{
        alert('Jive Turkey');
    }
}
