document.addEventListener('DOMContentLoaded', function() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const title = urlParams.get('title');
        const genre = urlParams.get('genre');
        const year = urlParams.get('year');
        const poster = urlParams.get('poster');

        if (!title || !genre || !year || !poster) {
            throw new Error('Missing required parameters');
        }

        document.getElementById('movie-title').textContent = decodeURIComponent(title);
        document.getElementById('movie-genre').textContent = decodeURIComponent(genre);
        document.getElementById('movie-year').textContent = year;
        document.getElementById('movie-poster').src = decodeURIComponent(poster);
        document.title = `Netflix - ${decodeURIComponent(title)}`;

        document.getElementById('movie-plot').textContent = 
            `This is a placeholder description for ${decodeURIComponent(title)}. In a real application, this would be fetched from a movie database API.`;
    } catch (error) {
        console.error('Error loading movie details:', error);
        // Redirect to movies page if there's an error
        window.location.href = 'MoviePage.html';
    }
}); 