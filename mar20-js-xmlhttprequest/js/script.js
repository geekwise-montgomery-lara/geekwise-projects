var what_is_the_meaning_of_life = 42;

// var car = {
//     make: 'Truck',
//     model: 'Explorer',
//     color: 'Red',
//     year: 1999,
//     doors: 4
// };
//
// for(opts in car){
//     // // console.log(opts);
//     // // console.log(car[opts]);
//     // console.log(opts + ' : ' + car[opts]);
// }

const ROOT_URL = 'https://api.github.com/'
const CLIENT_ID = '';
const CLIENT_SECRET = '';

var main = document.querySelector('main'),
    img, h1, req, githubObj, p, input, btn;

// req.onprogress = function(){
//
// };

function getReq(){
  req = new XMLHttpRequest();

  req.open('GET', ROOT_URL +  'users/geekwise-montgomery-lara?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET);
  req.onload = function(){

      if(req.readyState == 4 && req.status === 200){
          console.log('success', req.statusText);
          githubObj = JSON.parse(req.responseText);
      }else{
          console.log('Error', req.statusText);
      }


      // img = document.createElement('img');
      // h1 = document.createElement('h1');
      var githubObj = JSON.parse(req.responseText);
      // // console.log('DONE', req.readyState);
      console.log(githubObj);
      //// console.log(githubObj.avatar_url);
      // img.src = githubObj.avatar_url;
      // h1.textContent = githubObj.login;
      // main.appendChild(img, h1);
  }
  req.send(null);
}

btn.addEventListener('click', function(){
    var btn = document.querySelector('button');

    req = new XMLHttpRequest();

    p = document.querySelector('div p');
    input = document.querySelector('section button')

    req.open('GET', ROOT_URL +  'users/' + input + '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET);
    req.onload = function(){
        p.textContent = githubObj.id;
    }

});

(function(){
    getReq();
    console.log(githubObj);
}());
