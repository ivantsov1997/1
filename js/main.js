const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

function noscroll() {
    window.scrollTo(0, 0);
}

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open')
    if(nav.classList.contains('menu-open')) window.addEventListener('scroll', noscroll)
    else window.removeEventListener('scroll', noscroll)
})