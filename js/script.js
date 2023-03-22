"use strict";
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
if (ham !== null && nav !== null) {
    ham.addEventListener('click', function () {
        ham.classList.toggle('active');
        nav.classList.toggle('active');
    });
}
const titles = document.querySelectorAll('.title');
titles.forEach((title) => {
    const titleElement = title;
    titleElement.addEventListener('mouseover', () => {
        titleElement.style.fontSize = '28px';
        titleElement.style.transition = 'font-size 0.5s ease-in-out';
    });
    titleElement.addEventListener('mouseout', () => {
        titleElement.style.fontSize = '36px';
        titleElement.style.transition = 'font-size 0.5s ease-in-out';
    });
});
