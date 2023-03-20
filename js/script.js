"use strict";
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
if (ham !== null && nav !== null) {
    ham.addEventListener('click', function () {
        ham.classList.toggle('active');
        nav.classList.toggle('active');
    });
}
