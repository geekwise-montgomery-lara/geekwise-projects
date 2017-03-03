var what_is_the_meaning_of_life = 42;

var content = document.getElementById('content');
var h1 = document.createElement('h1');
var p = document.createElement('p');
var a = document.createElement('a');
var ul = document.createElement('ul');
var input = document.createElement('input');
var number = document.createElement('input')
var form = document.createElement('form');
var firstName = document.createElement('input');
var lastName = document.createElement('input');
var password = document.createElement('input');
var email = document.createElement('input');
var submitBtn = document.createElement('input');
var br = document.createElement('br');
var formArr = [];

firstName.type = 'text';
firstName.placeholder = 'First Name';
lastName.type = 'text';
lastName.placeholder = "Last Name"
password.type = 'password';
password.placeholder = "Password"
email.type = 'email';
email.placeholder = "Email"
number.type = 'number';
submitBtn.type = 'submit';
submitBtn.value = 'accept';

content.appendChild(h1).textContent = "Hello world";
content.appendChild(p).textContent = "chicken butt";
content.appendChild(a).textContent = "chicken";
content.insertBefore(ul, a);
content.insertBefore(form, a);

form.appendChild(firstName);
form.appendChild(lastName);
form.appendChild(password);
form.appendChild(br);
form.appendChild(email);
form.appendChild(number);
form.appendChild(submitBtn);

a.id = 'aL';
a.target = '_blank';

submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    getValues();
});

number.addEventListener('change', function(evt){
    // console.log(evt.target.value);
    if(evt.target.value <= 0){
        console.log(evt.target.value);
        evt.target.value = 0;
    }
});


function getValues(){
    ul.innerHTML = '';
    var loopNum = parseInt(number.value);
    for(var i = 1; i < loopNum + 1; i++){
        li = document.createElement('li');
        ul.appendChild(li).textContent = i;
        li.contentEditable = true;
    }
    // for(var i = 0; i < form.elements.length - 1; i++){
    //     formArr.push(form.elements[i].value);
    //     form.elements[i].value = '';
    // }
    // console.log(formArr);
}
