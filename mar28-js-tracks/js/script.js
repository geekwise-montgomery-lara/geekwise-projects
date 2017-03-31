(function(){
    getReq('https://www.udacity.com/public-api/v0/courses', init);
}());

function getReq(url, cb){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
      if(req.readyState === 4 && req.status === 200){
            cb(JSON.parse(req.responseText));
      }else{
          console.log('ERROR', req.statusText);
      }
    }
    req.send(null)
}

function init(data){
    var sec = document.querySelector('section'),
        ul = document.createElement('ul'), desc, name, courses;

    sec.appendChild(ul);
    console.log(data.tracks);

    data.tracks.forEach(function(e, i){
        li = document.createElement('li'),
        desc = document.createElement('p');
        name = document.createElement('h1');
        courses = document.createElement('ol');

        desc.textContent = e.description;
        name.textContent = e.name;

        li.append(name, desc, courses)
        ul.appendChild(li);

        console.log(e.courses);

        e.courses.forEach(function(c, d){
            var cLi = document.createElement('li');
            var ca = document.createElement('p');
            console.log(c);

            ca.textContent = c;

            courses.appendChild(cLi);
            cLi.appendChild(ca);
        });
    });
}
