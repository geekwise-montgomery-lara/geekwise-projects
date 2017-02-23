var what_is_the_meaning_of_life = 42;

var form = document.querySelector('form');
var inputs = document.querySelectorAll('input:not([type="submit"])');
var inputBtn = document.getElementById('submitName');
var userArray = [];

inputBtn.addEventListener('click', function(evt){
    evt.preventDefault();

    var formInputs = document.querySelector('form').elements;

    for(var i = 0; i < formInputs.length - 1; i++){
        // userArray.push(formInputs[i].value);
        // formInputs[i].value = '';
        if(formInputs[i].type === 'radio' && formInputs[i].checked ||
          formInputs[i].type !== 'radio' && formInputs[i].type !== 'checkbox' && formInputs[i].value){
            userArray.push(formInputs[i].value);
        }
        if(formInputs[i].type === 'checkbox' && formInputs[i].checked){
            userArray.push(true);
        }
    }
    console.log(userArray);
    userArray.splice(0, userArray.length);
    // inputs.forEach(function(e, i){
    //     userArray.push(inputs[i].value);
    //     // inputs[i].value = '';
    // });
    form.reset();
    // alert(userArray);
    // userArray.splice(0, userArray.length);
});
