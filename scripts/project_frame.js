// Get a reference to the iframe element
const iframe = document.getElementById('projectsFrame');

// Get references to the arrow buttons
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Define an array of source URLs for the iframe
const sources = [
  'projects/project-cards/project1.html',
  'projects/project-cards/project2.html',
  'projects/project-cards/project3.html'
  // Add more URLs as needed
];

let currentIndex = 0;

// Function to update the iframe src
function updateIframeSrc() {
  iframe.src = sources[currentIndex];
}

// Event listener for the previous button
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = sources.length - 1;
  }
  updateIframeSrc();
});

// Event listener for the next button
nextButton.addEventListener('click', () => {
  if (currentIndex < sources.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateIframeSrc();
});