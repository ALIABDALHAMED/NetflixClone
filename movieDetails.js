document.addEventListener('DOMContentLoaded', function() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const title = urlParams.get('title');
        const genre = urlParams.get('genre');
        const year = urlParams.get('year');
        const poster = urlParams.get('poster');
        const video = urlParams.get('video');

        if (!title || !genre || !year || !poster) {
            throw new Error('Missing required parameters');
        }
        document.getElementById('movie-title').textContent = decodeURIComponent(title);
        document.getElementById('movie-genre').textContent = decodeURIComponent(genre);
        document.getElementById('movie-year').textContent = year;
        document.getElementById('movie-poster').src = decodeURIComponent(poster);
        document.getElementById('video-source').src = decodeURIComponent(video);
        document.getElementById('movie-trailer').load();
        document.title = `Netflix - ${decodeURIComponent(title)}`;

        document.getElementById('movie-plot').textContent = 
            `This is a placeholder description for ${decodeURIComponent(title)}.`;
    } catch (error) {
        console.error('Error loading movie details:', error);
        window.location.href = 'MoviePage.html';
    }
}); 