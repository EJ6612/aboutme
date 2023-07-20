// Function to show the modal
function openModal() {
    document.getElementById('modalContainer').style.display = 'block';
}

// Function to hide the modal
function closeModal() {
    document.getElementById('modalContainer').style.display = 'none';
}

// Event listeners for the close button and modal container
document.querySelector('.closeBtn').addEventListener('click', closeModal);
document.getElementById('modalContainer').addEventListener('click', closeModal);

// Optional: Prevent modal content from closing the modal when clicked
document.getElementById('modalContent').addEventListener('click', function (event) {
    event.stopPropagation();
});

// Event listener for the 'openModalBtn' button
document.getElementById('openModalBtn').addEventListener('click', openModal);
