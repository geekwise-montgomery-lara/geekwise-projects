var what_is_the_meaning_of_life = 42;

var winW = document.querySelector('#meter li:nth-of-type(1) span'),
    winH = document.querySelector('#meter li:nth-of-type(2) span'),
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    btn = document.querySelector('#meter div input[type="submit"]'),
    rtBtn = document.querySelector('#meter div input[type="button"]'),
    bdColor = document.querySelector('#meter div input:nth-of-type(1)'),
    ftColor = document.querySelector('#meter div input:nth-of-type(2)'),
    spin = document.querySelector('#meter div input:nth-of-type(3)');

    winW.textContent = winWidth;
    winH.textContent = winHeight;

window.addEventListener('resize', function(){
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,

    winW.textContent = window.innerWidth;
    winH.textContent = window.innerHeight;
});

btn.addEventListener('click', function(evt){
    evt.preventDefault();
    document.body.style.backgroundColor = bdColor.value;
    document.body.style.color = ftColor.value;
    if(spin.value = 'yes'){
        document.body.classList.add('spun');
    }else{
        alert('No fun');
    }
});
rtBtn.addEventListener('click', function(){
    document.body.classList.remove('spun');
    document.body.style.backgroundColor = 'cornsilk';
    document.body.style.color = 'black';
    document.querySelector('#meter div input[type="text"]').value = '';
});
