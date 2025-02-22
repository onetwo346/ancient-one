// DOM Elements
const homePage = document.getElementById('home-page');
const timelinePage = document.getElementById('timeline-page');
const exploreButton = document.getElementById('explore-button');
const backButton = document.getElementById('back-button');
const timeline = document.getElementById('timeline');

// Sample Timeline Data (Replace with dynamic data from back-end)
const timelineData = [
  {
    section: "Prehistoric Times",
    events: [
      {
        title: "Creation (4000 BCE)",
        description: "The beginning of time according to ancient texts.",
        image: "creation.jpg"
      }
    ]
  },
  {
    section: "Ancient Civilizations",
    events: [
      {
        title: "Birth of Christ (1 CE)",
        description: "The start of the Common Era.",
        image: "christ.jpg"
      }
    ]
  },
  {
    section: "Future Predictions",
    events: [
      {
        title: "Renewable Energy Dominance (2050 CE)",
        description: "Renewable energy dominates global power production.",
        image: "future.jpg"
      }
    ]
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
  timelineData.forEach(section => {
    const sectionElement = document.createElement('div');
    sectionElement.classList.add('timeline-section');
    sectionElement.innerHTML = `<h2>${section.section}</h2>`;
    section.events.forEach(event => {
      const eventElement = document.createElement('div');
      eventElement.classList.add('timeline-event');
      eventElement.innerHTML = `
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <img src="${event.image}" alt="${event.title}">
      `;
      sectionElement.appendChild(eventElement);
    });
    timeline.appendChild(sectionElement);
  });
}
