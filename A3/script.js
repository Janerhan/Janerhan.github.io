const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

const open_popup = document.getElementById('open_popup');
const popup_container = document.getElementById('popup_container');
const close_popup = document.getElementById('close_popup');



// openpopup.addEventListener('click', () => {
//     popup_container.classList.add('show');
// });

// closepopup.addEventListener('click', () => {
//     popup_container.classList.remove('show');
// });


if (open_popup) {
    open_popup.addEventListener('click', () => {
        popup_container.classList.add('show');
    })
}

if (close_popup) {
    close_popup.addEventListener('click', () => {
        popup_container.classList.remove('show');
    })
}

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