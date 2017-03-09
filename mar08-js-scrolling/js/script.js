var what_is_the_meaning_of_life = 42;

const GITHUB_URL = 'http://github.com/';
// console.log(GITHUB_URL);

// console.log('Notification' in window);

// if(!'Notification' in window){
//     console.log('Not avaliable');
// }else{
//     console.log('Is avaliable');
// }

var btn = document.querySelector('button');
// console.log(btn);

// if(!'childElementCount' in btn){
//     itIsnt();
// }else{
//     itIs();
// }
//
// function itIs(){
//     alert('The method is avaliable');
// }
// function itIsnt(){
//     alert('The method is not avaliable');
// }


var nav = document.querySelector('nav');
var hero = document.querySelector('main')
var sec1 = document.querySelector('section:nth-of-type(1)');
var sec2 = document.querySelector('section:nth-of-type(2)');
var sec3 = document.querySelector('section:nth-of-type(3)');

var dist = 0,
    navHeight = 0,
    heroHeight = 0;
    console.log(nav);
window.addEventListener('scroll', function(evt){
    navHeight = nav.clientHeight;
    dist = window.scrollY;
    console.log(dist);

    if(dist > navHeight){
        nav.classList.add('fixed', 'anim');
    }else{
        nav.classList.remove('fixed', 'anim');
    }

    heroheight = hero.clientHeight;
    if(dist > heroheight){
        sec1.classList.add('vis');
    }else{
        sec1.classList.remove('vis');
    }
    if(dist > (heroheight + sec1.clientHeight)){
        sec2.classList.add('vis');
    }else{
        sec2.classList.remove('vis');
    }
    if(dist > (heroheight + sec1.clientHeight + sec2.clientHeight)){
        sec3.classList.add('vis');
    }else{
        sec3.classList.remove('vis');
    }
});
// 742 height of hero
// height of each section 778 + hero
// height of 2 sections + hero 2298
