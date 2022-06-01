const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const searchbox = document.getElementById('search-box');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

if (searchbtn) {
    searchbtn.addEventListener('click', () => {
        L.classList.remove('active');
    })
}