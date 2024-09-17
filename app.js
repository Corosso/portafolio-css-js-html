const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const descriptionText = document.getElementById('description-text');
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'es'; // Initial language

fetch('lang.json')
  .then(response => response.json())
  .then(data => {
    const langData = data; // Define langData here
    descriptionText.textContent = langData[currentLang].description;
    langToggle.textContent = currentLang === 'es' ? 'English' : 'Español';

    langToggle.addEventListener('click', () => {
      if (currentLang === 'es') {
        descriptionText.textContent = langData['en'].description;
        langToggle.textContent = 'Español';
        currentLang = 'en';
      } else {
        descriptionText.textContent = langData['es'].description;
        langToggle.textContent = 'English';
        currentLang = 'es';
      }
      const titleText = document.querySelector('h3');
      titleText.textContent = langData[currentLang].title;
    });
  })
  .catch(error => console.error('Error loading JSON file:', error));