var what_is_the_meaning_of_life = 42;

(function(){
  var distance = document.querySelector('#meter li:nth-of-type(1) span'),
      winW = document.querySelector('#meter li:nth-of-type(2) span'),
      winH = document.querySelector('#meter li:nth-of-type(3) span'),
      heroH = document.querySelector('#meter li:nth-of-type(4) span'),
      hero = document.querySelector('header'),
      sec1 = document.querySelector('section:nth-of-type(1)'),
      sec2 = document.querySelector('section:nth-of-type(2)'),
      sec3 = document.querySelector('section:nth-of-type(3)');

  console.log(sec1);

  var dist = 0,
      winWidth = window.innerWidth,
      winHeight = window.innerHeight,
      heroHeight = hero.clientHeight,
      sec1Height = 0,
      sec2Height = 0;

  distance.textContent = dist;
  winW.textContent = winWidth;
  winH.textContent = winHeight;
  heroH.textContent = heroHeight;

  if(window.innerHeight > sec1.offsetTop){
      sec1.classList.add('visible');
  }

  window.addEventListener('resize', function(){
      winWidth = window.innerWidth,
      winHeight = window.innerHeight,
      heroHeight = hero.clientHeight,

      winW.textContent = window.innerWidth;
      winH.textContent = window.innerHeight;
      heroH.textContent = hero.clientHeight;

      if(window.innerHeight > sec1.offsetTop){
          sec1.classList.add('visible');
      }else{
          sec1.classList.remove('visible')
      }
      if(window.innerHeight > sec2.offsetTop){
          sec2.classList.add('visible');
      }else{
          sec2.classList.remove('visible')
      }
      if(window.innerHeight > sec3.offsetTop){
          sec3.classList.add('visible');
      }else{
          sec3.classList.remove('visible')
      }

  });
  window.addEventListener('scroll', function(){
      dist = window.scrollY;
      distance.textContent = Math.round(dist);

      // console.log((sec1.offsetTop - dist) - winHeight);

      if((sec1.offsetTop - dist) - winHeight <= 0){
          sec1.classList.add('colorIn');
      }else{
          sec1.classList.remove('colorIn');
      }
      if((sec2.offsetTop - dist) - winHeight + sec1Height <= 0){
          sec2.classList.add('colorIns');
      }else{
          sec2.classList.remove('colorIns');
      }
      if((sec3.offsetTop - dist) - winHeight + sec1Height + sec2Height <= 0){
          sec3.classList.add('colorInss');
      }else{
          sec3.classList.remove('colorInss');
      }
  });
}());
