var what_is_the_meaning_of_life = 42;

function getReq(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.chucknorris.io/jokes/random');
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            console.log(JSON.parse(req.responseText));
            var boi = (JSON.parse(req.responseText).value);
            console.log(boi);
            loadJoke(boi);
            // var p = document.createElement('p');
            // p.textContent = boi;
            // document.body.append(p);
        }else{
            console.log('ERROR', req.statusText);
        }
    }
    req.send(null);
}
getReq();
var btn = document.createElement('button');
function loadJoke(boi){
    var p = document.createElement('p');
    var div = document.querySelector('div');

    p.textContent = boi;
    btn.textContent = 'New Joke';

    div.append(p, btn);
}
btn.addEventListener('click', function(){
    document.location.reload();
});
