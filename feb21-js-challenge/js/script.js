var what_is_the_meaning_of_life = 42;

// var audio = new Audio('big_al_order.mp3');
// var btn = document.getElementById('btn');
// var div = document.getElementsByTagName('div');
// var classes = document.getElementsByClassName('list-four');
//
// // var lis = document.querySelectorAll('li:nth-of-type(odd)');
// var lis = document.querySelectorAll('li:nth-of-type(odd)');
// var ul = document.querySelector('ul');
//
// // for(var a = 0; a < lis.length; a = a + 2){
// //     lis[a].style.backgroundColor = 'hsl(229, 58%, 60%)';
// // }
// // for(var a = 0; a < lis.length; a++){
// //     lis[a].style.backgroundColor = 'hsl(229, 58%, 60%)';
// // }
// lis.forEach(function(x, y){
//     lis[y].style.backgroundColor = 'hsl(217, 66%, 43%)';
// });
//
// console.log(div);
// // div.addEventListener('mouseover', function(){
// //     alert('hovering the div');
// // });
//
// for(var i = 0; i < div.length; i++){
//     div[i].addEventListener('mouseover', function(){
//         alert('hover');
//     });
// }
//
// for(var j = 0; j < classes.length; j++){
//     classes[j].addEventListener('click', function(){
//         alert('you clicked on the fourth list')
//     });
// }
//
// btn.addEventListener('click', userPrompt);
//
// function userPrompt(){
//     var userName = prompt("What's your name?");
//     console.log(userName);
//     if(userName.trim() === ''){
//         alert('Not just blanks please');
//     }else if(userName.length >= 5){
//         alert(userName);
//     }else{
//         alert('Name must be 5 characters or longer', audio.play());
//         return;
//     }
//
//     // TERNARY OPERATOR
//     // userName.length >= 5 ? alert(userName) : alert('too short');
// }

var input = document.getElementById('userName');
var inputBtn = document.getElementById('submitName');

inputBtn.addEventListener('click', function(e){
    e.preventDefault();
    var userName = input.value;
    console.log(userName);
});
