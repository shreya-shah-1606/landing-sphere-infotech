// Function to handle URL redirection based on the hash

function loadContent(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            // Update the contentDiv with the loaded HTML content
            contentDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

function handleRedirection() {
    const hash = window.location.hash.substr(1); // Get the URL fragment without the #

    // Redirect to new page based on the hash
    switch (hash) {
        // case 'home':
        //     window.location.href = 'home.html';
        //     break;
        case 'about':
            loadContent('about-us.html');
            break;
        // case 'contact':
        //     window.location.href = 'contact.html';
        //     break;
        //     default:
        //         window.location.href = 'index.html'; // Redirect to a 404 page if hash doesn't match any known routes
    }
}

// Initial call to handle redirection based on the current URL
handleRedirection();

// Listen for hashchange event to handle redirection dynamically
window.addEventListener('hashchange', handleRedirection);
