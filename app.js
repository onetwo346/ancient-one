// app.js

// Event listener for the "Tap to Explore" button
document.getElementById('tapToExplore').addEventListener('click', function() {
  window.location.href = "timeline.html"; // Redirect to timeline page
});

// Dynamic functionality (for AI, future predictions, or events)
const currentYear = new Date().getFullYear();
console.log(`Current Year: ${currentYear}`); // Used for timeline calculations

// Sample function to calculate years since Creation
function yearsSinceCreation() {
  const creationYear = 4000; // BCE
  const yearsPassed = currentYear + creationYear; // Add years from Creation to Current Year
  console.log(`Years since Creation: ${yearsPassed}`);
}
