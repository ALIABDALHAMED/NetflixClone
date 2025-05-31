document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const title = urlParams.get('title');
        const genre = urlParams.get('genre');
        const year = urlParams.get('year');
        const poster = urlParams.get('poster');
        const video = urlParams.get('video');
        document.getElementById('movie-title').textContent = decodeURIComponent(title);
        document.getElementById('movie-genre').textContent = decodeURIComponent(genre);
        document.getElementById('movie-year').textContent = year;
        document.getElementById('movie-poster').src = decodeURIComponent(poster);
        
        const videoSource = document.getElementById('video-source');
        const movieTrailer = document.getElementById('movie-trailer');
        
        if (video) {
            videoSource.src = decodeURIComponent(video);
            movieTrailer.load();
        } else {
            const videoContainer = document.querySelector('.video-container');
            videoContainer.innerHTML = '<p class="no-video-message">Trailer not available</p>';
        }
}); 