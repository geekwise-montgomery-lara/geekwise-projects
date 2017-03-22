var what_is_the_meaning_of_life = 42;

(function(){
    // getReq('https://api.github.com/users/geekwise-montgomery-lara', getUser);
    getReq('env.json', init);
    // https://api.github.com/users/geekwise-montgomery-lara
}());

function getReq(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            callback(JSON.parse(req.responseText));
        }else{
            console.log('ERROR', req.statusText);
        }
    };
    req.send(null);
}

function init(vars){
    const ROOT_URL = 'https://api.github.com/';
    const CLIENT_ID = vars.client_id;
    const CLIENT_SECRET = vars.client_secret;

    var main = document.querySelector('main'),
        searchInput = document.querySelector('form input[type="search"]'),
        searchSubmit = document.querySelector('form input[type="Submit"]');

    searchSubmit.addEventListener('click', function(evt){
        main.innerHTML = '';
        evt.preventDefault();
        getReq(ROOT_URL+'search/users?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&q='+ searchInput.value, getUser)
    });
}

function getUser(user){
    console.log(user.items);
    var main = document.querySelector('main'),
        ul = document.createElement('ul'), li, img, p, a;
    main.appendChild(ul);
    user.items.forEach(function(e, i){
        li = document.createElement('li'),
        img = document.createElement('img'),
        p = document.createElement('p');
        a = document.createElement('a');

        img.src = e.avatar_url;
        p.textContent = e.login;
        a.href = 'https://github.com/' + e.login;
        a.target = '_blank';
        li.append(a, p);
        a.append(img);
        ul.appendChild(li);
    });
    /*
    var main = document.querySelector('main'),
        img = document.createElement('img'),
        h1 = document.createElement('h1');

    img.src = user.avatar_url;
    h1.textContent = user.login;
    main.append(h1, img);
    */
}
