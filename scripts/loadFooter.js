// Select the placeholder for the footer
const footerPlaceholder = document.getElementById('footer');

// Fetch and insert the footer.html content
fetch('/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load footer');
        }
        return response.text();
    })
    .then(data => {
        footerPlaceholder.innerHTML = data;
    })
    .catch(error => {
        console.error('Error loading footer:', error);
    });
