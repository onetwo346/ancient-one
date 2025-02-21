// DOM Elements
const homePage = document.getElementById('home-page');
const timelinePage = document.getElementById('timeline-page');
const exploreButton = document.getElementById('explore-button');
const backButton = document.getElementById('back-button');
const timeline = document.getElementById('timeline');

// Sample Timeline Data (Replace with dynamic data from back-end)
const timelineData = [
  {
    title: "Creation (4000 BCE)",
    description: "The beginning of time according to ancient texts.",
    image: "creation.jpg"
  },
  {
    title: "Birth of Christ (1 CE)",
    description: "The start of the Common Era.",
    image: "christ.jpg"
  },
  {
    title: "Fall of Rome (476 CE)",
    description: "The fall of the Western Roman Empire.",
    image: "rome.jpg"
  },
  {
    title: "Future Prediction (2050 CE)",
    description: "Renewable energy dominates global power production.",
    image: "future.jpg"
  }
];

// Event Listeners
exploreButton.addEventListener('click', () => {
  homePage.classList.add('hidden');
  timelinePage.classList.remove('hidden');
  renderTimeline();
});

backButton.addEventListener('click', () => {
  timelinePage.classList.add('hidden');
  homePage.classList.remove('hidden');
});

// Render Timeline
function renderTimeline() {
  timeline.innerHTML = '';
  timelineData.forEach(event => {
    const eventElement = document.createElement('div');
    eventElement.classList.add('timeline-event');
    eventElement.innerHTML = `
      <h2>${event.title}</h2>
      <p>${event.description}</p>
      <img src="${event.image}" alt="${event.title}">
    `;
    timeline.appendChild(eventElement);
  });
}
