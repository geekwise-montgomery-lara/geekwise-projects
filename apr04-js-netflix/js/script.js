var what_is_the_meaning_of_life = 42;

(function(){
    getReq('env.json', setEnv);
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
    }
    req.send(null);
}

var myVars;

function setEnv(envs){
    myVars = envVars();
    myVars.set_root_url(envs.root_url);
    myVars.set_img_url(envs.img_url);
    myVars.set_api_key(envs.api_key);
    myVars.set_read_access(envs.read_access);

    var url = myVars.get_root_url()+'search/movie?api_key='+ myVars.get_api_key()+'&language=en-US&page=1&query=Jurassic';
    getReq(url, getMovies);
}

function getMovies(movies){
    var main = document.querySelector('main'),
        section = document.createElement('section'),
        h1 = document.createElement('h1'),
        ul = document.createElement('ul'), li, poster_path, div, h2, p, date, star, stary;
    h1.textContent = 'Trending Movies';
    section.append(h1, ul);
    main.appendChild(section);

    movies.results.forEach(function(e, i){
        console.log(e);
        li = document.createElement('li');
        poster_path = document.createElement('img');
        div = document.createElement('div');
        h2 = document.createElement('h2');
        p = document.createElement('p');
        date = document.createElement('p');
        star = document.createElement('p');
        stary = document.createElement('p');

        stary.textContent = '★';
        star.value = Math.round(e.vote_average / 2);
        for (var i = 0; i < star.value; i++) {
          star.textContent = stary.textContent[i];
        }
        poster_path.src = myVars.get_img_url()+'w500'+e.poster_path;
        h2.textContent = e.title;
        p.textContent = e.overview.split(".").splice(0, 1)+'...';
        date.textContent = e.release_date.split("-").splice(0, 1);

        div.append(h2, date, star, p);
        li.append(poster_path, div);
        ul.appendChild(li);
    });
}

function envVars(){
    var root_url, img_url, api_key, read_access;
    return {
        set_root_url: function(data){
            root_url = data;
        },
        set_img_url: function(data){
            img_url = data;
        },
        set_api_key: function(data){
            api_key = data;
        },
        set_read_access: function(data){
            read_access = data;
        },
        get_root_url: function(){
            return root_url;
        },
        get_img_url: function(){
            return img_url;
        },
        get_api_key: function(){
            return api_key;
        },
        get_read_access: function(){
            return read_access;
        }
    }
}
