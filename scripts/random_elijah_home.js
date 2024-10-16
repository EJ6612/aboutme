// Array of image URLs
var imageUrls = [
    "contact/images/elijah/2024-professional.jpg",
    "contact/images/elijah/2024-film.jpg",
    "contact/images/elijah/2024-plane.jpg",
    // Add more image URLs here
];

// Generate a random index
var randomIndex = Math.floor(Math.random() * imageUrls.length);

// Get the img element by its id
var imgElement = document.getElementById("elijah-random");

// Set the src attribute with the randomly selected image URL
imgElement.src = imageUrls[randomIndex];
