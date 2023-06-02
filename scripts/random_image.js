// Array of image URLs
var imageUrls = [
    "images/signatures/sign_blue.png",
    "images/signatures/sign_red.png",
    "images/signatures/sign_purple.png",
    "images/signatures/sign_black.png"
    // Add more image URLs here
];

// Generate a random index
var randomIndex = Math.floor(Math.random() * imageUrls.length);

// Get the img element by its id
var imgElement = document.getElementById("signlogo");

// Set the src attribute with the randomly selected image URL
imgElement.src = imageUrls[randomIndex];
