var what_is_the_meaning_of_life = 42;




var userMovieArray = [];
var movieBtn = document.getElementById('movieBtn');
var removeBtn = document.getElementById('removeBtn');


movieBtn.addEventListener('click', userPrompt);
function userPrompt(){
    // userMovieArray.push(prompt("What's your favorite movie?"));
    // console.log(userMovieArray);
    var userMovie = prompt('Name a good movie!');
    populateArray(userMovie);
    if(userMovieArray.length >= 3){
        console.log(userMovieArray);
    }
    if(userMovieArray.length >= 5){
      // for(var i = 0; i < userMovieArray.length; i++){
      //     console.log(userMovieArray[i]);
      // }
      userMovieArray.forEach(function(el, idx){
          // console.log(userMovieArray);
          console.log(idx + ' : ' + el);
      });
    }
}
function populateArray(un){
    userMovieArray.push(un);
    console.log(userMovieArray);
}


removeBtn.addEventListener('click', remMovie);
function remMovie(){
    userMovieArray.pop();
    console.log(userMovieArray);
}
