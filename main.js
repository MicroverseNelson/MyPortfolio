const navlinks = document.querySelector('.nav-links');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');



openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    navlinks.style.display = 'flex';
    navlinks.style.top = '0';
}

function close(){
    navlinks.style.top = '-100%';
}