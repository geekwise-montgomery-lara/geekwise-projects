var what_is_the_meaning_of_life = 42;


var h1 = document.querySelector('#intro h1');
var welcome = document.querySelector('#home section:nth-of-type(1) h1');

btn.addEventListener('click', function(evt){
    evt.preventDefault();
    var userName = document.querySelector('#intro input[type="text"]').value;
    localStorage.setItem('user', userName);
    if(userName.trim() === ''){
        h1.textContent = 'Please, type your name.';
    }else{
        window.location.href='/home.html';
        // window.location.href='https://cdn.rawgit.com/geekwise-montgomery-lara/geekwise-projects/a0150981/home.html';
    }
});
