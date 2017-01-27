var navBtn = document.getElementById('nav');
var header = document.getElementById('header');

navBtn.addEventListener('click', toggleHeader);
function toggleHeader(){

    if(header.classList.contains('hide-header')){
        header.classList.remove('hide-header');
    }else {
          header.classList.add('hide-header');
    }
}
