document.addEventListener('DOMContentLoaded', function() {
    // Get show details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const genre = urlParams.get('genre');
    const year = urlParams.get('year');
    const poster = urlParams.get('poster');

    // Update page elements with show details
    document.getElementById('show-title').textContent = decodeURIComponent(title);
    document.getElementById('show-genre').textContent = decodeURIComponent(genre);
    document.getElementById('show-year').textContent = year;
    document.getElementById('show-poster').src = decodeURIComponent(poster);
    document.title = `Netflix - ${decodeURIComponent(title)}`;

    // Add a placeholder plot
    document.getElementById('show-plot').textContent = 
        `This is a placeholder description for ${decodeURIComponent(title)}. In a real application, this would be fetched from a TV show database API.`;
}); 