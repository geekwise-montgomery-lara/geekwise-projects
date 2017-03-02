var what_is_the_meaning_of_life = 42;

var ul = document.createElement('ul');
// document.body.appendChild(ul);
var p = document.getElementsByTagName('p')[0];
document.body.insertBefore(ul, p);
var ulEl = document.getElementsByTagName('ul')[0];
var li;

var userNum = '';
var getNum = function(){
    // console.log(!isNaN(parseInt(arguments[0])));
    if(!isNaN(parseInt(arguments[0])) && arguments[0] > 0){
        alert('Good job');
        userLoop(parseInt(arguments[0]));
    }else {
        alert('Why would you put in 0 or anything less? Why would you hurt me this way');
        getUserNum();
    }
};

function userLoop(num){
    console.log(num);
    for(var i = 1; i < num + 1; i++){
        // console.log(i);
        todoItemGen(i);
    }
}
function todoItemGen(i){
    var li = document.createElement('li');
    ulEl.appendChild(li).textContent = i;
}

function getUserNum(){
    userNum = parseInt(prompt('Put in a number please'));
    // arguments
    getNum(userNum);
};
getUserNum();
