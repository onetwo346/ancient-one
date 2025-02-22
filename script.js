// DOM Elements
const homePage = document.getElementById('home-page');
const timelinePage = document.getElementById('timeline-page');
const exploreButton = document.getElementById('explore-button');
const backButton = document.getElementById('back-button');

// Event Listeners
exploreButton.addEventListener('click', () => {
  homePage.classList.add('hidden');
  timelinePage.classList.remove('hidden');
});

backButton.addEventListener('click', () => {
  timelinePage.classList.add('hidden');
  homePage.classList.remove('hidden');
});