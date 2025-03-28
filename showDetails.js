document.addEventListener('DOMContentLoaded', function() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const title = urlParams.get('title');
        const genre = urlParams.get('genre');
        const year = urlParams.get('year');
        const poster = urlParams.get('poster');
        const videoUrl = urlParams.get('video');

        if (!title || !genre || !year || !poster) {
            throw new Error('Missing required parameters');
        }
        document.getElementById('show-title').textContent = decodeURIComponent(title);
        document.getElementById('show-genre').textContent = decodeURIComponent(genre);
        document.getElementById('show-year').textContent = year;
        document.getElementById('show-poster').src = decodeURIComponent(poster);
        document.getElementById('show-trailer').src = decodeURIComponent(videoUrl);
        document.title = `Netflix - ${decodeURIComponent(title)}`;

        document.getElementById('show-plot').textContent = 
            `placeholder for ${decodeURIComponent(title)}`;
    } catch (error) {
        console.error('Error loading movie details:', error);
        window.location.href = 'TvShowPage.html';
    }
}); 