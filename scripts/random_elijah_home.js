// Array of image URLs
var imageUrls = [
    "contact/images/elijah/2021-temple.jpg",
    "contact/images/elijah/2023-easter.jpg",
    "contact/images/elijah/2022-trash.jpg",
    "contact/images/elijah/2023-easter.jpg",
    "contact/images/elijah/2023-style.jpeg",
    "contact/images/elijah/2023-easter.jpg",
    "contact/images/elijah/2023-yellowstone.jpg"
    // Add more image URLs here
];

// Generate a random index
var randomIndex = Math.floor(Math.random() * imageUrls.length);

// Get the img element by its id
var imgElement = document.getElementById("elijah-random");

// Set the src attribute with the randomly selected image URL
imgElement.src = imageUrls[randomIndex];
