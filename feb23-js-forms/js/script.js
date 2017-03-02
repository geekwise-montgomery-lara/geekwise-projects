var what_is_the_meaning_of_life = 42;

var loginForm = document.querySelector('form#loginform');
var loginBtn = document.querySelector('form#loginform input[type="submit"]')
var loginArr = [];

var form = document.querySelector('form#contactform');
var subBtn = document.querySelector('form#contactform input[type="submit"]');
var userArr = [];

var username = '';
var custom = document.querySelector('.custom');

if(localStorage.getItem('username')){
    username = localStorage.getItem('username');
    alert(username + ' Please enter yout password to continue.');
    password();
}else{
    alert('Please log in.');
    login();
}
console.log(username);

subBtn.addEventListener('click', function(evt){
      evt.preventDefault();
      for(var i = 0; i < form.elements.length - 1; i++){
          if(form.elements[i].type !== 'checkbox'){
              userArr.push(form.elements[i].value);
          }
          if(form.elements[i].type === 'checkbox' &&
            form.elements[i].checked){
              userArr.push(true);
          }
      }
      console.log(userArr);
});
function login(){
  loginBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        var pass = MD5("pa55w0rD");
        console.log(pass);
        for(var i = 0; i < loginForm.elements.length - 1; i++){
            //loginArr.push(MD5(loginForm.elements[i].value));
            if(loginForm.elements[i].type === 'text'){
                localStorage.setItem('username', loginForm.elements[i].value);
            }else{
                sessionStorage.setItem('password', MD5(loginForm.elements[i].value));
            }

            // loginForm.elements[i].type === 'text' ?
            //   localStorage.setItem('username', loginForm.elements[i].value) :
            //   sessionStorage.setItem('password', MD5(loginForm.elements[i].value));
        }
        custom.textContent = 'Hello ' + localStorage.getItem('username') + '. ';
        for(var i = 0; i < form.length; i++){
            form.elements[i].disabled = false;
        }
  });
}

function password(){
    loginBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        if(MD5(loginForm.elements[1].value) === sessionStorage.getItem('password')){
            alert('passwords match... you may continue');
        }else{
            alert('your password was wrong... you suck.')
        }
    });
}

//  .setItem('key', 'value');
//  .getItem('key');
//  .removeItem('key');
//  .clear();
