var what_is_the_meaning_of_life = 42;

// document.getElementById('btn').addEventListener('click', function(){
//     // alert('Chicken Nuggets');
//     // console.log(add(630, 3, 2));
//     console.log(addEx(3,2));
//     console.log(name() + ' ' + names());
// });
//
// var addEx = function(){
//     console.log(arguments);
//     var total = 0;
//     for(var i = 0; i < arguments.length; i++){
//         if(typeof arguments[i] !== 'string'){
//             total = arguments[i] + total;
//         }
//     }
//     return total;
// };
function name(){
    var first = prompt('Enter firstname');
    return first;
}
function names(){
    var lastName = prompt('Enter Lastname');
    return lastName;
}

function add(num, num2, num3){
    return num / num2 * num3;
}

document.querySelector('input[type="submit"]').addEventListener('click', function(e){
      e.preventDefault();
      getInfo();
});
var form = document.querySelector('form');

function getInfo(){
    console.log('Welcome ' + getName(form) + 'to your site. Your email is ' + getEmail(form));
    console.log("You've signed up for " + getChecks(form));
}

function getName(arr){
    var final = '';
    for(var i = 0; i < form.length; i++){
        if(arr.elements[i].type === 'text'){
            final += form.elements[i].value + ' ';
        }
    }
    return final;
}
function getEmail(arr){
    // return document.querySelector('input[type="email"]').value;
    var emails = '';
    for(var i = 0; i < arr.elements.length; i++){
        if(arr.elements[i].type === 'email'){
            emails = emails + arr.elements[i].value + ', ';
        }
    }
    return emails;
}
function getName(arr){
    var final = '';
    for(var i = 0; i < form.length; i++){
        if(arr.elements[i].type === 'text'){
            final += form.elements[i].value + ' ';
        }
    }
    return final;
}
function getChecks(arr){
    var checks = '';
    for(var i = 0; i < arr.elements.length; i++){
        if( arr.elements[i].type === 'checkbox' && arr.elements[i].checked){
            checks += arr.elements[i].value + ' ';
        }
    }
    return checks;
}
