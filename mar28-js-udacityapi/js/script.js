var what_is_the_meaning_of_life = 42;

// function getReq(url, callback){
//     var req = new XMLHttpRequest();
//     req.open('GET', 'https://www.udacity.com/public-api/v0/courses');
//     req.onload = function(){
//         if(req.readyState === 4 && req.status === 200){
//             console.log(JSON.parse(req.responseText).courses);
//             var obj = (JSON.parse(req.responseText).courses);
//             openObj(obj);
//         }else{
//             console.log('ERROR', req.statusText);
//         }
//     }
//     req.send(null);
// }
// getReq();
// function openObj(obj){
//     for(var i = 0; i < obj.length; i++){
//         console.log(obj[0].level);
//         var div = document.createElement('div');
//         var level = document.createElement('p');
//         var title = document.createElement('h1');
//         var sum = document.createElement('p');
//
//         level.textContent = obj[i].level;
//         title.textContent = obj[i].title;
//         sum.textContent = obj[i].summary;
//
//         document.body.append(div);
//         div.append(title, level, sum);
//     }
// }

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
    console.log(data.degrees);
    var main = document.querySelector('main'),
        ul = document.createElement('ul'), li, expected_learning, homepage, image, required_knowledge;

    main.appendChild(ul);

    data.degrees.forEach(function(e, i){
        li = document.createElement('li'),
        expected_learning = document.createElement('p'),
        homepage = document.createElement('a'),
        image = document.createElement('img'),
        required_knowledge = document.createElement('p');

        expected_learning.innerHTML = e.expected_learning;
        homepage.href = e.homepage;
        homepage.textContent = 'Learn More...';
        homepage.target = '_blank';
        if(e.image){
            image.src = e.image;
        }else{
            image.src = 'http://placehold.it/1000x600';
        }
        required_knowledge.innerHTML = e.required_knowledge;

        li.append(image, required_knowledge, expected_learning, homepage);

        ul.appendChild(li);
    })
}
