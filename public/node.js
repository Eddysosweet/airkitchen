
document.addEventListener('DOMContentLoaded', function () {

    const btnMenu = document.querySelector('.MuiSvgIcon-root.menu--icon');
    const back = document.querySelector('.back--menu');
    const menu = document.querySelector('.account');
    console.log(btnMenu);
    back.onclick = function () {
        console.log('heloooo');
        menu.style.left = '0';
    };
}, false);