var addBtn = document.getElementById('add');
var removeBtn = document.getElementById('remove');
var userNameArray = [];
var moviesArray = ['Pulp Fiction', 'Resevoir Dogs', 'Inglourious Basterds', 'The Hateful Eight', 'Kill Bill'];
/* for(var i = 0; i < moviesArray.length; i++){
    console.log(moviesArray[i]);
} */
moviesArray.forEach(moviePrint);

function moviePrint(e, i){
    console.log(i + ' : ' + e);
}

addBtn.addEventListener('click', userPrompt);
removeBtn.addEventListener('click', function(){
    alert('It notices me!');
});
function populateArray(un){
    // alert( un );
    userNameArray.push(un);
    console.log(userNameArray);
    if(userNameArray.length >= 5){
        outputArray();
    }
}

function outputArray(){
    userNameArray.forEach(function(el, idx){
        console.log(idx + ' : ' + el);
    });

    /* FOR LOOP
    for(var i = 0; i < userNameArray.length; i++){
        console.log(userNameArray[i]);
    }
    */
}

function userPrompt(){
    var userName = prompt("What's your name?");
    if(userName === null){
        alert('Please enter your username!');
        return;
    }

    var userNameParsed = parseInt(userName);
    var userNameNaN = isNaN(userNameParsed);
    var userNameBlank = userName.trim() === '';
    // console.log('Original: ' + userName);
    // console.log('parsed: ' + userNameParsed);
    // console.log('Is it NaN: ' + userNameNaN);
    // console.log('Is it blank: ' + userNameBlank);

    if(userNameNaN === false && userNameBlank === false || userNameNaN === true && userNameBlank === true){
        alert('You entered bad info!');
    }else{
        // alert('You may continue.');
        populateArray(userName);
    }
}
