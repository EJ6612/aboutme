// Array of image URLs
var imageUrls = [
    "images/elijah/2023-easter.jpg",
    "images/elijah/2022-trash.jpg",
    "images/elijah/2023-fair.jpg",
    "images/elijah/2023-fall-torch.jpg",
    // Add more image URLs here
];

// Generate a random index
var randomIndex = Math.floor(Math.random() * imageUrls.length);

// Get the img element by its id
var imgElement = document.getElementById("elijah-random");

// Set the src attribute with the randomly selected image URL
imgElement.src = imageUrls[randomIndex];
