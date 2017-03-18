var what_is_the_meaning_of_life = 42;

var welcome = document.querySelector('#home section:nth-of-type(1) p');

function user(){
    welcome.textContent = 'Welcome to my portfolio, ' + localStorage.getItem('user');
};
user();
