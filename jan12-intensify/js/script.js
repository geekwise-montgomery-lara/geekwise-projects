var fm = document.getElementById("fm"),
    fmOpen = document.getElementById("fm-open"),
    fmClose = document.getElementById("fm-close");
// console.log(fm, fmOpen, fmClose);

fmOpen.addEventListener("click", fmAnimOpen);
fmClose.addEventListener("click", fmAnimClose);

function fmAnimOpen(){
    fm.classList.add("open");
}

function fmAnimClose(){
    fm.classList.remove("open");
}
