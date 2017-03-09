var what_is_the_meaning_of_life = 42;

var form = document.querySelector('form');
console.log(form);

for(var i = 0; i < form.children.length; i++){
    console.log(form.children[i]);
}

form.childNodes.forEach(function(e, i){
    // console.log(e);
});
console.log('Notification' in window);

if( !('Notification' in window)){
    alert('Sorry, your browser is obsolite');
}else{
    console.log('Notifications are avaliable');
}
console.log('childElementCount' in form);
if(!'childElementCount' in form){
    for(var i = 0; i < form.children.length; i++){
        console.log(form.children[i]);
    }
}else{
  for(var i = 0; i < form.childElementCount.length; i++){
      console.log(form.children[i]);
  }
}

console.log(form);
var formArr = [];
formArr.push(form.clientHeight);
formArr.push(form.clientWidth);
formArr.push(form.draggable);
formArr.push(form.firstChild);
formArr.push(form.hidden);

console.log(formArr);

/*---- First Code Today Below ----*/
//
// var content = document.getElementById('content');
//
// function createModal(type, msg){
//
//     content.classList.add('shown');
//
//     var form = document.createElement('form');
//     var div = document.createElement('div');
//     var message = document.createElement('p');
//     var input = document.createElement('input');
//     var confirm = document.createElement('input');
//     var cancel = document.createElement('input');
//
//     message.textContent = msg;
//
//     input.type = 'text';
//     input.placeholder = 'Your Response';
//     cancel.type = 'button';
//     cancel.value = 'Cancel';
//     confirm.type = 'submit';
//     confirm.value = 'Confirm';
//
//     form.appendChild(message);
//     if(type === 'confirm'){
//         div.appendChild(cancel);
//     }else if(type === 'prompt'){
//         form.appendChild(input);
//         div.appendChild(cancel);
//         confirm.addEventListener('click', function(evt){
//             var userInput = input.value;
//             console.log(userInput);
//         });
//     }
//     div.appendChild(confirm);
//     form.appendChild(div);
//     content.appendChild(form);
//
//     confirm.addEventListener('click', function(evt){
//         evt.preventDefault();
//         content.removeChild(form);
//         content.classList.remove('shown');
//         console.log(true);
//     });
//     cancel.addEventListener('click', function(){
//         content.removeChild(form);
//         content.classList.remove('shown');
//         console.log(false);
//     });
// }
