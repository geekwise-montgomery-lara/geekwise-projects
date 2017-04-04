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
        ul = document.createElement('ul'), li, poster_path;
    main.appendChild(ul);

    movies.results.forEach(function(e, i){
        li = document.createElement('li'),
        poster_path = document.createElement('img');

        poster_path.src = myVars.get_img_url()+'w500'+e.poster_path;

        li.appendChild(poster_path);
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
