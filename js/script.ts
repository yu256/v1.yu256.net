const ham: HTMLElement | null = document.querySelector('#js-hamburger');
const nav: HTMLElement | null = document.querySelector('#js-nav');

if (ham !== null && nav !== null) {
  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
  });
}

const titles = document.querySelectorAll('.title');

titles.forEach((title) => {
  const titleElement = title as HTMLElement;

  titleElement.addEventListener('mouseover', () => {
    titleElement.style.fontSize = '24px';
    titleElement.style.transition = 'font-size 0.5s ease-in-out';
  });

  titleElement.addEventListener('mouseout', () => {
    titleElement.style.fontSize = '32px';
    titleElement.style.transition = 'font-size 0.5s ease-in-out';
  });
});