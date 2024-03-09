document
    .getElementById('mobile-icon-menu')
    .addEventListener('click', function () {
        toggleMenuMobile();
    });

function toggleMenuMobile() {
    let menu = document.querySelector('.main-menu');
    menu.classList.toggle('show-menu');
}

document
    .getElementById('mobile-icon-close-menu')
    .addEventListener('click', function () {
        closeMenuMobile();
    });

function closeMenuMobile() {
    let menu = document.querySelector('.main-menu');
    menu.classList.remove('show-menu');
}

console.log('Full load!');
